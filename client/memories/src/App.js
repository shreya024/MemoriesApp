import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@material-ui/core";
import Login from "./components/Login/Login"
import Home from "./components/Home";
import css from "./App.module.css";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  return (
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
  );
};

export default App;
