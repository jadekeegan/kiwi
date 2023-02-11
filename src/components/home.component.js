import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./home.component.css"

export default class Home extends Component {

  render() {
    return (
      <div class="home-page">
        <h1>Welcome to Kiwi!</h1>
        <p>Kiwi is an personal finance application built to make managing your budget and becoming financially literate easier!</p>
        <Link to="/sign-up">
          <button>Get Started!</button>
        </Link>
      </div>
    );
  }
}