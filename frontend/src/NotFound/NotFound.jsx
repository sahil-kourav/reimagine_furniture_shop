import React from "react";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black text-white px-4 relative overflow-hidden">
      {/* Background glitch text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-5 text-9xl font-black text-white pointer-events-none select-none animate-pulse">
        404
      </div>

      <div className="z-10 text-center space-y-6">
        <div className="flex justify-center animate-bounce">
          <AlertTriangle className="w-20 h-20 text-yellow-500 drop-shadow-xl" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-wider">
          Page Not Found
        </h1>

        <p className="text-lg sm:text-xl max-w-md mx-auto text-gray-300">
         The page you are looking for doesn’t exist or may have been moved.
          <br />
          <span className="text-yellow-400 font-semibold">
            Please check the URL or return to the homepage.
          </span>
        </p>

        <Link
          to="/"
          className="inline-block mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full transition-all duration-300 shadow-lg hover:scale-105"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
