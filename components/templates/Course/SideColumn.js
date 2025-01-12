import React from "react";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FavoriteIcon from "@mui/icons-material/Favorite";

function SideColumn() {
  return (
    <div className="sticky top-24 space-y-6">
      <div className="bg-gradient-to-b from-gray-100 to-white p-5 pt-0 rounded-2xl space-y-4">
        <div className="bg-white rounded-b-3xl px-6 py-4">
          <h5 className="font-bold text-[17px]">نام نویسی در دوره</h5>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-lg font-bold">هزینه ثبت نام:</p>
          <div>
            <p className="text-gray-700 line-through tracking-[-0.12em] text-lg text-end -mb-1">
              ۱،۱۹۹،۰۰۰
            </p>
            <p className="font-bold text-[22px] tracking-[-0.09em] text-nowrap">
              ۱،۰۷۹،۰۰۰{" "}
              <span className="font-normal text-gray-600 text-sm tracking-normal">
                تومان
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex-1 text-white bg-primaryBlue flex items-center gap-1 px-4 py-2.5 justify-center rounded-full hover:opacity-80 transition-all">
            <p className="-mt-0.5">اضافه به سبد</p>
            <ArrowOutwardIcon className="-rotate-90" fontSize="small" />
          </button>
          <span className="bg-gray-100 text-gray-600 rounded-full py-2 px-3 hover:text-red-500 transition-all cursor-pointer">
            <FavoriteIcon fontSize="small" />
          </span>
        </div>
      </div>
      <div>
        <h5 className="font-bold mb-4">مدرس دوره</h5>
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/images/teacher-img.jpeg"
              alt=""
              className="rounded-full w-10"
            />
            <div>
              <Link href="#" className="block">
                جلال بهرامی راد
              </Link>
              <Link href="#" className="block text-primaryBlue text-sm">
                دیدن رزومه
              </Link>
            </div>
          </div>
          <div className="bg-gray-100 rounded-3xl rounded-tr-none p-5 mt-3 text-gray-600 text-[15px]">
            اول داستان، طراح گرافیک بودم و ۲ سالی به عنوان طراح مشغول بودم، بعد
            به برنامه‌نویسی علاقمند شدم و الان بیشتر از ۱۰ ساله که عاشق کدزنی و
            چالش‌های پروژه‌های مختلفم. به تدریس علاقه خاصی دارم و دوست دارم
            دانشی که در این راه بدست آوردم را در اختیار دیگران قرار بدم :)
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideColumn;
