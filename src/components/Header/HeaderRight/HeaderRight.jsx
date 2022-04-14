import React from "react";
import Wallet from "./ConnectWallet/Wallet";
import Messages from "./Messages/Messages";
import Notifications from "./Notifications/Notifications";
import UserImg from "./UserImg/UserImg";

const HeaderRight = () => {
  return (
    <div className="flex items-center">
      <Wallet />
      <Notifications />
      <Messages />
      <UserImg />
    </div>
  );
};

export default HeaderRight;
