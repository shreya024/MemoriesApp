import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import { getPosts, getPostsBySearch } from "../actions/posts";
import Paginate from "./Pagination";
import css from "../App.module.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const query = useQuery();
  const history = useNavigate();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      history.push(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      history.push("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAdd = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDelete = (tagtoDelete) => {
    setTags(tags.filter((tag) => tag !== tagtoDelete));
  };

  return (
    
      <Grow in>
        <Container maxWidth="xl">
          <AppBar className={css.appBar} position="static" color="inherit" style={{ background: "#adf8ff", borderRadius:"10px"}}>
            <Typography className={css.heading} variant="h2" align="center" style={{ color:"black", textShadow: "2px 2px #ff0000"}}>
              Best Places in the World
            </Typography>
          </AppBar>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={6} md={9}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppBar position="static" color="inherit" style={{ margin: "10px 0", padding:"10px", borderRadius:"9px", border:"2px solid #006100", borderStyle:"outset"}}>
                <TextField
                  name="search"
                  variant="outlined"
                  label="Search Memories"
                  onKeyPress={handleKeyPress}
                  fullWidth
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <ChipInput
                  style={{ margin: "10px 0"}}
                  value={tags}
                  onAdd={handleAdd}
                  onDelete={handleDelete}
                  label="Search Tags"
                  variant="outlined"
                />
                <Button onClick={searchPost} color="primary" variant="contained">
                  Search
                </Button>
              </AppBar>
              <br />
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              <Paper elevation={6}>
                <Paginate page={page} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grow>

  );
};

export default Home;
