import React from "react";

const Billet = () => {
  return (
    <div className="fixed z-50 bottom-0 bg-black bg-opacity-75 w-full">
      <div className="grid sm:grid-cols-2 gap-x-0 text-gray-100 justify-center py-7 space-y-6 space-x-6 sm:space-y-0">
        <div className="text-right">
          <span className="text-base sm:text-lg font-semibold">
            This is a first demo of our project.
          </span>
        </div>
        <div className="text-left">
          <a
            href="#id"
            className="bg-pink-500 px-14 py-4 rounded-lg text-gray-100 font-semibold"
          >
            Join presale
          </a>
        </div>
      </div>
    </div>
  );
};

export default Billet;
