import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeContext } from "../../App";

function Header() {
     const { setTheme, theme } = React.useContext(ThemeContext);
  return (
    <div className={theme === "Dark" ? "header" : "header light"}>
      <div className="container">
        <div className="left-buttons">
          <button className="side-bar">
            <MenuIcon id="menu-icon" />
          </button>
          <Link className="logo" to="/">
            <h2>memories</h2>
          </Link>
        </div>

        <div className={theme === "Dark" ? "search-bar" : "search-bar light" }>
          <input
            type="text"
            className="search"
            placeholder="Search Post"
          ></input>
          <div
            className={theme === "Dark" ? "search-button" : "search-button-light" }
          >
            <SearchIcon id="search-icon" />
          </div>
        </div>

        <div className="side-buttons">
          <Link to="/login" className="sign-in">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
