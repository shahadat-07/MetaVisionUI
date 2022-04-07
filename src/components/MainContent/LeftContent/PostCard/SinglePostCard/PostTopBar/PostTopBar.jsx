import React from "react";

const PostTopBar = (props) => {
  const { username, hours } = props.postDetails;

  return (
    <div className="flex flex-1 items-center space-x-4">
      <a href="#id">
        <img
          src="https://i.ibb.co/FbXfQ2X/avatar-2.jpg"
          className="bg-gray-200 border border-white rounded-full w-10 h-10"
          alt=""
        />
      </a>
      <div className="flex-1 font-semibold capitalize">
        <a href="#id" className="text-black dark:text-gray-100">
          {username}
        </a>
        <div className="text-gray-700 flex items-center space-x-2">
          {hours}
          <span> hrs </span> <ion-icon name="people"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default PostTopBar;
