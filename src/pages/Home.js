import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const HomePage = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollingElements = document.querySelectorAll('.scrolling-element');
    scrollingElements.forEach(element => {
      const scrollPosition = window.scrollY;
      const elementPosition = element.offsetTop;
      if (scrollPosition > elementPosition - window.innerHeight / 2) {
        element.classList.add('animate');
      }
    });
  };

  return (
    <div>
      <NavigationBar />
      <style>
        {`
          @keyframes colorChange {
            0% { background-color: #E0E0FF; }
            50% { background-color: #D6D6F5; }
            100% { background-color: #E0E0FF; }
          }
          .animated-bg {
            animation: colorChange 2s infinite alternate;
            font-family: 'Poppins', sans-serif;
          }
          .scrolling-element {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 1s, transform 1s;
          }
          .scrolling-element.animate {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
      <div className="container mt-5 py-5">
        <div className="jumbotron bg-light text-dark pb-4">
          <h1 className="display-4 mb-4 scrolling-element">Welcome to the Elephant Protection System</h1>
          <p className="lead mb-4">Ensuring the safety of elephants near railway crossings.</p>
          <hr className="my-4" />
          <p className="mb-4 scrolling-element">This system is designed to detect elephants near railway crossings and prevent accidents.</p>
          <div className="d-flex">
            <Link to="/Dashbord" className="btn btn-primary btn-lg mr-2 flex-grow-1">Go to Dashbord</Link>
            <Link to="/CameraFeeds" className="btn btn-secondary btn-lg mr-2 flex-grow-1">View Camera Feeds</Link>
            <Link to="/Settings" className="btn btn-success btn-lg mr-2 flex-grow-1">Settings</Link>
            <Link to="/Help" className="btn btn-info btn-lg flex-grow-1">Help</Link>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 scrolling-element">
            <div className="card mb-4 h-100 animated-bg" style={{ backgroundColor: '#E0E0FF', borderWidth: '4px' }}>
              <div className="card-body">
                <h2 className="card-title mb-3">Featured Content</h2>
                <p className="card-text mb-4">Stay updated with the latest news and developments in elephant protection.</p>
                <p className="card-text"><strong>Recent Success Story:</strong> Learn how our system helped prevent an elephant-train collision.</p>
                <Link to="/alerts" className="btn btn-info">View Alerts</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 scrolling-element">
            <div className="card mb-4 h-100 animated-bg" style={{ backgroundColor: '#D6D6F5', borderWidth: '4px' }}>
              <div className="card-body">
                <h2 className="card-title mb-3">Report Elephant Sighting</h2>
                <p className="card-text mb-4">Help us protect elephants by reporting sightings or suspicious activities near railway crossings.</p>
                <Link to="/logging" className="btn btn-warning">Report Sighting</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 scrolling-element">
            <div className="card mb-4 h-100 animated-bg" style={{ backgroundColor: '#D1D8C5', borderWidth: '4px' }}>
              <div className="card-body">
                <h2 className="card-title mb-3">Dashboard</h2>
                <p className="card-text mb-4">Access real-time data and analytics about elephant activity near railway crossings.</p>
                <Link to="/Dashbord" className="btn btn-primary">Go to Dashboard</Link> {/* Connects to Dashboard */}
              </div>
            </div>
          </div>
          <div className="col-md-6 scrolling-element">
            <div className="card mb-4 h-100 animated-bg" style={{ backgroundColor: '#EEEEEE', borderWidth: '4px' }}>
              <div className="card-body">
                <h2 className="card-title mb-3">Camera Feeds</h2>
                <p className="card-text mb-4">View live camera feeds from various locations to monitor elephant movement.</p>
                <Link to="/CameraFeeds" className="btn btn-secondary">View Camera Feeds</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 scrolling-element">
            <div className="card mb-4 animated-bg" style={{ backgroundColor: '#E0E0FF', borderWidth: '4px' }}>
              <div className="card-body">
                <h2 className="card-title mb-3">Help & Support</h2>
                <p className="card-text mb-4">Need assistance or have questions? Contact our support team at <a href="mailto:support@example.com">support@example.com</a>.</p>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-5 pt-4 pb-2 text-center">
          <p>&copy; 2024 Elephant Protection System. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
