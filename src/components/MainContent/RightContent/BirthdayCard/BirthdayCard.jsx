import { React, useState } from "react";
import Card from "./Card/Card";

const BirthdayCard = () => {
  const [isBoxVisible, setVisible] = useState({ isBoxVisible: false });

  const toogle = () => {
    setVisible((prevState) => ({ isBoxVisible: !prevState.isBoxVisible }));
  };

  const toogleOut = () => {
    setVisible({ isBoxVisible: false });
  };
  return (
    <section className="">
      <div>
        <div
          onClick={toogleOut}
          className={` bg-[#EBEBEC]  fixed h-[100%] w-[100%] top-0 left-0 right-0 bottom-0 z-[100] opacity-70 ${
            isBoxVisible.isBoxVisible ? "" : "hidden"
          }`}
        ></div>
        <button onClick={toogle} type="button">
          <div className="bg-white text-left px-4 py-2 rounded-md shadow lg:fixed lg:top-26 lg:w-72">
            <h3 className="text-line-through font-semibold mb-1 ">
              {" "}
              Birthdays{" "}
            </h3>
            <div className="-mx-2 duration-300 flex hover:bg-gray-50  px-2 py-2 rounded-md">
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
        </button>{" "}
        <div
          className={` ${
            isBoxVisible.isBoxVisible ? "" : "hidden"
          } overflow-y-auto overflow-x-hidden fixed top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] z-[110] w-1/2 justify-center items-center`}
        >
          <div className="">
            <div className=" bg-white rounded-lg shadow  px-8 pb-6">
              <div className="flex justify-between items-center py-4 px-6 rounded-t border-b  ">
                <h3 className="text-base font-semibold text-gray-900 lg:text-xl ">
                  Today's birthdays
                </h3>
                <button
                  onClick={toogleOut}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  "
                  data-modal-toggle="walletModal2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div>
                <div className="space-y-6 mt-6">
                  <div className="sm:space-y-8 space-y-6 pb-2">
                    <Card
                      userImg="https://i.ibb.co/MPGKQp9/avatar-3.jpg"
                      userName="@artursskof"
                      years="19 years old"
                    />

                    <Card
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
                  <div className="mt-5 sm:space-y-8 space-y-6">
                    <Card
                      userImg="https://i.ibb.co/f1mwB8V/avatar-6.jpg"
                      userName="@Evgen85"
                      years="21 years old"
                    />

                    <Card
                      userImg="https://i.ibb.co/nf3xHLg/avatar-5.png"
                      userName="@SaSaS "
                      years="23 years old"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthdayCard;
