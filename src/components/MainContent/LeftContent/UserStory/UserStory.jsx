import React from "react";
import StoryBlock from "./StoryBlock/StoryBlock";
import "./UserStory.css";
import { ChevronRightIcon } from "@heroicons/react/solid";

const UserStory = () => {
  return (
    <div className="user_story grid md:grid-cols-5 grid-cols-3 gap-2 lg:-mx-20 relative ">
      <StoryBlock
        storyImg="https://i.ibb.co/bXZy3tY/meta.png"
        storyAvatar="https://i.ibb.co/f1mwB8V/avatar-6.jpg"
        storyContent="@Desais"
      />
      <StoryBlock
        storyImg="https://i.ibb.co/6tNPnzh/meta-2.jpg"
        storyAvatar="https://i.ibb.co/FbXfQ2X/avatar-2.jpg"
        storyContent="@e_abrams"
      />
      <StoryBlock
        storyImg="https://i.ibb.co/dfnGcFk/meta-3.jpg"
        storyAvatar="https://i.ibb.co/MPGKQp9/avatar-3.jpg"
        storyContent="@Dagamand007"
      />
      <StoryBlock
        storyImg="https://i.ibb.co/GcTC06J/meta-4.jpg"
        storyAvatar="https://i.ibb.co/8DtZY6f/avatar-4.jpg"
        storyContent=" @Oksana Ksyusha"
      />
      <StoryBlock
        storyImg="https://i.ibb.co/2YsCyR8/meta-5.jpg"
        storyAvatar="https://i.ibb.co/nf3xHLg/avatar-5.png"
        storyContent="@stanley"
      />
      <span
        className="absolute cursor-pointer bg-white lg:flex items-center justify-center p-2 rounded-full 
                      shadow-md text-xl w-9 z-10 -mr-4 right-0 top-1/2 -translate-y-1/2"
      >
        <ChevronRightIcon />
      </span>
    </div>
  );
};

export default UserStory;
