import React from "react";

const BirthdayCard = ({ userImg, userName, years }) => {
  return (
    <div className="flex items-center sm:space-x-6 space-x-3">
      <img
        src={userImg}
        className="sm:w-16 sm:h-16 w-14 h-14 rounded-full"
        alt=""
      />
      <div className="flex-1">
        <div className="flex items-center justify-between mb-3">
          <div className="text-base text-gray-600 font-semibold">
            {" "}
            <a href="#id"> {userName} </a>{" "}
          </div>
          <div className="font-medium text-sm text-gray-400"> {years}</div>
        </div>
        <div className="relative">
          <input
            type="text"
            name
            id
            className="py-2 px-3 border rounded-sm w-full focus:outline-0"
            placeholder="Write her on Timeline"
          />
          <ion-icon
            name="happy"
            className="absolute right-3 text-2xl top-1/4"
          ></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;
