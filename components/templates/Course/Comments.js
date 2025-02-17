import React from "react";
import CommentRow from "./CommentRow";

function Comments({ courseComments }) {
  return (
    <div className="mt-5 space-y-4">
      {courseComments.map((comment) => (
        <CommentRow key={comment.id} {...comment} />
      ))}
    </div>
  );
}

export default Comments;
