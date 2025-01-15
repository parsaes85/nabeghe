"use client";
import React, { useState } from "react";
import CourseBox from "@/components/modules/My_Account/CourseBox";
import { DescriptionOutlined, School } from "@mui/icons-material";

function Main() {
  const [status, setStatus] = useState("courses");

  return (
    <div className="mb-10">
      <h5 className="font-bold text-lg mb-4">دیدگاه و پرسشهای شما</h5>
      <div className="bg-gray-100 text-gray-600 w-fit flex gap-2 border p-1 rounded-full text-sm 2xs:text-base">
        <div
          className={`flex gap-1 rounded-full py-1 px-4 cursor-pointer ${
            status == "courses" && "text-black bg-white"
          }`}
          onClick={() => setStatus("courses")}
        >
          <span>
            <School fontSize="small" />
          </span>
          دوره های آموزشی
        </div>
        <div
          className={`flex gap-1 rounded-full py-1 px-4 cursor-pointer ${
            status == "articles" && "text-black bg-white"
          }`}
          onClick={() => setStatus("articles")}
        >
          <span>
            <DescriptionOutlined fontSize="small" />
          </span>
          مقالات آموزشی
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <CourseBox />
        <CourseBox />
      </div>
    </div>
  );
}

export default Main;
