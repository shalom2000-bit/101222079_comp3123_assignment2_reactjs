import React from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from '../components/Signup'; // Import Signup component
import './styles/SignupPage.css'; // Import the CSS file

const SignupPage = () => {
  const navigate = useNavigate();

  // Handle successful signup and navigate to the login page or another page
  const handleSignupSuccess = () => {
    navigate('/login'); // Redirect to login page after successful signup
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <div className='center'>
          <h2 className="title">
           Sign Up
          </h2>
        </div>

        {/* Render the Signup component */}
        <Signup onSignupSuccess={handleSignupSuccess} />

        {/* Login Redirect */}
        <div className="text">
          Already have an account?{' '}
          <button 
            onClick={() => navigate('/login')}
            className="link"
          >
            Login here
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
