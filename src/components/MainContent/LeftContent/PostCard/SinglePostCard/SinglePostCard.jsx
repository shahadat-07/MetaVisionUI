import React from "react";
import AddCommentInput from "./AddCommentInput/AddCommentInput";
import Comments from "./Commetns/Comments";
import EditMenu from "./EditMenu/EditMenu";
import LikeCommentShare from "./LikeCommentShare/LikeCommentShare";
import LikedBy from "./LikedBy/LikedBy";
import PostImage from "./PostImgae/PostImage";
import PostTopBar from "./PostTopBar/PostTopBar";

const SinglePostCard = (props) => {
  const postDetails = props.postDetails;
  const { postImg, comments } = props.postDetails;
  // console.log("frim single", comments);
  return (
    <div className="lg:mx-0 shadow-xl">
      <div className="flex justify-between items-center lg:p-4 p-2.5">
        <PostTopBar postDetails={postDetails} />
        <EditMenu />
      </div>
      <PostImage postImg={postImg} />
      <div className="p-4 space-y-3">
        <LikeCommentShare />
        <LikedBy />
        <Comments comments={comments} />
        <AddCommentInput />
      </div>
    </div>
  );
};

export default SinglePostCard;
