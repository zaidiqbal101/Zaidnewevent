import React from "react";

const FullScreenLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        {/* Loading Text */}
        <p className="text-white text-lg sm:text-xl font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default FullScreenLoader;
