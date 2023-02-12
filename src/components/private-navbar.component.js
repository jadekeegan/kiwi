import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./home-navbar.component.css"

const PrivateNav = () => {
  return (
    <div class="navbar">
      <ul>
        <li>
          <Link to="/" class="nav-link">
            <div class="brand">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Kiwi.svg" width="50" height="50"></img>
              <p class="brand-label">kiwi</p>
            </div>
          </Link>
        </li>

        <div>
          <li>
            <Link to="/dashboard" class="nav-link">
              <button class="nav-button">dashboard</button>
            </Link>
          </li>
      
          <li>
            <Link to="/profile" class="nav-link">
              <button class="nav-button">profile</button>
            </Link>
          </li>
        </div>

        
        
      </ul>
    </div>
  );
}

export default PrivateNav;