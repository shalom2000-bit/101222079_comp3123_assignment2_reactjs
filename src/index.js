import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global CSS styles
import App from './App'; // Main App component
import reportWebVitals from './reportWebVitals'; // For performance measurement
import { AuthProvider } from './context/AuthContext'; // Authentication Context Provider
import { BrowserRouter as Router } from 'react-router-dom'; // React Router for navigation

// Create the root for rendering the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
  </React.StrictMode>
);

// Measure performance in your app, if needed
reportWebVitals(console.log); // Replace 'console.log' with an analytics endpoint if required
