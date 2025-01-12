import React from "react";
import ArticleBox from "@/components/modules/ArticleBox";
import TuneIcon from "@mui/icons-material/Tune";
import CircularProgress from "@mui/material/CircularProgress";

function ArticlesList({ setIsFiltersSidebarOpen }) {
  return (
    <>
      <div className="flex gap-4">
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
        <div
          className="bg-gray-100 py-2 px-4 rounded-2xl text-sm md:hidden flex items-center justify-center gap-1"
          onClick={() => setIsFiltersSidebarOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
            ></path>
          </svg>
          <span className="hidden sm:block">فیلتر مقالات</span>
        </div>
      </div>
      <div className="grid gap-x-5 gap-y-16  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-3">
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
      </div>
      <div className="flex gap-1 items-center justify-center w-fit mx-auto bg-gray-100 rounded-full px-8 py-2 text-primaryBlue mt-12">
        <span>درحال بارگذاری</span>
        <CircularProgress size="20px" />
      </div>
    </>
  );
}

export default ArticlesList;
