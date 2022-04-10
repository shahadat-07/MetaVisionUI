import { React, useState } from "react";
import SidebarContacts from "./SidebarContacts/SidebarContacts";
import SidebarFooter from "./SidebarFooter/SidebarFooter";
import SidebarLinks from "./SidebarLinks/SidebarLinks";
import SidebarToogler from "./SidebarToogler/SidebarToogler";
import SidebarToogle from "../../Contexts/sidebarToogle";
import { MenuAlt1Icon } from "@heroicons/react/solid";

const Sidebar = () => {
  return (
    <section>
      <div
        className={`-translate-x-96 md:translate-x-0 w-[300px] transition-all delay-200 ease-in fixed top-0 left-0 z-10 pb-7 overflow-scroll  h-full `}
      >
        <div className="py-0 px-3 mt-[78px] border-t-2 bor border-r-2 dark:border-r-slate-700 bg-gray-50 dark:bg-slate-900 h-screen ">
          {/* <h1>Let's Check Value: {isBoxVisible}</h1> */}

          <SidebarLinks />
          {/* <SidebarToogler /> */}
          <SidebarContacts />
          <SidebarFooter />
        </div>

        {/* <!-- sidebar overly for mobile --> */}
        <div className="side_overly"></div>
      </div>
    </section>
  );
};

export default Sidebar;
