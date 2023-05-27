import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Container } from "@material-ui/core";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import PostDetails from "./components/PostDetails/PostDetails";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Message from "./components/Message/Message";
import UserProfile from './components/UserProfile/UserProfile';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import css from "./App.module.css";
export const ThemeContext = React.createContext();

const App = () => {
  const [theme, setTheme] = useState("Light");
  const [count, setCount] = useState(0);

  const [url, setUrl] = useState(`url('https://images.unsplash.com/photo-1468082547792-d37c6c74003e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80')`);

  const bgData = [
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", 
    "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80", 
    "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", 
    "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", 
    "https://images.unsplash.com/photo-1462400362591-9ca55235346a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2032&q=80", 
    "https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1786&q=80", 
    "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80", 
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", 
    "https://images.unsplash.com/photo-1516417156595-3ca5df62a3a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
    "https://images.unsplash.com/photo-1468082547792-d37c6c74003e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
  ];

  function handleBgChange(){
    if (count === 9){
      setCount(0);
    }
    else{
      setCount(count + 1);
    }
    setUrl(`url('${bgData[count]}')`);
    changeBg.style.backgroundImage = url;
  }

  const changeBg = document.getElementById("body-theme");
  changeBg.style.backgroundImage = url;

  const themeData = { theme, setTheme };
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <ThemeContext.Provider value={themeData}>
        {loading === false ? (
          <>
          {location.pathname === "/login" ? <></> : <Header />}
          <Container maxWidth="xl">
            <Routes>
              <Route path="/posts" element={<Home />} />
              <Route path="/message" element={<Message />} />
              <Route path="/login" index element={<Login />} />
              <Route path="/posts/search" element={<Home />} />
              <Route path="/posts/:id" element={<PostDetails />} />
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/UserProfile" element={<UserProfile />} />
            </Routes>
          </Container>
          {location.pathname === "/login" ? <></> : <div className={css.bgchanger} onClick={handleBgChange}>
            <CropOriginalIcon/>
          </div>}
          {location.pathname === "/login" ? <></> : <Footer />}
        </>

        ) : (
          <Preloader />
        )}
      </ThemeContext.Provider>
    </>
  );
};

export default App;
