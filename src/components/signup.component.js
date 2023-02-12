import React, { Component } from 'react';

export default class SignUp extends Component {

  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
  }

  callBackendAPI = async () => {
    // const response = await fetch('http://localhost:5000/', {
    //   method: 'POST'
    // })
    // .then((response) => {
    //   return response.json();
    // })
    // .then((json) => {
    //   console.log(json);
    // });
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      body: JSON.stringify({
        email: "test@gmail.com",
        password: "password123"
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
        <p>{this.state.data}</p>
        <form onSubmit={this.handleSubmit}>
          
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>

          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  } 
}