import React from "react";

const Nav = () => {
  return (
    <nav className="responsive-nav border-b extanded mb-2 -mt-2">
      <ul uk-switcher="connect: #group-details; animation: uk-animation-fade">
        <li className="uk-active">
          <a className="active" href="#0">
            {" "}
            Friends <span> 310 </span>{" "}
          </a>
        </li>
        <li>
          <a href="#0">Groups</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
