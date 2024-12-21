import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";

function Header() {
  return (
    <div className="px-10 mt-28">
      <div className="w-full bg-gradient-to-r from-white to-gray-100 rounded-2xl flex justify-between items-center gap-6 py-20 px-32">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <p className="bg-primaryBlue rounded-full text-white px-3">
              جشنواره تخفیف!
            </p>
            <p className="text-primaryBlue">به زودی :)</p>
          </div>
          <div>
            <h2 className="text-[50px] font-bold leading-[56px] mb-2">
              داستان برنامه‌نویس شدنت از اینجا شروع میشه!
            </h2>
            <p className="text-gray-600">
              یادگیری برنامه‌نویسی آرزو نیست، فقط نیاز هست که تلاش و تمرین داشته
              باشید، بقیه‌اش با نابغه
            </p>
          </div>
          <button className="text-white bg-primaryBlue rounded-full">
            <Link href="/courses" className="flex items-center gap-1 px-4 py-2.5">
              <p className="-mt-0.5">شروع یادگیری برنامه‌نویسی</p>
              <ArrowOutwardIcon className="-rotate-90" fontSize="small" />
            </Link>
          </button>
        </div>
        <div>
          <img src="/images/home-banner.png" alt="" className="max-w-[288px]" />
        </div>
      </div>
    </div>
  );
}

export default Header;
