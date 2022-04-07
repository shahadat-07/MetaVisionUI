import React from "react";

const EditMenu = () => {
  return (
    <div>
      <a href="#id">
        {" "}
        <i className="icon-feather-more-horizontal text-2xl hover:bg-gray-200 rounded-full p-2 transition -mr-1 dark:hover:bg-gray-700"></i>{" "}
      </a>
      <div
        className="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700"
        uk-drop="mode: click;pos: bottom-right;animation: uk-animation-slide-bottom-small"
      >
        <ul className="space-y-1">
          <li>
            <a
              href="#id"
              className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
            >
              <i className="uil-share-alt mr-1"></i> Share
            </a>
          </li>
          <li>
            <a
              href="#id"
              className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
            >
              <i className="uil-edit-alt mr-1"></i> Edit Post
            </a>
          </li>
          <li>
            <a
              href="#id"
              className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
            >
              <i className="uil-comment-slash mr-1"></i> Disable comments
            </a>
          </li>
          <li>
            <a
              href="#id"
              className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800"
            >
              <i className="uil-favorite mr-1"></i> Add favorites
            </a>
          </li>
          <li>
            <hr className="-mx-2 my-2 dark:border-gray-800" />
          </li>
          <li>
            <a
              href="#id"
              className="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600"
            >
              <i className="uil-trash-alt mr-1"></i> Delete
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EditMenu;
