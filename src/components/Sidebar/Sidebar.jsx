import { React, useState } from "react";
import SidebarContacts from "./SidebarContacts/SidebarContacts";
import SidebarFooter from "./SidebarFooter/SidebarFooter";
import SidebarLinks from "./SidebarLinks/SidebarLinks";
import SidebarToogler from "./SidebarToogler/SidebarToogler";
import SidebarToogle from "../../Contexts/sidebarToogle";
import { MenuAlt1Icon } from "@heroicons/react/solid";

const Sidebar = () => {
  // const [isBoxVisible, setVisible] = useState({ isBoxVisible: true });
  // const toogle = () => {
  //   setVisible((prevState) => ({ isBoxVisible: !prevState.isBoxVisible }));
  //   console.log("Let's Check", isBoxVisible);
  // };
  return (
    <section>
      {/* <MenuAlt1Icon
        onClick={toogle}
        className="ml-96 w-8 text-gray-700 dark:text-gray-50 cursor-pointer"
      /> */}
      <SidebarToogle.Consumer>
        {(isBoxVisible) => (
          <div
            className={`${
              isBoxVisible ? "" : "-translate-x-96"
            } -translate-x-96 xl:translate-x-0 w-[300px] transition-all delay-200 ease-in fixed top-0 left-0 z-10 overflow-scroll overflow-x-hidden h-full `}
          >
            <div className="px-3 mt-[78px] border-t-2 bor border-r-2 dark:border-r-slate-700 bg-gray-50 dark:bg-slate-900">
              {/* <h1>Let's Check Value: {isBoxVisible}</h1> */}

              <SidebarLinks />
              {/* <SidebarToogler /> */}
              <SidebarContacts />
              <SidebarFooter />
            </div>

            {/* <!-- sidebar overlay for mobile --> */}
            <div className="side_overly"></div>
          </div>
        )}
      </SidebarToogle.Consumer>
    </section>
  );
};

export default Sidebar;
