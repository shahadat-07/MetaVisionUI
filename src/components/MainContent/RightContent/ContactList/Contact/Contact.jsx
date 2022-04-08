import React from "react";

const Contact = (props) => {
  const { userImg, isActive, userName } = props.user;
  return (
    <a className="flex space-x-2 mb-4" href="#id">
      <div className="">
        <img className="w-10 rounded-full" src={userImg} alt="" />
        <span className={isActive}></span>
      </div>
      <div className=""> {userName} </div>
    </a>
  );
};

export default Contact;
