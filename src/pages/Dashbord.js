import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import NavigationBar from './NavigationBar';

const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Dashboard = () => {
  const [map, setMap] = useState(null);
  const [location, setLocation] = useState(center);
  const [zoom, setZoom] = useState(10);
  const [sensorOn, setSensorOn] = useState(false);

  const onLoad = map => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  const handleZoomIn = () => {
    setZoom(prevZoom => prevZoom + 1);
  };

  const handleZoomOut = () => {
    setZoom(prevZoom => (prevZoom > 0 ? prevZoom - 1 : 0));
  };

  const handleSensorToggle = () => {
    setSensorOn(prevState => !prevState);
  };

  const handleHelp = () => {
    // Handle help button click
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    }
  }, []);

  return (
    <div>
      <NavigationBar />
      <style>
        {`
          .custom-btn {
            width: 100%;
            height: 50px; /* Adjust height as needed */
          }
        `}
      </style>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={zoom}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                <Marker position={location} />
              </GoogleMap>
            </LoadScript>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-start">
            <button className="btn btn-primary mb-2 custom-btn" onClick={handleZoomIn}>Zoom In</button>
            <button className="btn btn-primary mb-2 custom-btn" onClick={handleZoomOut}>Zoom Out</button>
            <button className={`btn custom-btn ${sensorOn ? 'btn-danger' : 'btn-success'} mb-2`} onClick={handleSensorToggle}>
              {sensorOn ? 'Sensor Off' : 'Sensor On'}
            </button>
            <button className="btn btn-info custom-btn" onClick={handleHelp}>Help</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
