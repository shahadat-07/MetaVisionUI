import { React, useState } from "react";

const AddCommentInput = () => {
  const [comment, setComment] = useState();
  return (
    <div className="bg-gray-100 rounded-full relative dark:bg-gray-800 border-t">
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add your Comment.."
        className="bg-transparent max-h-10 shadow-none px-5 py-3 outline-0	"
      />
      {/* <div className="-m-0.5 absolute bottom-0 flex items-center right-3 text-xl">
        <a href="#id">
          <ion-icon
            name="happy-outline"
            className="hover:bg-gray-200 p-1.5 rounded-full"
          ></ion-icon>
        </a>
        <a href="#id">
          <ion-icon
            name="image-outline"
            className="hover:bg-gray-200 p-1.5 rounded-full"
          ></ion-icon>
        </a>
        <a href="#id">
          <ion-icon
            name="link-outline"
            className="hover:bg-gray-200 p-1.5 rounded-full"
          ></ion-icon>
        </a>
      </div> */}
    </div>
  );
};

export default AddCommentInput;
