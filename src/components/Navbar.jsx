
import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

function Navbar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Evolora
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/companies">Companies</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

        {isLoggedIn && <Logout />}
      </div>
    </nav>
  );
}

export default Navbar;
