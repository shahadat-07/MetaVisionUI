import React from "react";
import LeftContent from "./LeftContent/LeftContent";
import RightContent from "./RightContent/RightContent";

const MainContent = () => {
  return (
    <div className="main_content">
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
