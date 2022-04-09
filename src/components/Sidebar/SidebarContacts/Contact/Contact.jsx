import React from "react";

const Contact = ({ avatar, className = "", userName }) => {
  console.log(avatar);
  return (
    <a className="flex space-x-2 mb-2 items-center" href="#id">
      <div className="contact-avatar">
        <img className="w-10 rounded-full" src={avatar} alt="" />

        {/* <span className={className}></span> */}
      </div>
      <div className="contact-username">{userName}</div>
    </a>
  );
};

export default Contact;
