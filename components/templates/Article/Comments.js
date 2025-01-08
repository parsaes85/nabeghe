import React from "react";
import CommentRow from "./CommentRow";

function Comments() {
  return (
    <div className="mt-5 space-y-4">
      <CommentRow />
      <CommentRow />
    </div>
  );
}

export default Comments;
