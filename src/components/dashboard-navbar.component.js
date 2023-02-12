import React, { Component } from 'react';
import { useLocation, Link } from "react-router-dom";
// import MaterialIcon, {colorPalette} from 'material-icons-react';

import "./dashboard-navbar.component.css"

const DashboardNav = () => {
  const location = useLocation();

  return (
    
    <div>
    { location.pathname ==="/dashboard" && 

      <div className="dashboard-navbar">
        <div className="link">
          <Link to="/dashboard" className="nav-link">
            {/* <MaterialIcon icon="upload" size="small" /> */}
            <button className="nav-button">upload<br />receipt</button>
          </Link>
        </div>

        <div className="link">
          <Link to="/dashboard" className="nav-link">
          {/* <MaterialIcon icon="savings" size="small" /> */}
          <button className="nav-button">budget</button>
          </Link>
        </div>
        
        <div className="link">
          <Link to="/dashboard" className="nav-link">
            {/* <MaterialIcon icon="analytics" size="small" /> */}
            <button className="nav-button">analytics</button>
          </Link>
        </div>      
      </div>
    }
    </div>
  );
}

export default DashboardNav;