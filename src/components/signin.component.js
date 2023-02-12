import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from './dashboard.component';
import "./signin.component.css"

const SignIn = (setIsLoggedIn) => {
  

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    setIsLoggedIn(true)
    event.preventDefault();
  }

    return (
      <div className="slide-up">
        <p className="border">
          <h1>welcome back!</h1>
          <p>please enter your details:</p>
          <form onSubmit={handleSubmit}>
            <label> 
              <input name="username" type="text" placeholder="username or email" onChange={handleInputChange} />
            </label>
            <label>
              <input name="password" type="text" placeholder="password" onChange={handleInputChange} />
            </label>
            <Link to="/dashboard">
              <input type="submit" value="log in!" />
            </Link>
            <p className="body">don't have an account? <a className="body" href="/sign-up">sign up here!</a></p>
         </form>
        </p>
      </div>
    );
  }

  export default SignIn;