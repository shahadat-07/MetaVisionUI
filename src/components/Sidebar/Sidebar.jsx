import React from "react";
import SidebarContacts from "./SidebarContacts/SidebarContacts";
import SidebarFooter from "./SidebarFooter/SidebarFooter";
import SidebarLinks from "./SidebarLinks/SidebarLinks";
import SidebarToogler from "./SidebarToogler/SidebarToogler";
// import "./Sidebar.css";

const Sidebar = () => {
  // const style = {
  //   height: "calc(100% - 40px)",
  // };
  return (
    <section>
      <div className="w-[300px]  transition-all delay-300 ease-in-out fixed top-0 left-0  z-10 pb-7 overflow-hidden ">
        <div className="py-0 px-3 mt-[78px] border-t-2 bor border-r-2 bg-gray-50">
          <SidebarLinks />
          <SidebarToogler />
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
