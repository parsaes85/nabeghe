import React from "react";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="px-10 pb-10">
      <div className="flex items-center gap-2">
        <div className="h-0.5 flex-1 bg-gray-100"></div>
        <button className="text-gray-700 bg-gray-100 rounded-full px-4 py-2.5 flex gap-2 text-sm">
          برگشت به بالا
          <span>
            <ArrowForwardIosIcon fontSize="small" className="-rotate-90" />
          </span>
        </button>
      </div>
      <div className="grid grid-cols-5 gap-6 pt-10 pb-8">
        <Link href="/" className="col-span-2">
          <img src="/images/logo.png" alt="" />
        </Link>
        <div className=" col-span-3 flex gap-10">
          <div className="flex items-center gap-4">
            <span className="bg-gray-100 rounded-full py-3 px-3.5 text-gray-600">
              <LocalPhoneIcon fontSize="small" />
            </span>
            <div className="font-bold">
              <h4 className="text-primaryBlue">شماره تلفن</h4>
              <p className="tracking-tight">۰۲۱−۱۲۳۴۵۶۷</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-gray-100 rounded-full py-3 px-3.5 text-gray-600">
              <WatchLaterIcon fontSize="small" />
            </span>
            <div className="font-bold">
              <h4 className="text-primaryBlue">ساعات کاری</h4>
              <p className="tracking-tight">۰۹:۰۰ - ۱۷:۰۰</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 items-start gap-6">
        <div className="col-span-2 bg-gray-100 rounded-3xl px-6 pb-8 pt-7">
          <h3 className="font-bold text-lg mb-3 pr-2">درباره</h3>
          <p className="text-gray-600 text-justify leading-5">
            نابغه یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح ایران
            است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات و
            دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد. تبدیل کردن
            برنامه نویسان ایرانی به بهترین برنامه نویسان جهان هدف ماست.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3 pr-2">لینک های مفید</h3>
          <ul className="text-gray-600 space-y-0.5">
            <li>
              <Link href="#">قوانین و مقررات</Link>
            </li>
            <li>
              <Link href="#">مدرسان</Link>
            </li>
            <li>
              <Link href="#">درباره نابغه</Link>
            </li>
            <li>
              <Link href="#">ارتباط با ما</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <h3 className="font-bold text-lg mb-3 pr-2">خبرنامه</h3>
          <p className="text-gray-600">
            برای اطلاع از جدیدترین اخبار و جشنوراه‌های تخفیفی نابغه ایمیل خود را
            وارد کنید.
          </p>
          <form className="flex gap-3 my-4">
            <input
              type="email"
              className="bg-gray-100 rounded-xl px-5 py-3 flex-1"
              placeholder="آدرس ایمیل"
            />
            <button className="text-white bg-primaryBlue rounded-xl px-3 text-sm">
              ثبت ایمیل
            </button>
          </form>
          <h3 className="font-bold text-lg mb-3 pr-2">شبکه های اجتماعی</h3>
          <div className="flex gap-6">
            <Link href="#" className="bg-gray-100 rounded-full p-3 text-gray-700">
              <InstagramIcon />
            </Link>
            <Link href="#" className="bg-gray-100 rounded-full p-3 text-gray-700">
              <TelegramIcon />
            </Link>
            <Link href="#" className="bg-gray-100 rounded-full p-3 text-gray-700">
              <YouTubeIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
