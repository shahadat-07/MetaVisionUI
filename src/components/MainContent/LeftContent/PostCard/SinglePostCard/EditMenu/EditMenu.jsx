import { React, useState } from "react";
import {
  DotsHorizontalIcon,
  ShareIcon,
  PencilAltIcon,
  BanIcon,
  StarIcon,
  TrashIcon,
} from "@heroicons/react/solid";
const EditMenu = () => {
  const [isBoxVisible, setVisible] = useState({ isBoxVisible: false });

  const toogle = () => {
    setVisible((prevState) => ({ isBoxVisible: !prevState.isBoxVisible }));
  };
  const toogleOut = () => {
    setVisible({ isBoxVisible: false });
  };
  return (
    <div className="relative z-50">
      <a onClick={toogle} onBlur={toogleOut} href="#id">
        {" "}
        <DotsHorizontalIcon className="w-10 text-2xl text-gray-700  hover:bg-gray-200 rounded-full p-2 transition -mr-1 " />
      </a>
      <div
        className={`absolute -top-2 right-3 bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 text-base border border-gray-100 ${
          isBoxVisible.isBoxVisible ? "" : "hidden"
        }`}
      >
        <ul className="space-y-1">
          <li>
            <a
              href="#id"
              className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md "
            >
              <ShareIcon className="w-5 mr-1 text-gray-400" />
              <i className="uil-share-alt mr-1"></i> Share
            </a>
          </li>
          <li>
            <a
              href="#id"
              className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md "
            >
              <PencilAltIcon className="w-5 mr-1 text-gray-400" />
              <i className="uil-edit-alt mr-1"></i> Edit Post
            </a>
          </li>
          <li>
            <a
              href="#id"
              className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md "
            >
              <BanIcon className="w-5 mr-1 text-gray-400" />
              <i className="uil-comment-slash mr-1"></i> Disable comments
            </a>
          </li>
          <li>
            <a
              href="#id"
              className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md "
            >
              <StarIcon className="w-5 mr-1 text-gray-400" />
              <i className="uil-favorite mr-1"></i> Add favorites
            </a>
          </li>
          <li>
            <hr className="-mx-2 my-2 " />
          </li>
          <li>
            <a
              href="#id"
              className="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md "
            >
              <TrashIcon className="w-5 mr-1 text-red-500 " />
              <i className="uil-trash-alt mr-1"></i> Delete
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EditMenu;
