import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Container } from "@material-ui/core";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import PostDetails from "./components/PostDetails/PostDetails";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export const ThemeContext = React.createContext();

const App = () => {
  const [theme, setTheme] = useState("Light");
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
                <Route path="/login" index element={<Login />} />
                <Route path="/posts/search" element={<Home />} />
                <Route path="/posts/:id" element={<PostDetails />} />
                <Route path="/" element={<Navigate to="/login" replace />} />
              </Routes>
            </Container>
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
