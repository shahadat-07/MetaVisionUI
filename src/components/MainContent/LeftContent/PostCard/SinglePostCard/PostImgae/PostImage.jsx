import React from "react";

const PostImage = ({ postImg }) => {
  return (
    <div>
      <a href="#id">
        <img src={postImg} className="max-h-96 w-full object-cover" alt="" />
      </a>
    </div>
  );
};

export default PostImage;
