import React, { Component } from 'react';
import { useLocation, Link } from 'react-router-dom';
import kiwiLogo from '../assets/kiwi-logo.png'

import "./home-navbar.component.css"

const Navbar = () => {
  const location = useLocation();

  return (
    <div class="navbar">
      <ul>
        <li>
          <Link to="/" class="nav-link">
            <div class="brand">
              <img src={kiwiLogo} width="50" height="50"></img>
              <p class="brand-label">kiwi</p>
            </div>
          </Link>
        </li>
      
        { location.pathname !=="/sign-in" && 
        <li>
          <Link to="/sign-in" class="nav-link">
            <button class="nav-button">sign in</button>
          </Link>
        </li>
        }
        
      </ul>
        
    </div>
  );
}

export default Navbar;