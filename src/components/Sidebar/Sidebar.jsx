import { React, useState } from "react";
import SidebarContacts from "./SidebarContacts/SidebarContacts";
import SidebarFooter from "./SidebarFooter/SidebarFooter";
import SidebarLinks from "./SidebarLinks/SidebarLinks";
import SidebarToogle from "../../Contexts/sidebarToogle";
import { MenuAlt1Icon } from "@heroicons/react/solid";

const Sidebar = () => {
  const [isBoxVisible, setVisible] = useState({ isBoxVisible: true });
  const toogle = () => {
    setVisible((prevState) => ({ isBoxVisible: !prevState.isBoxVisible }));
    console.log("Let's Check", isBoxVisible);
  };
  return (
    <section>
      <MenuAlt1Icon
        onClick={toogle}
        className="fixed lg:hidden ml-96 w-7 -left-[370px] top-3 md:top-6 z-[200] text-gray-700 cursor-pointer"
      />
      <div
        className={`${
          isBoxVisible.isBoxVisible ? "" : "translate-x-0"
        } -translate-x-96 lg:translate-x-0 w-[300px] transition-all delay-200 ease-in fixed -top-6 md:-top-1 left-0 z-10 overflow-scroll overflow-x-hidden h-full scroll-px-px	`}
      >
        <div className="px-3 mt-[78px] border-t-2 bor border-r-2  bg-gray-50 ">
          <SidebarLinks />
          <SidebarContacts />
          <SidebarFooter />
        </div>
        <div className="side_overly"></div>
      </div>
    </section>
  );
};

export default Sidebar;
