import React, { Component } from 'react';
import history from './history';

import "./signin.component.css"

export default class SignIn extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.login();
  }

  login = async () => {
    console.log("about to fetch");
    const response = await fetch('http://localhost:5000/login/' + this.state.email, {method: 'GET',})
    console.log("fetched data");
    try {
      const body = await response.json();
      if(this.state.password != body.password) {
        console.log("incorrect password");
        // error message for password
      }
      else {
        history.push('/dashboard/' + body.id);
        window.location.reload(false);
      } 
    } catch (e) {
      console.log("no user found!");
      // pop up asking them to sign up 
    }
  };

    render() {
      return (
        <div className="slide-up">
          <div className="border">
            <h1>welcome back!</h1>
            <p>please enter your details:</p>

           <form class="form" onSubmit={this.handleSubmit}>
          
            <input name="email" type="text" value={this.state.value} placeholder="email" onChange={this.handleInputChange} />
            <input name="password" type="password" value={this.state.value} placeholder="password" onChange={this.handleInputChange} />

            <input type="submit" value="Submit" />
            <p className="body">don't have an account? <a className="body" href="/sign-up">sign up here!</a></p>
          </form>
  
          </div>
        </div>
      );
    }
  }