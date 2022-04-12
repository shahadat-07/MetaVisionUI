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
    <li className="mb-2 lg:mb-2">
      <a
        className="flex space-x-1.5 md:space-x-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
        href="#id"
      >
        <div className={` ${className}`}>
          <img className="w-20 rounded-full" src={src} alt="" />
        </div>
        {children}
        <div className="">
          <p className=" space-x-1.5">
            <span className="font-semibold text-gray-600 dark:text-gray-100">
              {userName}
            </span>
            <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">
              {action}
            </span>
            <span className="text-blue-700 text-[16px]">{postName} </span>
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
