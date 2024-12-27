import ArticleBox from "@/components/modules/ArticleBox";
import React from "react";

function Articles() {
  return (
    <div className="px-10 mt-32 mb-24">
      <div className="flex justify-between items-center gap-6 p-10 bg-gradient-to-r from-white to-gray-100 rounded-2xl">
        <div className="flex gap-4 items-start">
          <span className="bg-primaryBlue p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 fill-white"
            >
              <path
                fillRule="evenodd"
                d="M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <div>
            <h4 className="font-bold text-primaryBlue text-[28px] w-11/12 leading-8">
              از گوشه و اطراف دنیای برنامه‌نویسی
            </h4>
            <p className="text-lg text-gray-700 w-80 mt-3">
              نوشتن کار جالبیه که از هزاران سال همراه ما بوده و کمک کرده تا
              همیشه به روز باشیم، ما در نابغه فضای رو به شکلی آماده کردیم تا شما
              بتونید ایده‌ها و مطالب جالب حوزه برنامه‌نویسی رو در اختیار هزاران
              برنامه‌نویس عضو نابغه قرار بدید.
            </p>
          </div>
        </div>
        <div className="flex gap-5 mt-8">
          <div className="space-y-5 -mt-8">
            <ArticleBox />
            <ArticleBox />
          </div>
          <div className="space-y-5">
            <ArticleBox />
            <ArticleBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
