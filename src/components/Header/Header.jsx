import React from "react";
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";
import HeaderSearch from "./HeaderSearch/HeaderSearch";

const Header = () => {
  return (
    <section className="sticky top-0 z-50 ">
      <header className="border-b-2  pb-2 p-2 md:p-4 bg-white ">
        <div className="flex justify-between">
          <HeaderLeft />
          <HeaderSearch />
          <HeaderRight />
        </div>
      </header>
    </section>
  );
};

export default Header;
