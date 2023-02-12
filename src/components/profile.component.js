import React, { Component } from 'react';
import "./profile.component.css"

export default class Profile extends Component {
  render() {
    return (
      <div class="profile-page">
        <h1>your kiwi profile 🥝</h1>
        <p class="section"> 
        <h2>personal settings </h2> 
          <p>email: </p>
          <p>phone number: </p>
          <button class="edit-button"> edit </button>
        </p>
        <br></br>
        <p class="section">
          <h2>budget settings</h2>
          <p>savings per month: </p>
          <p>expected monthly income: </p>
          <p>fixed monthly expenses: </p>
          <p>expenses per category:</p> 
          <button class="edit-button"> edit </button>
        </p>
      </div>
    );
  }
}