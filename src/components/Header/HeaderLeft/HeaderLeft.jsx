import React from "react";

import { MenuAlt1Icon } from "@heroicons/react/solid";

const HeaderLeft = () => {
  return (
    <div className="flex items-center space-x-2 lg:space-x-5">
      <MenuAlt1Icon className="w-8 text-gray-700 dark:text-gray-50 cursor-pointer" />{" "}
      <div id="logo">
        <a href="#id">
          <img
            src="https://i.ibb.co/c3487Vq/logo.png"
            className="hidden lg:block"
            alt=""
          />
          <img
            src="https://i.ibb.co/2ZtL9LY/logo-mobile.png"
            className="lg:hidden"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default HeaderLeft;
