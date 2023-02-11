import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./home.component.css"

export default class Home extends Component {

  render() {
    return (
      
      <div class="home-page">
        <div class="welcome-info">
          <h1>welcome to kiwi!</h1>
          <p>kiwi is a personal finance application built to make managing your budget and becoming financially literate easier!</p>
          <Link to="/sign-up">
            <button>get started!</button>
          </Link>
        </div>

        {/* <div class="about">
          <h1>welcome to kiwi!</h1>
          <p>kiwi is a personal finance application built to make managing your budget and becoming financially literate easier!</p>
          <Link to="/sign-up">
            <button>get started!</button>
          </Link>
        </div> */}
      </div>

    );
  }
}