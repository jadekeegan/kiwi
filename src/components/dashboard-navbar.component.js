import React, { Component } from 'react';
import { useLocation, Link } from "react-router-dom";
import UploadIcon from '@mui/icons-material/Upload';
import SavingsIcon from '@mui/icons-material/Savings';
import EqualizerIcon from '@mui/icons-material/Equalizer';

import "./dashboard-navbar.component.css"

const DashboardNav = () => {
  const location = useLocation();

  return (
    
    <div>
    { location.pathname ==="/dashboard" && 

      <div className="dashboard-navbar">
        <div className="link">
          <Link to="/dashboard" className="sidenav-link">
            <UploadIcon className="icon"/>
            <button className="sidebar-button">upload<br />receipt</button>
          </Link>
        </div>

        <div className="link">
          <Link to="/dashboard" className="sidenav-link">
          <SavingsIcon className="icon"/>
          <button className="sidebar-button">budget</button>
          </Link>
        </div>
        
        <div className="link">
          <Link to="/dashboard" className="sidenav-link">
            <EqualizerIcon className="icon"/>
            <button className="sidebar-button">analytics</button>
          </Link>
        </div>      
      </div>
    }
    </div>
  );
}

export default DashboardNav;