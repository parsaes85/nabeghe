import Link from "next/link";
import React from "react";
import WindowIcon from "@mui/icons-material/Window";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FavoriteIcon from "@mui/icons-material/Favorite";

function CourseBox() {
  return (
    <div>
      <div className="relative">
        <Link href="/course/2">
          <img src="/images/01.jpg" alt="" className="w-full rounded-3xl" />
        </Link>
        <Link
          href="#"
          className="absolute top-3 left-3 rounded-full text-white bg-black bg-opacity-20 py-2 px-4 flex gap-1 items-center transition-all hover:opacity-70"
        >
          <WindowIcon />
          <p>فرانت اند</p>
        </Link>
      </div>
      <div className="mx-4">
        <div className="bg-gray-100 rounded-3xl p-5 space-y-1 text-[15px]">
          <li className="list-disc text-green-600">تکمیل شده</li>
          <Link
            href="/course/1"
            className="block font-bold hover:text-primaryBlue transition-all"
          >
            دوره پروژه محور React و Next
          </Link>
        </div>
        <div className="flex gap-6 mt-5">
          <div className="text-gray-700 flex gap-2 items-center">
            <FileCopyIcon fontSize="" />
            <p className="text-sm">۵ فصل</p>
          </div>
          <div className="text-gray-700 flex gap-2 items-center">
            <WatchLaterIcon fontSize="" />
            <p className="text-sm">۲۵ ساعت</p>
          </div>
        </div>
        <div className="flex justify-between items-end mt-1 mb-5">
          <div className="flex items-center gap-3">
            <img
              src="/images/teacher-img.jpeg"
              alt=""
              className="rounded-full w-10"
            />
            <div className="text-sm">
              <p className="text-gray-600">مدرس دوره:</p>
              <Link href="#" className="font-bold">
                جلال بهرامی راد
              </Link>
            </div>
          </div>
          <div>
            <p className="text-gray-700 line-through tracking-[-0.12em] text-lg text-end -mb-1">
              ۱،۱۹۹،۰۰۰
            </p>
            <p className="font-bold text-[22px] tracking-[-0.09em]">
              ۱،۰۷۹،۰۰۰{" "}
              <span className="font-normal text-gray-600 text-sm tracking-normal">
                تومان
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex-1 text-white bg-primaryBlue rounded-full hover:opacity-80 transition-all">
            <Link
              href="/course/2"
              className="flex items-center gap-1 px-4 py-2.5 justify-center"
            >
              <p className="-mt-0.5">مشاهده دوره</p>
              <ArrowOutwardIcon className="-rotate-90" fontSize="small" />
            </Link>
          </button>
          <span className="bg-gray-100 text-gray-600 rounded-full py-2 px-3 hover:text-red-500 transition-all cursor-pointer">
            <FavoriteIcon fontSize="small" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default CourseBox;
