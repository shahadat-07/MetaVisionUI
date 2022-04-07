import React from "react";
import Comment from "./Comment/Comment";

const Comments = (props) => {
  const comments = props.comments;
  return (
    <section>
      <div className="border-t py-4 space-y-4 dark:border-gray-600">
        {comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div>
      <a href="#id" className="hover:text-blue-600 hover:underline">
        {" "}
        Veiw 8 more Comments{" "}
      </a>
    </section>
  );
};

export default Comments;
