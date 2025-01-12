import React from "react";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import WindowIcon from "@mui/icons-material/Window";
import ErrorIcon from "@mui/icons-material/Error";
import GroupsIcon from "@mui/icons-material/Groups";

function HeaderSection() {
  return (
    <div>
      <img src="/images/01.jpg" alt="" className="w-full rounded-3xl" />
      <div className="bg-gray-50 rounded-3xl p-5 mx-5 text-[15px]">
        <li className="list-disc text-green-600">تکمیل شده</li>
        <h1
          href="/course/1"
          className="block font-bold hover:text-primaryBlue transition-all text-xl sm:text-xl mt-1 mb-2"
        >
          دوره پروژه محور React و Next
        </h1>
        <p className="text-gray-600">
          ساخت وبسایت فروشگاهی با React عنوان دوره پروژه محور react در نابغه است
          که قصد داریم در قالب این دوره react را در قالب پروژه به شما آموزش
          دهیم.
        </p>
      </div>
      <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="border bg-gray-100 flex flex-col items-center rounded-2xl py-3 flex-1">
          <span className="bg-white rounded-full text-primaryBlue px-4 py-3.5">
            <WatchLaterIcon fontSize="small" />
          </span>
          <p className="text-gray-600 mt-2">مدت دوره</p>
          <p>۱۴:۵۴:۱۶</p>
        </div>
        <div className="border bg-gray-100 flex flex-col items-center rounded-2xl py-3 flex-1">
          <span className="bg-white rounded-full text-primaryBlue px-4 py-3.5">
            <WindowIcon fontSize="small" />
          </span>
          <p className="text-gray-600 mt-2">تعداد جلسات</p>
          <p>۹۹</p>
        </div>
        <div className="border bg-gray-100 flex flex-col items-center rounded-2xl py-3 flex-1">
          <span className="bg-white rounded-full text-primaryBlue px-4 py-3.5">
            <ErrorIcon fontSize="small" />
          </span>
          <p className="text-gray-600 mt-2">نوع دوره</p>
          <p>ویژه / نقدی</p>
        </div>
        <div className="border bg-gray-100 flex flex-col items-center rounded-2xl py-3 flex-1">
          <span className="bg-white rounded-full text-primaryBlue px-4 py-3.5">
            <GroupsIcon fontSize="small" />
          </span>
          <p className="text-gray-600 mt-2">شرکت‌کنندگان</p>
          <p>۱۲۲ دانشجو</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
