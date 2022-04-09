import React, { useState } from "react";
import MessageBox from "./MessageBox/MessageBox";
import { ChatAltIcon } from "@heroicons/react/solid";
const Messages = () => {
  const [message, setMessage] = useState();

  const [isBoxVisible, setVisible] = useState({ isBoxVisible: false });

  const toogle = () => {
    setVisible((prevState) => ({ isBoxVisible: !prevState.isBoxVisible }));
  };
  const toogleOut = () => {
    setVisible({ isBoxVisible: false });
  };

  return (
    <>
      <a onClick={toogle} onBlur={toogleOut} href="#id" className="relative">
        <ChatAltIcon className="h-9 text-gray-700 dark:text-gray-50 bg-gray-200 dark:bg-slate-700 rounded-full p-2 ml-3.5" />
        <div class="rounded-full flex p-2 absolute bg-red-500 top-[-5px] left-10">
          <p class="absolute top-0 left-1 font-bold text-white text-xs">4</p>
        </div>
      </a>

      <div
        className={`z-50 absolute border shadow-xl px-5 pt-6 bg-white dark:bg-slate-900 rounded-lg w-[60vw] sm:w-[50vw] md:w-[35vw] lg-w-[15vw] xl:w-[25vw] 2xl:w-[25vw] h-[580px] top-16 right-3 overflow-auto ${
          isBoxVisible.isBoxVisible ? "" : "hidden"
        }`}
      >
        <div onMouseEnter={toogle}>
          <div>
            <h1 className="text-xl font-semibold text-gray-600 dark:text-gray-100 mb-4">
              Messages{" "}
            </h1>
            <div className="">
              <a href="#id" title="Notifications">
                <ion-icon name="settings-outline"></ion-icon>
              </a>
              <a
                href="#id"
                data-tippy-placement="left"
                title="Mark as read all"
              >
                <ion-icon name="checkbox-outline"></ion-icon>
              </a>
            </div>
          </div>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            className="mb-6 bg-gray-100 focus:bg-gray-200 dark:bg-slate-800 focus:dark:bg-slate-700 outline-0 rounded-full py-2 px-4 w-full placeholder:text-sm placeholder:font-medium "
            placeholder="Search in Messages"
          />
          <div className="">
            <ul className="last:mb-5">
              <MessageBox
                className="un-read"
                src="https://i.ibb.co/f1mwB8V/avatar-6.jpg"
                userName="@kurgiva"
                time="12:43 PM"
                text="Alex will explain you how ..."
              />

              <MessageBox
                src="https://i.ibb.co/f1mwB8V/avatar-6.jpg"
                userName="@holyfura"
                time="Wed"
                text="Alia just joined Messenger!"
              />

              <MessageBox
                src="https://i.ibb.co/nf3xHLg/avatar-5.png"
                userName="@eternal_wolf``"
                time="Sun"
                text="Replay Your Comments insit amet consectetur "
              />

              <MessageBox
                src="https://i.ibb.co/nf3xHLg/avatar-5.png"
                userName="@eternal_wolf``"
                time="Sun"
                text="Replay Your Comments insit amet consectetur "
              />
              <MessageBox
                className="un-read"
                src="https://i.ibb.co/FbXfQ2X/avatar-2.jpg"
                userName=" @IceCreamy "
                time="12:43 PM"
                text="Alex will explain you how ... "
              />
              <MessageBox
                className="un-read"
                src="https://i.ibb.co/FbXfQ2X/avatar-2.jpg"
                userName=" @IceCreamy "
                time="12:43 PM"
                text="Alex will explain you how ... "
              />
              <MessageBox
                src="https://i.ibb.co/1JKq6YT/avatar-1.jpg"
                userName=" @vl77lp "
                time="6:43 PM"
                text="Thanks for The Answer sit amet... "
              />
              <MessageBox
                src="https://i.ibb.co/1JKq6YT/avatar-1.jpg"
                userName=" @vl77lp "
                time="6:43 PM"
                text="Thanks for The Answer sit amet... "
              />
            </ul>
          </div>
          <div className="sticky bottom-0 bg-white text-center pb-4">
            <a href="#id" className="font-semibold text-blue-700">
              {" "}
              See all in Messages
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
