import React from "react";
import Link from "next/link";

function SideColumn() {
  return (
    <div className="sticky top-24 space-y-6">
      <div>
        <h5 className="font-bold mb-4">نویسنده:</h5>
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
