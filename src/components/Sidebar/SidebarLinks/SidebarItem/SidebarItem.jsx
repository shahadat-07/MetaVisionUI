import React from "react";

const SidebarItem = ({ className = "", id = "", emoji, title }) => {
  return (
    <li className={`first:pt-2`}>
      <a
        className={`flex items-center space-x-2 font-semibold text-base text-gray-600 dark:text-gray-200 p-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg ${className}`}
        href={id}
      >
        <p className="text-2xl">{emoji}</p>
        <span> {title} </span>{" "}
      </a>
    </li>
  );
};

export default SidebarItem;
