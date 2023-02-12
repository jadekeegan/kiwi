import React, { Component } from 'react';
import { useLocation, Link } from "react-router-dom";

import "./dashboard-navbar.component.css"

const DashboardNav = () => {
  const location = useLocation();

  return (
    <div class="dashboard-navbar">
    { location.pathname ==="/dashboard" && 
    
      <ul>
        <li>
          <Link to="/upload" class="nav-link">
            <button class="nav-button">upload a receipt</button>
          </Link>
        </li>

        <li>
          <Link to="/budget" class="nav-link">
            <button class="nav-button">budget</button>
          </Link>
        </li>
        
        <li>
          <Link to="/analytics" class="nav-link">
            <button class="nav-button">analytics</button>
          </Link>
        </li>      
      </ul>
    }
    </div>
  );
}

export default DashboardNav;