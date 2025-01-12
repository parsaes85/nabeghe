import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReplyIcon from "@mui/icons-material/Reply";

function CommentRow() {
  return (
    <div>
      <div className="border py-4 px-6 rounded-3xl">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div className="flex items-center gap-2">
            <img
              src="/images/teacher-img.jpeg"
              alt=""
              className="w-10 rounded-full"
            />
            <div>
              <p>امید تاجیک</p>
              <p className="text-sm text-gray-600">۲ هفته پیش</p>
            </div>
          </div>
          <div className="flex gap-2 items-center self-end">
            <button className="flex items-center gap-1 rounded-full text-sm bg-gray-100 text-gray-600 py-2 pl-3 pr-4 hover:text-primaryBlue transition-all">
              <span>پاسخ</span>
              <span>
                <ReplyIcon />
              </span>
            </button>
            <div className="relative">
              <span className="absolute -top-2 -right-0 text-white bg-red-600 text-xs rounded-full px-1">
                ۳
              </span>
              <span className="bg-gray-100 text-gray-600 rounded-full py-2 px-3 hover:text-red-500 transition-all cursor-pointer">
                <FavoriteIcon fontSize="small" />
              </span>
            </div>
          </div>
        </div>
        <div className="border-t mt-2 pt-2">
          <p className="text-gray-600">
            من این دوره رو خریدم و میخوام نکست هم بعدا یاد بگیرم چون نیاز بیشتری
            دارم به اموزش های این دوره میشه بدون اینکه دوره نکست رو ببینم این
            دوره رو ببینم(بخش6دوره بیشتر مد نظرمه)
          </p>
        </div>
      </div>
      <div className="pr-8">
        <div className="pt-3 pr-8 border-r space-y-3">
          <div className="border py-4 px-6 rounded-3xl">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <div className="flex items-center gap-2">
                <img
                  src="/images/teacher-img.jpeg"
                  alt=""
                  className="w-10 rounded-full"
                />
                <div>
                  <p>امید تاجیک</p>
                  <p className="text-sm text-gray-600">۲ هفته پیش</p>
                </div>
              </div>
              <div className="flex gap-2 items-center self-end">
                <button className="flex items-center gap-1 rounded-full text-sm bg-gray-100 text-gray-600 py-2 pl-3 pr-4 hover:text-primaryBlue transition-all">
                  <span>پاسخ</span>
                  <span>
                    <ReplyIcon />
                  </span>
                </button>
                <div className="relative">
                  <span className="absolute -top-2 -right-0 text-white bg-red-600 text-xs rounded-full px-1">
                    ۳
                  </span>
                  <span className="bg-gray-100 text-gray-600 rounded-full py-2 px-3 hover:text-red-500 transition-all cursor-pointer">
                    <FavoriteIcon fontSize="small" />
                  </span>
                </div>
              </div>
            </div>
            <div className="border-t mt-2 pt-2">
              <p className="text-gray-600">
                من این دوره رو خریدم و میخوام نکست هم بعدا یاد بگیرم چون نیاز
                بیشتری دارم به اموزش های این دوره میشه بدون اینکه دوره نکست رو
                ببینم این دوره رو ببینم(بخش6دوره بیشتر مد نظرمه)
              </p>
            </div>
          </div>
          <div className="border py-4 px-6 rounded-3xl">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <div className="flex items-center gap-2">
                <img
                  src="/images/teacher-img.jpeg"
                  alt=""
                  className="w-10 rounded-full"
                />
                <div>
                  <p>امید تاجیک</p>
                  <p className="text-sm text-gray-600">۲ هفته پیش</p>
                </div>
              </div>
              <div className="flex gap-2 items-center self-end">
                <button className="flex items-center gap-1 rounded-full text-sm bg-gray-100 text-gray-600 py-2 pl-3 pr-4 hover:text-primaryBlue transition-all">
                  <span>پاسخ</span>
                  <span>
                    <ReplyIcon />
                  </span>
                </button>
                <div className="relative">
                  <span className="absolute -top-2 -right-0 text-white bg-red-600 text-xs rounded-full px-1">
                    ۳
                  </span>
                  <span className="bg-gray-100 text-gray-600 rounded-full py-2 px-3 hover:text-red-500 transition-all cursor-pointer">
                    <FavoriteIcon fontSize="small" />
                  </span>
                </div>
              </div>
            </div>
            <div className="border-t mt-2 pt-2">
              <p className="text-gray-600">
                من این دوره رو خریدم و میخوام نکست هم بعدا یاد بگیرم چون نیاز
                بیشتری دارم به اموزش های این دوره میشه بدون اینکه دوره نکست رو
                ببینم این دوره رو ببینم(بخش6دوره بیشتر مد نظرمه)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentRow;
