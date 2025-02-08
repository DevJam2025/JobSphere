import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-pink-200 to-gray-550 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to JobSphere</h1>
      <p className="text-lg mb-6">Find your dream job or hire top talent!</p>

      <div className="flex space-x-4">
        <Link to="/login">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-lg transition">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-6 py-3 bg-green-500 hover:bg-green-700 text-white rounded-lg transition">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
