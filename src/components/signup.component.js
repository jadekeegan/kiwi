import React, { Component } from 'react';

export default class SignUp extends Component {

  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('http://localhost:5000/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
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