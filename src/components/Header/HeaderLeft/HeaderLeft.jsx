import { React, useState } from "react";
import SidebarToogle from "../../../Contexts/sidebarToogle";
import { MenuAlt1Icon } from "@heroicons/react/solid";

const HeaderLeft = () => {
  const [isBoxVisible, setVisible] = useState({ isBoxVisible: true });
  const isVisible = isBoxVisible.isBoxVisible;
  console.log({ isVisible });
  const toogle = () => {
    setVisible((prevState) => ({ isBoxVisible: !prevState.isBoxVisible }));
  };
  return (
    <div className="flex items-center space-x-2 lg:space-x-5">
      <SidebarToogle.Provider value={isVisible}>
        {/* <MenuAlt1Icon
          onClick={toogle}
          className=" w-8 text-gray-700 dark:text-gray-50 cursor-pointer"
        /> */}
      </SidebarToogle.Provider>{" "}
      <div id="logo">
        <a href="#id">
          <img
            src="https://i.ibb.co/c3487Vq/logo.png"
            className="hidden lg:block"
            alt=""
          />
          <img
            src="https://i.ibb.co/2ZtL9LY/logo-mobile.png"
            className="lg:hidden ml-11"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default HeaderLeft;
