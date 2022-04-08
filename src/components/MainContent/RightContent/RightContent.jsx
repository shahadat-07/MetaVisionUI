import React from "react";
import BirthdayCard from "./BirthdayCard/BirthdayCard";
import ContactList from "./ContactList/ContactList";
import Nav from "./Nav/Nav";

const RightContent = () => {
  return (
    <div className="lg:flex lg:space-x-10">
      <div className="lg:w-72 w-full">
        <BirthdayCard />
        {/* <Nav /> */}
        <ContactList />
      </div>
    </div>
  );
};

export default RightContent;
