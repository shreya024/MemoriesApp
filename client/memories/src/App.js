<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@material-ui/core";
import Login from "./components/Login/Login"
=======
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Container, AppBar, Typography } from "@material-ui/core";
>>>>>>> 1f6aa3c95bcef91d29f348a0a48c9d405f30b1b8
import Home from "./components/Home";
import css from "./App.module.css";
import PostDetails from "./components/PostDetails/PostDetails";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Container maxWidth="xl">
        
        <Routes>
          <Route path="/posts" element={<Home/>} />
          <Route path="/login" index element={<Login/>} />
          <Route path="/posts/search" element={<Home/>} />
          <Route path="/posts/:id" element={<PostDetails/>} />
          <Route path="/" element={<Navigate to="/login" replace/>} />
        </Routes>
      </Container>
    </BrowserRouter>
=======
    <>
      {loading == false ? (
        <BrowserRouter>
          <Container maxWidth="xl">
            <AppBar className={css.appBar} position="static" color="inherit">
              <Typography className={css.heading} variant="h2" align="center">
                Best Places in the World
              </Typography>
            </AppBar>
            <Switch>
              <Route
                path="/"
                exact
                component={() => <Redirect to="/posts" />}
              />
              <Route path="/posts" exact component={Home} />
              <Route path="/posts/search" exact component={Home} />
              <Route path="/posts/:id" component={PostDetails} />
            </Switch>
          </Container>
          <Footer />
        </BrowserRouter>
      ) : (
        <Preloader />
      )}
    </>
>>>>>>> 1f6aa3c95bcef91d29f348a0a48c9d405f30b1b8
  );
};

export default App;
