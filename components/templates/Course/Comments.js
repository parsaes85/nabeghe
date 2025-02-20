import React from "react";
import CommentRow from "./CommentRow";

function Comments({ courseComments, setIsCommentReply }) {
  return (
    <div className="mt-5 space-y-4">
      {courseComments.map((comment) => (
        <CommentRow key={comment.id} setIsCommentReply={setIsCommentReply} commentInfos={comment} />
      ))}
    </div>
  );
}

export default Comments;
