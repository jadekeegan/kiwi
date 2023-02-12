import React, { Component } from 'react';

export default class SignUp extends Component {

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

  handleSubmit(event) {
    event.preventDefault();
    this.register();
  }

  register = async () => {
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    console.log(body);
  };

  render() {
    return (
      <div class="sign-up">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          
        <label>
          Email:
          <input name="email" type="text" value={this.state.value} onChange={this.handleInputChange} />
        </label>
        <label>
          Password:
          <input name="password" type="text" value={this.state.value} onChange={this.handleInputChange} />
        </label>

          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  } 
}