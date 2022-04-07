import React from "react";
// import "./Header.css";
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";
import HeaderSearch from "./HeaderSearch/HeaderSearch";

const Header = () => {
  return (
    <header className="border-b pb-2 p-2 md:p-4">
      <div className="flex justify-between">
        <HeaderLeft />
        <HeaderSearch />
        <HeaderRight />
      </div>
    </header>
  );
};

export default Header;
