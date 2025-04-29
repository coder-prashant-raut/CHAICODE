import React from 'react';
import { Link } from 'react-router-dom'; // if you are using react-router

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-green-400 font-mono p-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold animate-pulse">404</h1>
        <p className="text-2xl mt-4 mb-8">Oops! Page not found.</p>
        
        <div className="border-2 border-green-400 rounded-lg p-6 bg-gray-800 shadow-lg inline-block">
          <p className="text-lg">Looks like you found a broken link... 🧩</p>
          <p className="mt-2 text-sm text-green-300">Don't worry, let's get you back home!</p>
          
          {/* <Link to="/" className="mt-6 inline-block bg-green-400 hover:bg-green-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-300">
            Go to Home
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
