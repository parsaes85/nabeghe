"use client";
import React, { useEffect, useState } from "react";
import SendComment from "./SendComment";
import Comments from "./Comments";
import getCourseComments from "@/funcs/getCourseComments";

function CommentsSection({ courseId }) {
  const [courseComments, setCourseComments] = useState([]);

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
        <SendComment />
        <Comments courseComments={courseComments} />
      </div>
    </div>
  );
}

export default CommentsSection;
