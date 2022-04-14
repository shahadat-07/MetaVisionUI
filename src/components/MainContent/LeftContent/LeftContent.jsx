import React from "react";
import CreatePost from "./CreatePost/CreatePost";
import PostCard from "./PostCard/PostCard";
import UserStory from "./UserStory/UserStory";

const LeftContent = () => {
  return (
    <div className="lg:w-3/4 lg:px-20 space-y-7">
      <UserStory />
      <CreatePost />
      <PostCard />
    </div>
  );
};

export default LeftContent;
