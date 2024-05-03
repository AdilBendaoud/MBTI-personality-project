import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import logo from '../assets/img/logo 1.png';
import Header from './Header'; 
import { useAuth } from '../context/authContext';
import './index.css'; 
import axios from 'axios';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const auth = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formIsValid = true;
    let errors = {};

    if (!email) {
      formIsValid = false;
      errors['email'] = 'Please fill out this field.';
    }

    if (!password) {
      formIsValid = false;
      errors['password'] = 'Please fill out this field.';
    }

    setErrors(errors);
    if (formIsValid) {
      try {
        auth.loginAction(email, password);
      } catch (error) {
        console.log(error)
      } 
    }
  };

  return (
    
    <div className="h">
      <div className="login-container">
        <div className="logo-container">
          <img src={logo} className="logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Welcome Academi Test</h2>
          
          <div className="input-container">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          <div className="input-container">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>

          <div className="options">
            <label>
              <input type="checkbox" name="remember" />
              Remember me
            </label>
            <a href="#forgot">Forgot your password?</a>
          </div>

          <button type="submit" className="login-button">Log In</button>
        </form>
      </div>
    </div>
  );
}
export default Login;