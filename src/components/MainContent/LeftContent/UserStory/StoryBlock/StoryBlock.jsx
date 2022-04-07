import React from "react";

const StoryBlock = ({ storyImg, storyAvatar, storyContent }) => {
  return (
    <a href="#id">
      <div className="single_story">
        <img src={storyImg} alt="" />
        <div className="story-avatar">
          {" "}
          <img src={storyAvatar} alt="" />
        </div>
        <div className="story-content">
          {" "}
          <h4>{storyContent} </h4>{" "}
        </div>
      </div>
    </a>
  );
};

export default StoryBlock;
