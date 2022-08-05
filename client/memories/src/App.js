import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Container, AppBar, Typography } from "@material-ui/core";
import Login from "./components/Login/Login"
import Home from "./components/Home";
import css from "./App.module.css";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/login" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" component={PostDetails} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
