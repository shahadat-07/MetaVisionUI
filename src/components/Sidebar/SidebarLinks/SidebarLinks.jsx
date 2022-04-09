import React from "react";
import SidebarItem from "./SidebarItem/SidebarItem";

const SidebarLinks = () => {
  return (
    <ul>
      <SidebarItem className="" emoji="🤗" title="My Feed" />
      <SidebarItem emoji="👫" title="My Friends" />
      <SidebarItem emoji="😎" title="My communities" />

      <SidebarItem emoji="🤩" title="My NFT" />

      <SidebarItem emoji="📌" title="#NFT Posts" />

      <SidebarItem emoji="🎶" title="#NFT Music" />

      <SidebarItem emoji="📷" title=" #NFT Photos" />
      <div className="hidden">
        <SidebarItem id="more-veiw" className="" emoji="🤯" title="#Create" />

        <SidebarItem id="more-veiw" className="" emoji="⚒" title="#Mint" />

        <SidebarItem id="more-veiw" className="" emoji="🥳" title="My Events" />

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
  );
};

export default SidebarLinks;
