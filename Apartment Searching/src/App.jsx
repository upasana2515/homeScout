import React, { useState } from 'react';
import './Login.css'; // For styles

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Validation
    if (username === '' || password === '') {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // Mock user credentials validation
    if (username === 'testuser' && password === 'password123') {
      window.location.href = '/mainpage'; // Navigate to main page
    } else {
      setErrorMessage('Invalid username or password.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn">Login</button>

        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <div className="link-container">
          <a href="/signup">Sign up</a>
          <br />
          <a href="/password">Forget password</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
