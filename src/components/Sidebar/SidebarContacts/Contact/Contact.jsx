import React from "react";

const Contact = ({ avatar, className = "", userName }) => {
  return (
    <a className="flex space-x-2 mb-2 items-center" href="#id">
      <div className="contact-avatar">
        <img className="w-10 rounded-full" src={avatar} alt="" />
      </div>
      <div className="text-gray-600 ">{userName}</div>
    </a>
  );
};

export default Contact;
