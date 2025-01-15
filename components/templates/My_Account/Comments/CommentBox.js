import Link from "next/link";
import React from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FavoriteIcon from "@mui/icons-material/Favorite";

function CommentBox() {
  return (
    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-8 border-b border-dashed pb-12">
      <div className="flex-1 relative">
        <Link href="/course/2">
          <img src="/images/01.jpg" alt="" className=" rounded-3xl" />
        </Link>
      </div>
      <div className="flex-1 w-full sm:w-auto sm:flex-[2] md:flex-1 md:w-full lg:w-auto lg:flex-[2] bg-gradient-to-b from-gray-100 to-white px-5 rounded-3xl">
        <div className="bg-white rounded-b-3xl p-5 text-[15px]">
          <Link
            href="/course/1"
            className="block font-bold hover:text-primaryBlue transition-all"
          >
            دوره پروژه محور React و Next
          </Link>
        </div>
        <div className="mt-4 space-y-2">
          <li className="list-disc text-green-600">تایید شده</li>
          <p className="text-gray-600">
            من این دوره رو خریدم و میخوام نکست هم بعدا یاد بگیرم چون نیاز بیشتری
            دارم به اموزش های این دوره میشه بدون اینکه دوره نکست رو ببینم این
            دوره رو ببینم
          </p>
        </div>
        <div className="mt-3">
          <button className="text-white bg-primaryBlue rounded-full hover:opacity-80 transition-all">
            <Link
              href="/course/2"
              className="flex items-center gap-1 px-4 py-2.5 justify-center"
            >
              <p className="-mt-0.5">مشاهده در صفحه دوره</p>
              <ArrowOutwardIcon className="-rotate-90" fontSize="small" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentBox;
