import { React } from "react";
import Card from "./Card/Card";

const BirthdayCard = () => {
  return (
    <>
      <div>
        {/* <button
          type="button"
          data-modal-toggle="walletModal2"
          className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
        >
          <svg
            className="mr-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            ></path>
          </svg>
          Connect wallet
        </button> */}
        {/* <button type="button" data-modal-toggle="walletModal2">
          dfkd
        </button> */}
        <button type="button" data-modal-toggle="walletModal2">
          <div className="bg-white text-left dark:bg-slate-700 px-4 py-2 rounded-md shadow">
            <h3 className="text-line-through font-semibold mb-1 dark:text-gray-200">
              {" "}
              Birthdays{" "}
            </h3>
            <div className="-mx-2 duration-300 flex hover:bg-gray-50 px-2 py-2 rounded-md">
              <img
                src="https://i.ibb.co/2sQfpgZ/gift-icon.png"
                className="w-9 h-9 mr-3"
                alt=""
              />
              <p className="line-clamp-2 leading-6 text-gray-600 dark:text-gray-200 text-base">
                {" "}
                <strong> @MappedSwap</strong> and <strong> two others </strong>
                have a birthdays to day .
              </p>
            </div>
          </div>
        </button>

        <div
          id="walletModal2"
          tabindex="-1"
          aria-hidden="true"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
        >
          <div className="w-full max-w-2xl h-full md:h-auto ">
            <div className=" bg-white rounded-lg shadow dark:bg-gray-700 px-8 pb-6">
              <div className="flex justify-between items-center py-4 px-6 rounded-t border-b dark:border-gray-600 ">
                <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                  Today's birthdays
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
    </>
  );
};

export default BirthdayCard;
