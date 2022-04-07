import React from "react";

const Notification = ({
  className = "",
  src,
  userName,
  action,
  postName,
  time,
  children,
}) => {
  return (
    <li className="mb-4">
      <a
        className="flex space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
        href="#id"
      >
        <div className={` ${className}`}>
          <img className="w-10 rounded-full" src={src} alt="" />
        </div>
        {children}
        <div className="">
          <p className=" space-x-2">
            <span className="font-semibold text-gray-700 dark:text-gray-100">
              {userName}
            </span>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              {action}
            </span>
            <span className="text-blue-700">{postName} </span>
          </p>
          <time className="text-sm font-medium text-gray-600 dark:text-gray-300">
            {" "}
            {time}{" "}
          </time>
        </div>
      </a>
    </li>
  );
};

export default Notification;
