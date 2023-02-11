import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./home.component.css"

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input name="username" type="text" value={this.state.value} onChange={this.handleInputChange} />
        </label>
        <label>
          Password:
          <input name="password" type="text" value={this.state.value} onChange={this.handleInputChange} />
        </label>
          <Link to="/dashboard">
            <input type="submit" value="Submit" />
          </Link>
        </form>
      </div>
    );
  }
}