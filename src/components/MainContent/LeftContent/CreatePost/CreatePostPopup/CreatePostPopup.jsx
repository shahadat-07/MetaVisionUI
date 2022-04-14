import { React, useState } from "react";
import { XIcon } from "@heroicons/react/solid";
import PostInput from "../../../../../Contexts/PostInput";

const CreatePostPopup = (props) => {
  const isBoxVisible = props.isBoxVisible;
  const [isVisible, setVisible] = useState({ isVisible: false });

  const toogle = () => {
    setVisible((prevState) => ({ isVisible: !prevState.isVisible }));
  };

  const toogleOut = props.toogleOut;

  const [postWritting, setPostWritting] = useState("");
  // backdrop-blur-xl bg-white/30
  return (
    <section>
      <div
        onClick={toogleOut}
        className={`bg-[#EBEBEC] fixed h-[100%] w-[100%] top-0 left-0 right-0 bottom-0 z-[100] opacity-70 	 ${
          isBoxVisible.isBoxVisible ? "" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed bg-white  dark:bg-slate-700 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[110] rounded-lg	 ${
          isBoxVisible.isBoxVisible ? "" : "hidden"
        }`}
      >
        <div className="rounded-lg p-0 relative shadow-2xl">
          <div className="text-center py-3 border-b">
            <h3 className="relative text-lg font-semibold text-gray-700 dark:text-gray-200">
              {" "}
              Create Post{" "}
            </h3>
            <XIcon
              onClick={toogleOut}
              className="absolute top-1 right-2 w-10 bg-gray-100 dark:bg-slate-900 text-gray-500 dark:text-gray-200 rounded-full p-2.5 cursor-pointer"
            />
          </div>
          <div className="flex flex-1 items-start space-x-4 p-5">
            <img
              src="
              https://i.ibb.co/FbXfQ2X/avatar-2.jpg"
              className="bg-gray-200 border border-white rounded-full w-11 h-11"
              alt=""
            />

            <div className="flex-1">
              <PostInput.Provider value={postWritting}>
                {" "}
                <textarea
                  value={postWritting}
                  onChange={(e) => setPostWritting(e.target.value)}
                  className="text-black shadow-none focus:shadow-none text-xl font-medium resize-none border-0 focus:ring-0 bg-gray-50 dark:bg-slate-900"
                  rows="5"
                  cols="32"
                  placeholder="What's Your Mind ? Stella!"
                ></textarea>
              </PostInput.Provider>
            </div>
          </div>
          <div className="bsolute bottom-0 p-4 space-x-4 w-full">
            <div className="flex bg-gray-50 dark:bg-slate-900 border border-purple-100 dark:border-0 rounded-2xl p-2 shadow-sm items-center">
              <div className="lg:block hidden ml-1 text-sm dark:text-gray-200">
                {" "}
                Add to your post{" "}
              </div>
              <div className="flex flex-1 items-center lg:justify-end justify-center space-x-1.5">
                <svg
                  className="bg-blue-100 h-9 p-1.5 rounded-full text-blue-600 w-9 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <svg
                  className="text-red-600 h-9 p-1.5 rounded-full bg-red-100 w-9 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                  >
                    {" "}
                  </path>
                </svg>
                <svg
                  className="text-green-600 h-9 p-1.5 rounded-full bg-green-100 w-9 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                <svg
                  className="text-pink-600 h-9 p-1.5 rounded-full bg-pink-100 w-9 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />{" "}
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  >
                    {" "}
                  </path>
                </svg>

                <div
                  className={`flex space-x-1.5 ${
                    isVisible.isVisible ? "" : "hidden"
                  }`}
                >
                  <svg
                    className="text-pink-600 h-9 p-1.5 rounded-full bg-pink-100 w-9 cursor-pointer"
                    id="veiw-more"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    >
                      {" "}
                    </path>
                  </svg>
                  <svg
                    className="text-pink-600 h-9 p-1.5 rounded-full bg-pink-100 w-9 cursor-pointer"
                    id="veiw-more"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <svg
                    className="text-purple-600 h-9 p-1.5 rounded-full bg-purple-100 w-9 cursor-pointer"
                    id="veiw-more"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />{" "}
                  </svg>
                </div>

                {/* <!-- view more --> */}
                <svg
                  onClick={toogle}
                  onBlur={toogleOut}
                  className=" hover:bg-gray-200 dark:bg-gray-200 h-9 p-1.5 rounded-full w-9 cursor-pointer"
                  id="veiw-more"
                  uk-toggle="target: #veiw-more; animation: uk-animation-fade"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  >
                    {" "}
                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full justify-between border-t p-3">
            <select className="mt-2 border-gray-400 dark:bg-slate-900 dark:text-gray-200">
              <option className="text-gray-500">Only me</option>
              <option className="text-gray-500">Every one</option>
              <option className="text-gray-500">People I Follow </option>
              <option className="text-gray-500">People Follow Me </option>
            </select>
            <div className="flex space-x-2">
              <a
                href="#id"
                className="bg-red-100 flex font-medium h-9 items-center justify-center px-5 rounded-md text-red-600 text-sm"
              >
                Mint{" "}
              </a>
              <a
                href="#id"
                className="bg-blue-600 flex h-9 items-center justify-center rounded-md text-white px-5 font-medium"
              >
                Share{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePostPopup;
