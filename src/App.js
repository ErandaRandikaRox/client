import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logging from './pages/Logging';
import Home from './pages/Home';
import Dashboard from './pages/Dashbord';
import CameraFeeds from './pages/CameraFeeds'; // Import the CameraFeeds component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logging" element={<Logging />} />
        <Route path="/Dashbord" element={<Dashboard />} />
        <Route path="/CameraFeeds" element={<CameraFeeds />} />
      </Routes>
    </Router>
  );
}

export default App;
