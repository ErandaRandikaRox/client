import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Elephant Protection</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/Dashbord">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/camera-feeds">Cameras</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings">Settings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/help">Help</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
