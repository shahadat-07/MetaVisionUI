import React from "react";

const Person = ({ src, username }) => {
  return (
    <li className=" ">
      <a
        className="flex space-x-4 items-center mb-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        href="#id"
      >
        <img src={src} className="w-9 rounded-full " alt="" />
        <div className="font-semibold text-gray-600 dark:text-gray-200">
          {" "}
          {username}{" "}
        </div>
      </a>
    </li>
  );
};

export default Person;
