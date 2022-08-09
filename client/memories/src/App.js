import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate , useLocation } from "react-router-dom";
import { Container} from "@material-ui/core";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import PostDetails from "./components/PostDetails/PostDetails";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading === false ? (
        <>
          <Container maxWidth="xl">
            
          <Routes>
            <Route path="/posts" element={<Home/>} />
            <Route path="/login" index element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/posts/search" element={<Home/>} />
            <Route path="/posts/:id" element={<PostDetails/>} />
            <Route path="/" element={<Navigate to="/login" replace/>} />
          </Routes>
          </Container>
          {location.pathname === "/login" || location.pathname === "/signup" ? <></> : <Footer />}
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default App;
