import React from "react";
import "../components/styles/LandingPage.css"; // Importing the custom CSS
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to Our Amazing Service</h1>
        <p className="description">
          We provide the best solutions for all your needs. Whether you're
          looking for cutting-edge technology, reliable support, or just a
          seamless experience, we’ve got you covered.
        </p>
        <div className="cta-buttons">
          <Link to="/login" className="cta-button primary">
            Get Started
          </Link>

          <button className="cta-button secondary">Learn More</button>
        </div>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Feature One</h2>
          <p>
            Discover how we can help you improve efficiency and productivity
            with our unique features.
          </p>
        </div>
        <div className="feature">
          <h2>Feature Two</h2>
          <p>
            Our service is built to be scalable and adaptable to meet your
            specific needs.
          </p>
        </div>
        <div className="feature">
          <h2>Feature Three</h2>
          <p>
            With 24/7 support, we’re always here to help you overcome any
            challenges you may face.
          </p>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Our Service. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
