import React from 'react';

const CameraFeeds = () => {
  const handleLocationSelection = () => {
    // Logic to select a location
  };

  const handleViewCameraFeeds = () => {
    // Logic to view camera feeds
  };

  const handleSensorToggle = () => {
    // Logic to toggle the sensor
  };

  const handleHelp = () => {
    // Logic for help button
  };

  return (
    <div className="container mt-5 py-5">
      <div className="row">
        <div className="col-md-8">
          <div className="camera-feed">
            <h2>Camera Feed</h2>
            {/* Assuming you have a video feed from Arduino */}
            <video width="100%" height="auto" controls>
              <source src="path-to-your-arduino-video-feed" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="col-md-4">
          <div className="options">
            <h2>Controls</h2>
            <div className="form-group">
              <label htmlFor="locationSelect">Choose a location:</label>
              <select id="locationSelect" className="form-control" onChange={handleLocationSelection}>
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
                <option value="location3">Location 3</option>
                {/* Add more locations as needed */}
              </select>
            </div>
            <div className="d-grid">
              <button className="btn btn-primary mt-3" onClick={handleViewCameraFeeds}>View Camera Feeds</button>
              <button className="btn btn-secondary mt-3" onClick={handleSensorToggle}>On the Sensor</button>
              <button className="btn btn-danger mt-3">Reset</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4 offset-md-8">
          <button className="btn btn-info btn-block" onClick={handleHelp}>Help</button>
        </div>
      </div>
    </div>
  );
};

export default CameraFeeds;
