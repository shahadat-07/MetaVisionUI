import React from "react";

const LikedBy = () => {
  return (
    <div className="flex items-center space-x-3 pt-2">
      <div className="flex items-center">
        <img
          src="https://i.ibb.co/1JKq6YT/avatar-1.jpg"
          className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900"
          alt=""
        />
        <img
          src="https://i.ibb.co/8DtZY6f/avatar-4.jpg"
          className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2"
          alt=""
        />
        <img
          src="https://i.ibb.co/FbXfQ2X/avatar-2.jpg"
          className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2"
          alt=""
        />
      </div>
      <div className="text-gray-600 text-sm dark:text-gray-100">
        Liked <strong> @u-Piaow</strong> and <strong> 209 Others </strong>
      </div>
    </div>
  );
};

export default LikedBy;
