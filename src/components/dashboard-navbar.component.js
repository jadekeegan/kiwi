import React, { Component } from 'react';
import UploadIcon from '@mui/icons-material/Upload';
import SavingsIcon from '@mui/icons-material/Savings';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { HashLink as Link } from 'react-router-hash-link';

import "./dashboard-navbar.component.css"

const DashboardNav = () => {
  return (
    
    <div>
      <div className="dashboard-navbar">
        <div className="link">
          <Link to="/dashboard/:id#file-upload-section" className="sidenav-link">
            <UploadIcon className="icon"/>
            <button className="sidebar-button">upload<br />receipt</button>
          </Link>
        </div>

        <div className="link">
          <Link to="/dashboard/:id#expenses-section" className="sidenav-link">
          <SavingsIcon className="icon"/>
          <button className="sidebar-button">budget</button>
          </Link>
        </div>
        
        <div className="link">
          <Link to="/dashboard/:id#analytics-section" className="sidenav-link">
            <EqualizerIcon className="icon"/>
            <button className="sidebar-button">analytics</button>
          </Link>
        </div>      
      </div>
    </div>
  );
}

export default DashboardNav;