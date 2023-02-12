import React, { Component } from 'react';
import EditIcon from '@mui/icons-material/Edit';

import "./profile.component.css"

export default class Profile extends Component {
  render() {
    return (
      <div className="profile-page">
        <h1 className="profile-title">your kiwi profile 🥝</h1>
        <p className="section"> 
        <div class="settings">
          <h2 className="profile-subtitle">personal settings </h2>
          <button className="edit-button"><EditIcon /></button>
        </div>
          <p className="fields">email: </p>
          <p className="fields">phone number: </p>
        </p>
        <br></br>
        <p className="section">
          <div class="settings">
            <h2 className="profile-subtitle">budget settings</h2>
            <button className="edit-button"><EditIcon /></button>
          </div>
          <p className="fields">savings per month: </p>
          <p className="fields">expected monthly income: </p>
          <p className="fields">fixed monthly expenses: </p>
          <p className="fields">expenses per category:</p> 
        </p>
      </div>
    );
  }
}