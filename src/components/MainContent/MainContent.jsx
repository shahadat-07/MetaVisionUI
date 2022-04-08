import React from "react";
import LeftContent from "./LeftContent/LeftContent";
import RightContent from "./RightContent/RightContent";
import "./maincontent.css";

const MainContent = () => {
  return (
    <div className="main_content bg-gray-50">
      <div className="mcontainer">
        <div class="lg:flex lg:space-x-10">
          <LeftContent />
          <RightContent />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
