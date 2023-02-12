import React, { Component } from 'react';
import "./profile.component.css"

export default class Profile extends Component {
  render() {
    return (
      <div className="profile-page">
        <h1 className="profile-title">your kiwi profile 🥝</h1>
        <p className="section"> 
        <h2 className="profile-subtitle">personal settings </h2> 
          <p>email: </p>
          <p>phone number: </p>
          <button className="edit-button"> edit </button>
        </p>
        <br></br>
        <p className="section">
          <h2>budget settings</h2>
          <p>savings per month: </p>
          <p>expected monthly income: </p>
          <p>fixed monthly expenses: </p>
          <p>expenses per category:</p> 
          <button className="edit-button"> edit </button>
        </p>
      </div>
    );
  }
}