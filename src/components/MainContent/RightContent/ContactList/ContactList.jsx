import React from "react";
// import Contact from "./Contact/Contact";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import Contact from "./Contact/Contact";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ContactList = () => {
  let [categories] = useState({
    Friends: [
      {
        id: 1,
        userName: "@goodvin",
        userImg: "https://i.ibb.co/1JKq6YT/avatar-1.jpg",
        isActive: "Yes",
      },
      {
        id: 2,
        userName: "@Alekseys787",
        userImg: "https://i.ibb.co/FbXfQ2X/avatar-2.jpg",
        isActive: "Yes",
      },
      {
        id: 3,
        userName: "@Samurai21",
        userImg: "https://i.ibb.co/FbXfQ2X/avatar-2.jpg",
        isActive: "Yes",
      },
      {
        id: 4,
        userName: "@Misert",
        userImg: "https://i.ibb.co/f1mwB8V/avatar-6.jpg",
        isActive: "Yes",
      },
      {
        id: 5,
        userName: "@fronovaola1",
        userImg: "https://i.ibb.co/1JKq6YT/avatar-1.jpg",
        isActive: "Yes",
      },
      {
        id: 6,
        userName: "@bulgakowa2009",
        userImg: "https://i.ibb.co/FbXfQ2X/avatar-2.jpg",
        isActive: "Yes",
      },
      {
        id: 7,
        userName: "@ljubovmikhail",
        userImg: "https://i.ibb.co/7Vn1NcB/avatar-8.jpg",
        isActive: "Yes",
      },

      {
        id: 1,
        userName: "@CryptologY_",
        userImg: "https://i.ibb.co/8DtZY6f/avatar-4.jpg",
        isActive: "Yes",
      },
    ],
    Groups: [
      {
        id: 1,
        userName: "Shahadat Hossen",
        userImg:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsNt6z0lx0PLV8V34UFFhD3qUD1fbQjrccg&usqp=CAU",
        isActive: "Yes",
      },
      {
        id: 1,
        userName: "Shahadat Hossen",
        userImg:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsNt6z0lx0PLV8V34UFFhD3qUD1fbQjrccg&usqp=CAU",
        isActive: "Yes",
      },
      {
        id: 1,
        userName: "Shahadat Hossen",
        userImg:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsNt6z0lx0PLV8V34UFFhD3qUD1fbQjrccg&usqp=CAU",
        isActive: "Yes",
      },
      {
        id: 1,
        userName: "Shahadat Hossen",
        userImg:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsNt6z0lx0PLV8V34UFFhD3qUD1fbQjrccg&usqp=CAU",
        isActive: "Yes",
      },
      {
        id: 1,
        userName: "Shahadat Hossen",
        userImg:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsNt6z0lx0PLV8V34UFFhD3qUD1fbQjrccg&usqp=CAU",
        isActive: "Yes",
      },
    ],
  });

  return (
    <section>
      <div className="w-full max-w-md px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm leading-5 font-semibold text-blue-700 rounded-lg",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                    selected ? "bg-white shadow" : "hover:bg-white/[0.2] "
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((users, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "bg-white rounded-xl p-3",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                )}
              >
                {users.map((user) => (
                  <Contact user={user} />
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default ContactList;
