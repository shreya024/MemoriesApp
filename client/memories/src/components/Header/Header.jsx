import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <div className="header">
      <div className="container">

        <div className="left-buttons">
          <button className="side-bar"><MenuIcon id="menu-icon" /></button>
          <Link className="logo" to='/'>
            <h2>memories</h2>
          </Link>
        </div>
        
        <div className="search-bar">
          <input type="text" className="search" placeholder="Search Post"></input>
          <div className="search-button"><SearchIcon id="search-icon" /></div>
        </div>

        <div className="side-buttons">
          <Link to='/login' className="sign-in">Sign In</Link>
        </div>

      </div>
    </div>
  );
}

export default Header;
