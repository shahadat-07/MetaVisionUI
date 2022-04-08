import { React, useState } from "react";
import BirthdayModal from "./BirthdayModal/BirthdayModal";
import Tab from "../Tab";

const BirthdayCard = () => {
  const [isBoxVisible, setVisible] = useState(false);

  const toogle = () => {
    setVisible(true);
  };

  // console.log(isBoxVisible);
  return (
    <>
      {/* <Tab /> */}
      <a onClick={toogle} href="#birthdays">
        <div className="bg-white mb-5 px-4 py-3 rounded-md shadow">
          <h3 className="text-line-through font-semibold mb-1"> Birthdays </h3>
          <div className="-mx-2 duration-300 flex hover:bg-gray-50 px-2 py-2 rounded-md">
            <img
              src="https://i.ibb.co/2sQfpgZ/gift-icon.png"
              className="w-9 h-9 mr-3"
              alt=""
            />
            <p className="line-clamp-2 leading-6 text-gray-600 text-base">
              {" "}
              <strong> @MappedSwap</strong> and <strong> two others </strong>
              have a birthdays to day .
            </p>
          </div>
        </div>
      </a>
      <BirthdayModal isBoxVisible={isBoxVisible} />
    </>
  );
};

export default BirthdayCard;
