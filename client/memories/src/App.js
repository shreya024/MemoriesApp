import React from "react";
import "./App.css";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" className="App-header">
        <Typography variant="h2" align="center" className="App-heading">
          Memories
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between">
            <Grid>
              <Posts />
            </Grid>
            <Grid>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
