"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

function Comments() {
  return (
    <div className="px-4 md:px-10 mt-32">
      <div className="flex flex-col md:flex-row gap-8 xl:gap-20">
        <div className="flex gap-4 items-center">
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
            <h4 className="font-bold text-primaryBlue text-xl xs:text-[28px]">
              در مورد نابغه چه میشنویم؟
            </h4>
            <p className="xs:text-lg text-gray-700 xl:w-96 mt-2">
              این‌ها، بخش خیلی کوچکی از نظراتی هستند که افراد مختلف در مورد
              نابغه دارند.
            </p>
          </div>
        </div>
        <div className="w-9/12 md:w-1/2 xl:w-[550px] mx-auto h-full">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-[90%] h-full"
          >
            <SwiperSlide>
              <div className="border rounded-2xl p-6 bg-white">
                <p className="text-gray-700 text-center">
                  وبسایت شما به خوبی به نیازها و سطح دانش کاربران پاسخ می‌دهد.
                  از مبتدیان تا حرفه‌ایان، می‌توانند از محتواهای آموزشی شما
                  بهره‌بردند. این گسترده‌بودن پوشش محتوا بسیار قابل قدردانی است.
                </p>

                <div className="flex justify-center items-center gap-3 mt-5">
                  <img
                    src="/images/teacher-img.jpeg"
                    alt=""
                    className="rounded-full w-10"
                  />
                  <div className="text-sm">
                    <p className="font-bold">جلال بهرامی راد</p>
                    <p className="text-gray-600">
                      دوره پروژه محور React و Next
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border rounded-2xl p-6 bg-white">
                <p className="text-gray-700 text-center">
                  وبسایت شما به خوبی به نیازها و سطح دانش کاربران پاسخ می‌دهد.
                  از مبتدیان تا حرفه‌ایان، می‌توانند از محتواهای آموزشی شما
                  بهره‌بردند. این گسترده‌بودن پوشش محتوا بسیار قابل قدردانی است.
                </p>

                <div className="flex justify-center items-center gap-3 mt-5">
                  <img
                    src="/images/teacher-img.jpeg"
                    alt=""
                    className="rounded-full w-10"
                  />
                  <div className="text-sm">
                    <p className="font-bold">جلال بهرامی راد</p>
                    <p className="text-gray-600">
                      دوره پروژه محور React و Next
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border rounded-2xl p-6 bg-white">
                <p className="text-gray-700 text-center">
                  وبسایت شما به خوبی به نیازها و سطح دانش کاربران پاسخ می‌دهد.
                  از مبتدیان تا حرفه‌ایان، می‌توانند از محتواهای آموزشی شما
                  بهره‌بردند. این گسترده‌بودن پوشش محتوا بسیار قابل قدردانی است.
                </p>

                <div className="flex justify-center items-center gap-3 mt-5">
                  <img
                    src="/images/teacher-img.jpeg"
                    alt=""
                    className="rounded-full w-10"
                  />
                  <div className="text-sm">
                    <p className="font-bold">جلال بهرامی راد</p>
                    <p className="text-gray-600">
                      دوره پروژه محور React و Next
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Comments;
