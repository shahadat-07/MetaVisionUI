import React, { useState } from "react";
import Notification from "./Notification/Notification";
import { BellIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/solid";

const Notifications = () => {
  const [isBoxVisible, setVisible] = useState({ isBoxVisible: false });

  const toogle = () => {
    setVisible((prevState) => ({ isBoxVisible: !prevState.isBoxVisible }));
  };

  const toogleOut = () => {
    setVisible({ isBoxVisible: false });
  };

  return (
    <>
      <SearchIcon className="w-8 text-gray-700 dark:text-gray-50 bg-gray-200 dark:bg-slate-700 rounded-full p-1.5 mr-[-15px] ml-4 md:hidden" />{" "}
      <a onClick={toogle} onBlur={toogleOut} href="#id" className="relative">
        <BellIcon className="h-9 text-gray-700 dark:text-gray-50 bg-gray-200 dark:bg-slate-700 rounded-full p-2 ml-7" />
        <div class="rounded-full flex p-2 absolute bg-red-500 top-[-5px] left-14">
          <p class="absolute top-0 left-1 font-bold text-white text-xs">3</p>
        </div>
      </a>
      {/* w-3/4 sm:w-2/4 lg:w-2/4 */}
      <div
        className={`absolute border shadow-xl pl-4 pt-4 md:p-4 lg:p-7 bg-white dark:bg-slate-900 rounded-lg w-[60vw] sm:w-[50vw] md:w-[35vw] lg-w-[15vw] xl:w-[25vw] 2xl:w-[25vw] top-16 right-3 h-[580px] border-gray-100 overflow-auto ${
          isBoxVisible.isBoxVisible ? "" : "hidden"
        }`}
      >
        <div className="">
          <div className="">
            <h1 className="text-xl font-semibold text-gray-600 dark:text-gray-100 mb-2 md:mb-4">
              Notifications{" "}
            </h1>
            {/* <div className="">
              <a href="#id" data-tippy-placement="left" title="Notifications">
                <ion-icon name="settings-outline"></ion-icon>
              </a>
              <a
                href="#id"
                data-tippy-placement="left"
                title="Mark as read all"
              >
                <ion-icon name="checkbox-outline"></ion-icon>
              </a>
            </div> */}
          </div>
          <ul>
            <Notification
              src="https://i.ibb.co/1JKq6YT/avatar-1.jpg"
              userName="@Coffeeechek"
              action="Like Your Comment On Video"
              postName="Learn Prototype Faster"
              time="2 hours ago"
            >
              <span className="drop_icon bg-gradient-primary">
                <i className="icon-feather-thumbs-up"></i>
              </span>
            </Notification>
            <Notification
              src="https://i.ibb.co/1JKq6YT/avatar-1.jpg"
              userName="@Coffeeechek"
              action="Like Your Comment On Video"
              postName="Learn Prototype Faster"
              time="2 hours ago"
            >
              <span className="drop_icon bg-gradient-primary">
                <i className="icon-feather-thumbs-up"></i>
              </span>
            </Notification>
            <Notification
              src="https://i.ibb.co/1JKq6YT/avatar-1.jpg"
              userName="@Coffeeechek"
              action="Like Your Comment On Video"
              postName="Learn Prototype Faster"
              time="2 hours ago"
            >
              <span className="drop_icon bg-gradient-primary">
                <i className="icon-feather-thumbs-up"></i>
              </span>
            </Notification>
            <Notification
              src="https://i.ibb.co/1JKq6YT/avatar-1.jpg"
              userName="@Coffeeechek"
              action="Like Your Comment On Video"
              postName="Learn Prototype Faster"
              time="2 hours ago"
            >
              <span className="drop_icon bg-gradient-primary">
                <i className="icon-feather-thumbs-up"></i>
              </span>
            </Notification>
            <Notification
              src="https://i.ibb.co/1JKq6YT/avatar-1.jpg"
              userName="@Coffeeechek"
              action="Like Your Comment On Video"
              postName="Learn Prototype Faster"
              time="2 hours ago"
            >
              <span className="drop_icon bg-gradient-primary">
                <i className="icon-feather-thumbs-up"></i>
              </span>
            </Notification>
            <Notification
              src="https://i.ibb.co/1JKq6YT/avatar-1.jpg"
              userName="@Coffeeechek"
              action="Like Your Comment On Video"
              postName="Learn Prototype Faster"
              time="2 hours ago"
            >
              <span className="drop_icon bg-gradient-primary">
                <i className="icon-feather-thumbs-up"></i>
              </span>
            </Notification>
            <Notification
              src="https://i.ibb.co/1JKq6YT/avatar-1.jpg"
              userName="@Coffeeechek"
              action="Like Your Comment On Video"
              postName="Learn Prototype Faster"
              time="2 hours ago"
            >
              <span className="drop_icon bg-gradient-primary">
                <i className="icon-feather-thumbs-up"></i>
              </span>
            </Notification>

            {/* <li className="not-read">
              <a href="#id">
                <div className="drop_avatar status-online">
                  {" "}
                  <img src="https://i.ibb.co/FbXfQ2X/avatar-2.jpg" alt="" />
                </div>
                <div className="drop_text">
                  <p>
                    <strong>@pop-33</strong> Replay Your Comments in
                    <span className="text-link">Adobe XD Tutorial</span>
                  </p>
                  <time> 9 hours ago </time>
                </div>
              </a>
            </li>
            <li>
              <a href="#id">
                <div className="drop_avatar">
                  {" "}
                  <img src="https://i.ibb.co/MPGKQp9/avatar-3.jpg" alt="" />
                </div>
                <span className="drop_icon bg-gradient-primary">
                  <i className="icon-feather-thumbs-up"></i>
                </span>
                <div className="drop_text">
                  <p>
                    <strong>@eop-dop</strong> Added New Review In Video
                    <span className="text-link">Full Stack PHP Developer</span>
                  </p>
                  <time> 12 hours ago </time>
                </div>
              </a>
            </li>
            <li>
              <a href="#id">
                <div className="drop_avatar">
                  {" "}
                  <img src="https://i.ibb.co/1JKq6YT/avatar-1.jpg" alt="" />
                </div>
                <div className="drop_text">
                  <p>
                    <strong>#Space Warrior</strong> Shared Your Discussion On
                    Video
                    <span className="text-link">Css Flex Box </span>
                  </p>
                  <time> Yesterday </time>
                </div>
              </a>
            </li>
            <li>
              <a href="#id">
                <div className="drop_avatar">
                  {" "}
                  <img src="https://i.ibb.co/1JKq6YT/avatar-1.jpg" alt="" />
                </div>
                <span className="drop_icon bg-gradient-primary">
                  <i className="icon-feather-thumbs-up"></i>
                </span>
                <div className="drop_text">
                  <p>
                    <strong>#mdv</strong> Like Your Comment On Course
                    <span className="text-link">Javascript Introduction </span>
                  </p>
                  <time> 2 hours ago </time>
                </div>
              </a>
            </li>
            <li>
              <a href="#id">
                <div className="drop_avatar status-online">
                  {" "}
                  <img src="https://i.ibb.co/FbXfQ2X/avatar-2.jpg" alt="" />
                </div>
                <div className="drop_text">
                  <p>
                    <strong>#artem8</strong> Replay Your Comments in
                    <span className="text-link">Programming for Games</span>
                  </p>
                  <time> 9 hours ago </time>
                </div>
              </a>
            </li>
            <li>
              <a href="#id">
                <div className="drop_avatar">
                  {" "}
                  <img src="https://i.ibb.co/FbXfQ2X/avatar-2.jpg" alt="" />
                </div>
                <div className="drop_text">
                  <p>
                    <strong>@yep-02</strong> Replay Your Comments in
                    <span className="text-link">Programming for Games</span>
                  </p>
                  <time> 9 hours ago </time>
                </div>
              </a>
            </li>
            <li>
              <a href="#id">
                <div className="drop_avatar">
                  {" "}
                  <img src="https://i.ibb.co/MPGKQp9/avatar-3.jpg" alt="" />
                </div>
                <div className="drop_text">
                  <p>
                    <strong>@Juligee</strong> Added New Review In Course
                    <span className="text-link">Full Stack PHP Developer</span>
                  </p>
                  <time> 12 hours ago </time>
                </div>
              </a>
            </li>
            <li>
              <a href="#id">
                <div className="drop_avatar">
                  {" "}
                  <img src="https://i.ibb.co/1JKq6YT/avatar-1.jpg" alt="" />
                </div>
                <div className="drop_text">
                  <p>
                    <strong>@elmanrudkov</strong> Shared Your Discussion On
                    Course
                    <span className="text-link">Css Flex Box </span>
                  </p>
                  <time> Yesterday </time>
                </div>
              </a>
            </li>
            <li>
              <a href="#id">
                <div className="drop_avatar">
                  {" "}
                  <img src="https://i.ibb.co/1JKq6YT/avatar-1.jpg" alt="" />
                </div>
                <div className="drop_text">
                  <p>
                    <strong>@vady76</strong> Like Your Comment On Course
                    <span className="text-link">Javascript Introduction </span>
                  </p>
                  <time> 2 hours ago </time>
                </div>
              </a>
            </li>
            <li>
              <a href="#id">
                <div className="drop_avatar">
                  {" "}
                  <img src="https://i.ibb.co/FbXfQ2X/avatar-2.jpg" alt="" />
                </div>
                <div className="drop_text">
                  <p>
                    <strong>@irana</strong> Replay Your Comments in
                    <span className="text-link">Programming for Games</span>
                  </p>
                  <time> 9 hours ago </time>
                </div>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Notifications;
