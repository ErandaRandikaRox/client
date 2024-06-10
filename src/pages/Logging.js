import React, { useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
 

const Logging = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showHelpCenter, setShowHelpCenter] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', { username, password });
      console.log(response.data);
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
    }
  };

  const toggleHelpCenter = () => {
    setShowHelpCenter(!showHelpCenter);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=AA0UZVXJd2o&pp=ygUkZWxlcGhhbnQgc2hvcnQgdmlkZW8gZnVsbCBoZCA0ayAxMDgw"
        playing={true}
        loop={true}
        muted={true}
        controls={false}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1, // Hides YouTube logo
              controls: 0, // Hides YouTube controls
              showinfo: 0, // Hides video title and uploader info
              autoplay: 1, // Autoplays the video
              loop: 1, // Loops the video
              mute: 1 // Mutes the video
            }
          }
        }}
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      <div className="relative z-10 w-80 h-160 bg-white bg-opacity-50 p-8 rounded-lg shadow-lg border-4 border-blue-500 space-y-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-900">Sign in to your account</h2>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input id="username" name="username" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105">Sign in</button>
          </div>
        </form>
      </div>
      {/* Help Center Button */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={toggleHelpCenter}>
          {showHelpCenter ? 'Close Help Center' : 'Help Center'}
        </button>
        {showHelpCenter && (
          <div className="bg-white p-4 rounded-lg shadow-lg mt-2">
            <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
            <p className="text-gray-800">Contact our support team at support@example.com</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Logging;
