import React, { useState } from "react";
import css from "./Post.module.css";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { likePost, deletePost,bookMarkPost } from "../../../actions/posts";
import { ThemeProvider,createTheme, makeStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: '#1565c0',
    },
    secondary: indigo,
  }
});

const useStyles = makeStyles({
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(-2%)"
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)"
    }
  },
  root: {
    backgroundColor: 'rgba(0,0,0,0.47)',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
    color: "white",
    animation: "$fadeIn 0.3s ease-in-out",
  },
  secondary: {
    color: "#adb5bd",
    fontFamily: "Poppins",
  },
  but: {
    color: "#adb5bd",
    '&:hover': {
      color: "white",
   }
  }
  });

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const [bookmarked, setbookmarked] = useState(false);
  const dispatch = useDispatch();
  return (
    <Card className={classes.root}>
        <ThemeProvider theme={theme}>
        <CardMedia
          className={css.media}
          image={post.selectedFiles[0]}
          title={post.title}
        ></CardMedia>
        <div className={css.overlay}>
          <Typography variant="h6">{post.creator} </Typography>
          <Typography variant="body2" className={classes.secondary}>
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={css.overlay2}>
          <Button
            className={classes.but}
            size="small"
            onClick={() => setCurrentId(post._id)}
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        <div className={css.details}>
          <Typography variant="body2" className={classes.secondary} color="white" component="h2">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <Typography
          className={css.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {post.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" className={classes.secondary} color="white" component="p">
            {post.message}
          </Typography>
        </CardContent>
        <CardActions className={css.cardActions}>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(likePost(post._id))}
          >
            <ThumbUpAltIcon fontSize="small" /> {post.likeCount}{" "}
          </Button>
          <Button size="small" color="primary" onClick={()=>{
            setbookmarked(!bookmarked);
            dispatch(bookMarkPost(post._id));
          }}>
           { !bookmarked && <BookmarkAddIcon fontSize="small" />}
            {bookmarked && <BookmarkAddedIcon fontSize="small"/>}
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="small" />
          </Button>
        </CardActions>
    </ThemeProvider>
      </Card>
  );
};

export default Post;
