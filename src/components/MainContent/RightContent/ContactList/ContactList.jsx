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
        id: 8,
        userName: "@CryptologY_",
        userImg: "https://i.ibb.co/8DtZY6f/avatar-4.jpg",
        isActive: "Yes",
      },
      {
        id: 8,
        userName: "@CryptologY_",
        userImg: "https://i.ibb.co/8DtZY6f/avatar-4.jpg",
        isActive: "Yes",
      },
      {
        id: 8,
        userName: "@CryptologY_",
        userImg: "https://i.ibb.co/8DtZY6f/avatar-4.jpg",
        isActive: "Yes",
      },
    ],
    Groups: [
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
        id: 8,
        userName: "@CryptologY_",
        userImg: "https://i.ibb.co/8DtZY6f/avatar-4.jpg",
        isActive: "Yes",
      },
      {
        id: 8,
        userName: "@CryptologY_",
        userImg: "https://i.ibb.co/8DtZY6f/avatar-4.jpg",
        isActive: "Yes",
      },
      {
        id: 8,
        userName: "@CryptologY_",
        userImg: "https://i.ibb.co/8DtZY6f/avatar-4.jpg",
        isActive: "Yes",
      },
    ],
  });

  return (
    <section className="lg:fixed lg:top-64">
      <div className="w-full max-w-md px-2 pt-8 pb-16 sm:px-0 ">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-base font-semibold text-blue-700 ",

                    selected
                      ? "border-b-[3px] border-blue-700  shadow outline-none"
                      : "hover:bg-white/[0.2] "
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2 lg:h-[400px] lg:w-80 lg:overflow-scroll">
            {Object.values(categories).map((users, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  " dark:bg-slate-800 rounded-xl p-3 outline-none"
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
