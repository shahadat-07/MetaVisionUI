import { React, useState } from "react";
import BirthdayCard from "./BirthdayCard/BirthdayCard";

const BirthdayModal = ({ isBoxVisible }) => {
  return (
    <div className={`bg-white top-24 left-96 rounded-xl shadow-lg w-1/2 p-6`}>
      {/* <!-- close button --> */}
      {/* <button className="p-2.5 bg-gray-100 rounded-full m-3" type="button">
        Hi
      </button> */}

      <div className="flex items-center space-x-3 mb-10 ">
        <ion-icon
          name="gift"
          className="text-yellow-500 text-xl bg-yellow-50 p-1 rounded-md"
        ></ion-icon>
        <div className="text-xl font-semibold text-gray-600">
          {" "}
          Today's birthdays{" "}
        </div>
      </div>

      <div className="space-y-6">
        <div className="sm:space-y-8 space-y-6 pb-2">
          <BirthdayCard
            userImg="https://i.ibb.co/MPGKQp9/avatar-3.jpg"
            userName="@artursskof"
            years="19 years old"
          />

          <BirthdayCard
            userImg="https://i.ibb.co/FbXfQ2X/avatar-2.jpg"
            userName=" @SeejSt"
            years="13 years old"
          />
        </div>
        <div className="relative cursor-pointer">
          <div className="bg-gray-50 rounded-lg px-5 py-4 font-semibold text-base">
            {" "}
            Upcoming birthdays{" "}
          </div>
          <i
            className="-translate-y-1/2 absolute icon-feather-chevron-up right-4 text-xl top-1/2 transform text-gray-400"
            id="upcoming"
          ></i>
          <i
            className="-translate-y-1/2 absolute icon-feather-chevron-down right-4 text-xl top-1/2 transform text-gray-400"
            id="upcoming"
          ></i>
        </div>
        <div className="mt-5 sm:space-y-8 space-y-6" id="upcoming">
          <BirthdayCard
            userImg="https://i.ibb.co/f1mwB8V/avatar-6.jpg"
            userName="@Evgen85"
            years="21 years old"
          />

          <BirthdayCard
            userImg="https://i.ibb.co/nf3xHLg/avatar-5.png"
            userName="@SaSaS "
            years="23 years old"
          />
        </div>
      </div>
    </div>
  );
};

export default BirthdayModal;
