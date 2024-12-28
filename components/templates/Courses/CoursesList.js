import React from "react";
import CourseBox from "@/components/modules/CourseBox";
import TuneIcon from "@mui/icons-material/Tune";
import CircularProgress from "@mui/material/CircularProgress";

function CoursesList() {
  return (
    <>
      <div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600 text-sm flex items-center gap-1">
            <TuneIcon fontSize="small" /> مرتب سازی:
          </span>
          <div>
            <select
              name=""
              id=""
              className="bg-gray-100 py-2 px-3 rounded-xl outline-none w-52"
            >
              <option value="">انتخاب کنید</option>
              <option value="latest">جدیدترین</option>
              <option value="holding">درحال برگزاری</option>
              <option value="complete">تکمیل ظبط</option>
              <option value="oldest">قدیمی ترین</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid gap-x-5 gap-y-16 grid-cols-3 mt-3">
        <CourseBox />
        <CourseBox />
        <CourseBox />
        <CourseBox />
        <CourseBox />
      </div>
      <div className="flex gap-1 items-center justify-center w-fit mx-auto bg-gray-100 rounded-full px-8 py-2 text-primaryBlue mt-12">
        <span>درحال بارگذاری</span>
        <CircularProgress size="20px" />
      </div>
    </>
  );
}

export default CoursesList;
