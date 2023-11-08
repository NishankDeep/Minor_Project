// LoginPage.js

import React, { useState } from 'react';
import classes from './Login.module.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', username, password);
  };

  return (
    <div className={classes.login_page}>
      <div className={classes.login_container}>
        <h2>Login</h2>
        <form>
          <div className={classes.input_group}>
            <label htmlFor="username">Username/Email:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={classes.input_group}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={classes.button_group}>
            <button type="button" onClick={handleLogin}>Login</button>
            <a href="#reset-password">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
