"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import addCourseToCart from "@/funcs/addCourseToCart";
import {
  addOrRemoveCourseFromFavorites,
  isCourseInFavorites,
} from "@/funcs/addOrRemoveCourseFromFavorites";

function SideColumn(props) {
  const [isCourseInFavoritesState, setIsCourseInFavoritesState] =
    useState(null);

  const addOrRemoveHandler = () => {
    addOrRemoveCourseFromFavorites(props);
    isCourseInFavorites(props.id).then((res) => {
      setIsCourseInFavoritesState(!Boolean(res));
    });
  };

  useEffect(() => {
    isCourseInFavorites(props.id).then((res) => {
      setIsCourseInFavoritesState(Boolean(res));
    });
  }, []);

  return (
    <div className="sticky top-24 space-y-6">
      <div className="bg-gradient-to-b from-gray-100 to-white p-5 pt-0 rounded-2xl space-y-4">
        <div className="bg-white rounded-b-3xl px-6 py-4">
          <h5 className="font-bold text-[17px]">نام نویسی در دوره</h5>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-lg font-bold">هزینه ثبت نام:</p>
          {props.price ? (
            <div>
              {props.discount ? (
                <p className="text-gray-700 line-through tracking-[-0.12em] text-lg text-end -mb-1">
                  {props?.price?.toLocaleString("fa-IR")}
                </p>
              ) : (
                ""
              )}
              <p className="font-bold text-[22px] tracking-[-0.09em] text-nowrap">
                {(
                  props.price -
                  (props.price * props.discount) / 100
                ).toLocaleString("fa-IR")}{" "}
                <span className="font-normal text-gray-600 text-sm tracking-normal">
                  تومان
                </span>
              </p>
            </div>
          ) : (
            <div className="font-bold text-[26px] tracking-normal text-green-400 mt-0.5">
              رایگان
            </div>
          )}
        </div>
        <div className="flex items-center gap-3">
          <button
            className="flex-1 text-white bg-primaryBlue flex items-center gap-1 px-4 py-2.5 justify-center rounded-full hover:opacity-80 transition-all"
            onClick={() => addCourseToCart(props)}
          >
            <p className="-mt-0.5">اضافه به سبد</p>
            <ArrowOutwardIcon className="-rotate-90" fontSize="small" />
          </button>
          <span
            className={`bg-gray-100 text-gray-600 rounded-full py-2 px-3 transition-all cursor-pointer ${
              isCourseInFavoritesState ? "text-red-500" : "text-gray-600"
            }`}
            onClick={addOrRemoveHandler}
          >
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
                {props.teacher.fullname}
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
