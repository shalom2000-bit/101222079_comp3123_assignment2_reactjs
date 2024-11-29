import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import Login from '../components/Login'; // Adjust the path to where Login.jsx is located
import './styles/LoginPage.css'; // Import the corresponding CSS file

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  // Handle the login success and store the token
  const handleLoginSuccess = (token) => {
    // Use the login function from AuthContext to set the token in context and localStorage
    login(token);
    // Redirect to the Employee List page
    navigate('/employees');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className='heading-container'>
          <h2 className="login-heading">Login</h2>
        </div>

        {/* Render the Login component */}
        <Login onLoginSuccess={handleLoginSuccess} />

        {/* Signup Redirect */}
        <div className="signup-redirect">
          Don’t have an account?{' '}
          <button
            onClick={() => navigate('/signup')}
            className="signup-button"
          >
            Sign up here
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
