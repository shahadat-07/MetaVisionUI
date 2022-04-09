import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import Person from "./Person/Person";

const HeaderSearch = () => {
  const [state, setState] = useState("");

  const [isBoxVisible, setVisible] = useState(false);

  const toogleIn = () => {
    setVisible(true);
  };

  const toogleOut = () => {
    setVisible(false);
  };

  return (
    <div className="relative hidden md:block">
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        onFocus={toogleIn}
        onBlur={toogleOut}
        type="text"
        className="py-2 lg:py-2.5 px-2 lg:pl-10 md:w-56 lg:w-96 bg-gray-100 focus:bg-gray-200 dark:bg-slate-800 focus:dark:bg-slate-700 rounded-full placeholder:text-xs lg:placeholder:text-sm focus:ring-0"
        placeholder="Search for Friends, Videos and more.."
        autocomplete="off"
      />
      <SearchIcon className="h-5 w-5 text-gray-400 absolute top-4 left-24 lg:left-4 hidden lg:block" />

      <div
        className={`absolute border shadow-xl w-96 p-5 bg-white dark:bg-slate-900 rounded-lg z-50 ${
          isBoxVisible ? "" : "hidden"
        }`}
      >
        <h4 className="font-semibold text-lg dark:text-gray-100 mb-4">
          {" "}
          Recently{" "}
        </h4>
        <ul>
          <Person
            src="https://i.ibb.co/1JKq6YT/avatar-1.jpg"
            username="@Senevskee"
          />
          <Person
            src="https://i.ibb.co/FbXfQ2X/avatar-2.jpg"
            username="@artmaks24"
          />
          <Person
            src="https://i.ibb.co/MPGKQp9/avatar-3.jpg"
            username="@Bermud"
          />
          <Person
            src="https://i.ibb.co/8DtZY6f/avatar-4.jpg"
            username="@bulgakowa2009"
          />
          <Person
            src="https://i.ibb.co/nf3xHLg/avatar-5.png"
            username=" @Paha17"
          />
        </ul>
      </div>
    </div>
  );
};

export default HeaderSearch;
