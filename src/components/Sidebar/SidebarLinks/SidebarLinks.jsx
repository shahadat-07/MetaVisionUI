import { React, useState } from "react";
import SidebarItem from "./SidebarItem/SidebarItem";
import SidebarToogle from "../../../Contexts/sidebarToogle";

const SidebarLinks = () => {
  const [isBoxVisible, setVisible] = useState({ isBoxVisible: false });
  const isVisible = isBoxVisible.isBoxVisible;
  console.log(isVisible);

  const toogle = () => {
    setVisible((prevState) => ({ isBoxVisible: !prevState.isBoxVisible }));
  };
  return (
    <>
      <ul>
        <SidebarItem
          className="text-blue-700 bg-blue-100 transition"
          emoji="🤗"
          title="My Feed"
        />
        <SidebarItem emoji="👫" title="My Friends" />
        <SidebarItem emoji="😎" title="My communities" />

        <SidebarItem emoji="🤩" title="My NFT" />

        <SidebarItem emoji="📌" title="#NFT Posts" />

        <SidebarItem emoji="🎶" title="#NFT Music" />

        <SidebarItem emoji="📷" title=" #NFT Photos" />
        <div className={` ${isBoxVisible.isBoxVisible ? "" : "hidden"}`}>
          <SidebarItem id="more-veiw" className="" emoji="🤯" title="#Create" />

          <SidebarItem id="more-veiw" className="" emoji="⚒" title="#Mint" />

          <SidebarItem
            id="more-veiw"
            className=""
            emoji="🥳"
            title="My Events"
          />

          <SidebarItem
            id="more-veiw"
            className=""
            emoji="💸"
            title="My finance"
          />

          <SidebarItem
            id="more-veiw"
            className=""
            emoji="🤑"
            title="#Wallet statistic"
          />
          <li className="relative">
            <a
              className="flex items-center space-x-2 font-semibold text-base text-gray-600 p-2.5 hover:bg-gray-100 rounded-lg"
              href="#id"
            >
              <p className="text-lg">🗒</p>
              <span> #Whitelists </span>
              <span className="absolute top-3 right-2 text-red-500 bg-red-200 p-1 text-xs font-medium">
                N
              </span>
            </a>
          </li>
          <li className="relative">
            <a
              className="flex items-center space-x-2 font-semibold text-base text-gray-600 p-2.5 hover:bg-gray-100 rounded-lg"
              href="#id"
            >
              <p className="text-lg">🎁</p>
              <span>#Airdrops </span>
              <span className="absolute top-3 right-2 text-red-500 bg-red-200 p-1 text-xs font-medium">
                N
              </span>
            </a>
          </li>
        </div>
      </ul>
      <a
        href="#id"
        className="see-mover h-10 flex my-1 pl-2 rounded-xl text-gray-600 dark:text-gray-200"
      >
        <span
          onClick={toogle}
          className={`w-full flex items-center hover:bg-gray-100 dark:hover:bg-slate-700 ${
            isBoxVisible.isBoxVisible ? "hidden" : ""
          }`}
        >
          <svg
            className="  bg-gray-100 dark:bg-slate-700 mr-2 p-0.5 rounded-full text-lg w-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          See More
        </span>
        <span
          onClick={toogle}
          className={`w-full flex items-center hover:bg-gray-100 dark:hover:bg-slate-700 ${
            isBoxVisible.isBoxVisible ? "" : "hidden"
          }`}
        >
          <svg
            className="bg-gray-100 mr-2 p-0.5 rounded-full text-lg w-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
          See Less
        </span>
      </a>
    </>
  );
};

export default SidebarLinks;
