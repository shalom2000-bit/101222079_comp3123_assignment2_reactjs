import React, { useState } from 'react';
import { loginUser } from '../services/api';
import './styles/Login.css'; // Make sure to import the CSS file

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    try {
      // Simulate an API call for login (replace with real API)
      const response = await loginUser(email, password);  // Replace with actual API call
      if (response.token) {
        // On successful login, pass the token back to the parent component
        onLoginSuccess(response.token);
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className="login-form">
      {/* Email */}
      <div className='input-align'>
        <label className="login-label">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          placeholder="Enter your email"
        />
      

      {/* Password */}
        <label className="login-label">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          placeholder="Enter your password"
        />
      </div>

      {/* Error message */}
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="login-button"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
