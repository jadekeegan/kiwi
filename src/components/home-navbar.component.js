import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./home-navbar.component.css"

const Navbar = () => {
  return (
    <div class="home-navbar">
      <ul>
        <li>
          <Link to="/" class="nav-link">
            <div class="brand">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Kiwi.svg" width="50" height="50"></img>
              <p class="brand-label">kiwi</p>
            </div>
          </Link>
        </li>
        
        <li>
          <Link to="/sign-in" class="nav-link">
            <button class="nav-button">sign in</button>
          </Link>
        </li>
        
      </ul>
        
    </div>
  );
}

export default Navbar;