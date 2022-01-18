import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/Know_Your_Cocktail/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/Know_Your_Cocktail/">Home</Link>
          </li>
          <li>
            <Link to="/random">Suggest One</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
