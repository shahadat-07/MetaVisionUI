import { React, useState } from "react";
import {
  ChatAltIcon,
  MenuIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";

const Contact = (props) => {
  const { userImg, isActive, userName } = props.user;
  const [isBoxVisible, setVisible] = useState(false);
  const toogle = () => {
    setVisible(true);
  };
  const toogleOut = () => {
    setVisible(false);
  };

  return (
    <section className="relative ">
      <div onMouseEnter={toogle} onMouseLeave={toogleOut}>
        <a
          className="flex items-center space-x-2 mb-2 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-lg"
          href="#id"
        >
          <div className="">
            <img className="w-10 rounded-full" src={userImg} alt="" />
            <span className={isActive}></span>
          </div>
          <div className="dark:text-gray-200"> {userName} </div>
        </a>
      </div>
      <div
        className={`absolute z-50 bg-white dark:bg-slate-800 -top-20 -left-[350px] shadow-xl px-6 py-4 text-center  ${
          isBoxVisible ? "" : "hidden"
        }`}
      >
        <div className="">
          {" "}
          <img
            className="w-10 rounded-full mb-2 mx-auto"
            src={userImg}
            alt=""
            srcset=""
          />
          <p className="font-semibold text-lg text-gray-900 dark:text-gray-200 mb-2">
            {userName}
          </p>
          <p className="text-gray-800 dark:text-gray-200">
            Become friend with <span className="font-bold">@john</span> and{" "}
            <span className="font-bold">
              14 <br />
              Others
            </span>
          </p>
          <div className="flex items-center space-x-2 text-base mt-4">
            <a href="#">
              {" "}
              <span className="flex text-sm items-center bg-blue-700 text-white font-semibold py-1 px-2.5 rounded-lg">
                <ChatAltIcon className="w-6 mr-1.5" />
                Send message
              </span>
            </a>
            <a href="#">
              <MenuIcon className="w-11 bg-blue-700 px-2.5 py-1 text-white font-medium rounded-lg" />
            </a>
            <a href="#">
              <DotsHorizontalIcon className="w-11 bg-blue-700 px-2.5 py-1 text-white font-medium rounded-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
