import { React, useState } from "react";
import SidebarToogle from "../../../Contexts/sidebarToogle";

const SidebarToogler = () => {
  const [isBoxVisible, setVisible] = useState({ isBoxVisible: false });
  const isVisible = isBoxVisible.isBoxVisible;
  console.log(isVisible);

  const toogle = () => {
    setVisible((prevState) => ({ isBoxVisible: !prevState.isBoxVisible }));
  };
  return (
    <SidebarToogle.Provider value={isVisible}>
      <a
        href="#id"
        className="see-mover h-10 flex my-1 pl-2 rounded-xl text-gray-600 dark:text-gray-200"
      >
        <span
          onClick={toogle}
          className={`w-full flex items-center hover:bg-gray-100 dark:hover:bg-slate-700 ${
            isBoxVisible.isBoxVisible ? "hidden" : ""
          }`}
        >
          <svg
            className="  bg-gray-100 dark:bg-slate-700 mr-2 p-0.5 rounded-full text-lg w-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          See More
        </span>
        <span
          onClick={toogle}
          className={`w-full flex items-center hover:bg-gray-100 dark:hover:bg-slate-700 ${
            isBoxVisible.isBoxVisible ? "" : "hidden"
          }`}
        >
          <svg
            className="bg-gray-100 mr-2 p-0.5 rounded-full text-lg w-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
          See Less
        </span>
      </a>
    </SidebarToogle.Provider>
  );
};

export default SidebarToogler;
