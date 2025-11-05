import React from "react";
import { Link } from "react-router";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center px-6">

      <h1 className="text-6xl font-bold text-[#24a0f3] mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        Oops! Page not found
      </h2>
      <p className="text-gray-600 max-w-md mb-6">
        The page you’re looking for doesn’t exist, has been moved, or is
        temporarily unavailable.
      </p>

      <Link
        to="/"
        className="flex items-center gap-2 bg-[#24a0f3] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1b86d1] transition-all duration-200"
      >
        <FaHome /> Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
