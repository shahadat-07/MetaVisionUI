import React from "react";
import BirthdayCard from "./BirthdayCard/BirthdayCard";
import ContactList from "./ContactList/ContactList";
import Nav from "./Nav/Nav";

const RightContent = () => {
  return (
    <div className="lg:flex lg:space-x-10">
      <div className="lg:w-72 w-full">
        <BirthdayCard />
        <h3 className="text-xl font-semibold"> Contacts </h3>
        <div className uk-sticky="offset:80">
          <Nav />
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default RightContent;
