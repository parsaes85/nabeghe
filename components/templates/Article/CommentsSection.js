import React from "react";
import SendComment from "./SendComment";
import Comments from "./Comments";

function CommentsSection() {
  return (
    <div className="mt-10">
      <h5 className="font-bold text-lg">دیدگاه و پرسش</h5>

      <div className="mt-4">
        <SendComment />
        <Comments />
      </div>
    </div>
  );
}

export default CommentsSection;
