import React from "react";

const Comment = (props) => {
  const comment = props.comment;
  return (
    <section>
      <>
        <div className="flex">
          <div className="w-10 h-10 rounded-full relative flex-shrink-0">
            <img
              src="https://i.ibb.co/1JKq6YT/avatar-1.jpg"
              className="absolute h-full rounded-full w-full"
              alt=""
            />
          </div>
          <div>
            <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 relative lg:ml-5 ml-2 lg:mr-12  dark:bg-gray-800 dark:text-gray-100">
              <p className="leading-6">
                {comment}
                <i className="uil-grin-tongue-wink-alt"></i>{" "}
              </p>
              <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800"></div>
            </div>
            <div className="text-xs flex items-center space-x-3 mt-2 ml-5">
              <a href="#id" className="text-red-600">
                {}
                <i className="uil-heart"></i> Love{" "}
              </a>
              <a className="dark:text-gray-200" href="#id">
                {" "}
                Replay{" "}
              </a>
              <span className="dark:text-gray-200"> 3d </span>
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default Comment;
