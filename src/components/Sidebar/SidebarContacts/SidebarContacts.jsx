import React from "react";
import Contact from "./Contact/Contact";

const SidebarContacts = () => {
  return (
    <section className="mt-3 border-t-2  bg-gray-50  w-[300px] ">
      <h3 className="text-lg font-semibold text-gray-800  mt-3"> Contacts </h3>

      <div className="py-2 ml-1">
        <Contact
          avatar="https://i.ibb.co/1JKq6YT/avatar-1.jpg"
          userName="@ireli9"
        />
        <Contact
          avatar="https://i.ibb.co/FbXfQ2X/avatar-2.jpg"
          userName="@mdv"
        />

        <Contact
          avatar="https://i.ibb.co/7Vn1NcB/avatar-8.jpg"
          userName="@Kulinski"
        />
        <Contact
          avatar="https://i.ibb.co/8DtZY6f/avatar-4.jpg"
          userName="@viik30"
        />
      </div>
    </section>
  );
};

export default SidebarContacts;
