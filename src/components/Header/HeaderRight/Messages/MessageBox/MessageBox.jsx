import React from "react";

const MessageBox = ({ className = "", src, userName, time, text }) => {
  return (
    <li className={`mb-2  ${className}`}>
      <a
        className="flex space-x-4 hover:bg-gray-100  p-2 rounded-lg"
        href="#id"
      >
        <div className="">
          {" "}
          <img className="w-10 rounded-full" src={src} alt="" />
        </div>
        <div className="w-full">
          <div className="flex justify-between">
            <span className="text-gray-600  font-semibold"> {userName} </span>{" "}
            <time className="font-medium text-gray-400  text-sm"> {time} </time>
          </div>
          <p className="text-gray-600  text-sm font-medium break-normal	">
            {" "}
            {text}{" "}
          </p>
        </div>
      </a>
    </li>
  );
};

export default MessageBox;
