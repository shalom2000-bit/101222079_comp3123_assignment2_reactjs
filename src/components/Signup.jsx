import React, { useState } from 'react';
import axios from 'axios';
import './styles/Signup.css'; // Import the CSS file
import { signupUser } from '../services/api';

const Signup = ({ onSignupSuccess }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
     
      const response = await signupUser(username, email, password,)

      if (response) {
        onSignupSuccess();
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 'Signup failed. Please try again.'
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      {/* Username */}
      <div>
        <label className="label">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
          placeholder="Enter your username"
        />
      </div>

      {/* Email */}
      <div>
        <label className="label">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          placeholder="Enter your email"
        />
      </div>

      {/* Password */}
      <div>
        <label className="label">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          placeholder="Enter your password"
        />
      </div>

      {/* Confirm Password */}
      <div>
        <label className="label">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="input"
          placeholder="Confirm your password"
        />
      </div>

      {error && <div className="error-message">{error}</div>}

          <div className='signup-btn'>
            <button type="submit" className="button">
              Sign Up 
            </button>
          </div>
    </form>
  );
};

export default Signup;
