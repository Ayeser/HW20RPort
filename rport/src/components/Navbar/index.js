import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        MSW Portfolio
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/discover"
              className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
            >
              Discover
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Story
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about2"
              className={window.location.pathname === "/about2" ? "nav-link active" : "nav-link"}
            >
              Project 1
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about3"
              className={window.location.pathname === "/about3" ? "nav-link active" : "nav-link"}
            >
              Project 2
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about4"
              className={window.location.pathname === "/about4" ? "nav-link active" : "nav-link"}
            >
              Project 3
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
