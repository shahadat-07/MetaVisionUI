import React from "react";
import ConnectWallet from "./ConnectWallet/ConnectWallet";
import Wallet from "./ConnectWallet/Wallet";
import Messages from "./Messages/Messages";
import Notifications from "./Notifications/Notifications";
import UserImg from "./UserImg/UserImg";

const HeaderRight = () => {
  return (
    <div className="flex items-center">
      {/* <ConnectWallet /> */}
      <Wallet />
      <Notifications />
      <Messages />
      <UserImg />
    </div>
  );
};

export default HeaderRight;
