"use client";
import React, { useEffect, useState } from "react";
import SendComment from "./SendComment";
import Comments from "./Comments";
import getCourseComments from "@/funcs/getCourseComments";

function CommentsSection({ courseId }) {
  const [courseComments, setCourseComments] = useState([]);
  const [isCommentReply, setIsCommentReply] = useState(null);

  function getCourseCommentsHandler() {
    getCourseComments(courseId).then((res) => setCourseComments(res));
  }

  useEffect(() => {
    getCourseCommentsHandler();
  }, []);

  return (
    <div className="mt-10">
      <h5 className="font-bold text-lg">دیدگاه و پرسش</h5>

      <div className="mt-4">
        <SendComment
          getCourseCommentsHandler={getCourseCommentsHandler}
          isCommentReply={isCommentReply}
          setIsCommentReply={setIsCommentReply}
          courseId={courseId}
        />
        <Comments
          courseComments={courseComments}
          setIsCommentReply={setIsCommentReply}
        />
      </div>
    </div>
  );
}

export default CommentsSection;
