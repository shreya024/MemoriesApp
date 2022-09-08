import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate , useLocation } from "react-router-dom";
import { Container} from "@material-ui/core";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Notification from "./components/Notification/Notification"
import PostDetails from "./components/PostDetails/PostDetails";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

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
          {location.pathname === "/login" ? <></> : <Header />}
          <Container maxWidth="xl">
            
          <Routes>
            <Route path="/posts" element={<Home/>} />
            <Route path="notification" element={<Notification/>}/>
            <Route path="/login" index element={<Login/>} />
            <Route path="/posts/search" element={<Home/>} />
            <Route path="/posts/:id" element={<PostDetails/>} />
            <Route path="/" element={<Navigate to="/login" replace/>} />
          </Routes>
          </Container>
          {location.pathname === "/login" ? <></> : <Footer />}
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default App;
