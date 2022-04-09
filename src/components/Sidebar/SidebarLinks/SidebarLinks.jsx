import React from "react";
import SidebarItem from "./SidebarItem/SidebarItem";

const SidebarLinks = () => {
  return (
    <ul>
      <SidebarItem className="active" emoji="🤗" title="My Feed" />
      <SidebarItem emoji="👫" title="My Friends" />
      <SidebarItem emoji="😎" title="My communities" />

      <SidebarItem emoji="🤩" title="My NFT" />

      <SidebarItem emoji="📌" title="#NFT Posts" />

      <SidebarItem emoji="🎶" title="#NFT Music" />

      <SidebarItem emoji="📷" title=" #NFT Photos" />

      <SidebarItem
        id="more-veiw"
        className="hidden"
        emoji="🤯"
        title="#Create"
      />

      <SidebarItem id="more-veiw" className="hidden" emoji="⚒" title="#Mint" />

      <SidebarItem
        id="more-veiw"
        className="hidden"
        emoji="🥳"
        title="My Events"
      />

      <SidebarItem
        id="more-veiw"
        className="hidden"
        emoji="💸"
        title="My finance"
      />

      <SidebarItem
        id="more-veiw"
        className="hidden"
        emoji="🤑"
        title="#Wallet statistic"
      />
      <li id="more-veiw" hidden>
        <a href="#id">
          <p className="sidebar-emo">🗒</p>
          <span> #Whitelists </span> <span className="new">N</span>
        </a>
      </li>
      <li id="more-veiw" hidden>
        <a href="#id">
          <p className="sidebar-emo">🎁</p>
          <span> #Airdrops </span> <span className="new">N</span>
        </a>
      </li>
    </ul>
  );
};

export default SidebarLinks;
