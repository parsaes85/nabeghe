"use client";
import React, { useState } from "react";
import CourseBox from "@/components/modules/My_Account/CourseBox";
import { DescriptionOutlined, School } from "@mui/icons-material";

function Main() {
  const [status, setStatus] = useState("learning");

  return (
    <div className="mb-10">
      <h5 className="font-bold text-lg mb-4">دوره های من</h5>
      <div className="bg-gray-100 text-gray-600 w-fit flex gap-2 border p-1 rounded-full text-sm 2xs:text-base">
        <div
          className={`flex gap-1 rounded-full py-1 px-4 cursor-pointer ${
            status == "learning" && "text-black bg-white"
          }`}
          onClick={() => setStatus("learning")}
        >
          <span>
            <School fontSize="small" />
          </span>
          درحال یادگیری
        </div>
        <div
          className={`flex gap-1 rounded-full py-1 px-4 cursor-pointer ${
            status == "completed" && "text-black bg-white"
          }`}
          onClick={() => setStatus("completed")}
        >
          <span>
            <DescriptionOutlined fontSize="small" />
          </span>
          تکمیل شده
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
