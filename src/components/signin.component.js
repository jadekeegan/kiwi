import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import "./signin.component.css"

const SignIn = ({setIsLoggedIn}) => {
  

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  const login = async () => {
    const response = await fetch('http://localhost:5000/login', {
      method: 'GET',
      body: JSON.stringify({
        email: this.state.username // uhh idk if this is how to access the username or nah
      })
    })
    
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    console.log(body);
  };

  const handleSubmit = useCallback(async event => { 
    event.preventDefault();
    let result = await this.login();
    // check if result.express is empty, if not, check if passwords match
    setIsLoggedIn(true);
  }, [setIsLoggedIn]);

    return (
      <div className="slide-up">
        <div className="border">
          <h1>welcome back!</h1>
          <p>please enter your details:</p>

          <form onSubmit={handleSubmit}>
            <label> 
              <input name="username" type="text" placeholder="username or email" onChange={handleInputChange} />
            </label>
            <label>
              <input name="password" type="text" placeholder="password" onChange={handleInputChange} />
            </label>
            <input type="submit" value="log in!"></input>
            <p className="body">don't have an account? <a className="body" href="/sign-up">sign up here!</a></p>
         </form>

        </div>
      </div>
    );
  }

  export default SignIn;