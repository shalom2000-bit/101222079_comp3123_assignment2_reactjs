import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Navbar.css'; // Import your CSS file
import { token } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <Link to="/" className="logo-text">
            Employee Management
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-links desktop-menu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Signup</Link>
            <Link to="/employees" className="nav-link">Employees</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn">
            <button onClick={toggleMenu} className="menu-toggle-btn">
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">Signup</Link>
          <Link to="/employees" className="nav-link">Employees</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
