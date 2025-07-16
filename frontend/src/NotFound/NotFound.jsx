import React from "react";
import { AlertTriangle } from "lucide-react";
const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="flex justify-center mb-6">
          <AlertTriangle className="w-20 h-20 text-yellow-500" />
        </div>
      <h1>404 - Page Not Found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
