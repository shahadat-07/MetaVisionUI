import React from "react";

const Contact = (props) => {
  // console.log(props);
  const { src, className, username } = props;
  // console.log(src, `"${src}"`);
  return (
    <a href="#id">
      <div className="contact-avatar">
        <img src={src} alt="" />
        <span className={className}></span>
      </div>
      <div className="contact-username"> {username} </div>
    </a>
  );
};

export default Contact;
