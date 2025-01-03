import React from 'react'
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function SeasonRow() {
  return (
    <div>
    <div className="flex justify-between items-center bg-gray-100 rounded-2xl px-6 py-4 cursor-pointer">
      <div className="flex items-center gap-6">
        <h6 className="text-[15px]">فصل اول</h6>
        <h4 className="text-sm">معرفی</h4>
      </div>

      <span className="text-gray-400">
        <ArrowForwardIosIcon fontSize="small" className="rotate-90" />
      </span>
    </div>
    <div className="mt-2 space-y-1 pr-10 pl-16">
      <div className="border rounded-xl flex justify-between items-center px-3 py-1">
        <div className="flex gap-6 text-sm">
          <p className="text-gray-600">۱</p>
          <Link href="session/2" className="hover:line-through">معرفی دوره</Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-gray-600 text-sm">
            ۰۳:۵۸{" "}
            <span className="text-base">
              <AccessTimeIcon fontSize="" className="" />
            </span>
          </div>
          <button className="text-gray-600 bg-gray-100 rounded-full text-[15px] hover:text-primaryBlue transition-all">
            <Link
              href="session/2"
              className="flex items-center gap-1 px-4 py-2.5"
            >
              <p className="-mt-0.5">مشاهده</p>
              <ArrowOutwardIcon className="-rotate-90" fontSize="small" />
            </Link>
          </button>
        </div>
      </div>
      <div className="border rounded-xl flex justify-between items-center px-3 py-1">
        <div className="flex gap-6 text-sm">
          <p className="text-gray-600">۱</p>
          <Link href="session/2" className="hover:line-through">معرفی دوره</Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-gray-600 text-sm">
            ۰۳:۵۸{" "}
            <span className="text-base">
              <AccessTimeIcon fontSize="" className="" />
            </span>
          </div>
          <button className="text-gray-600 bg-gray-100 rounded-full text-[15px] hover:text-primaryBlue transition-all">
            <Link
              href="session/2"
              className="flex items-center gap-1 px-4 py-2.5"
            >
              <p className="-mt-0.5">مشاهده</p>
              <ArrowOutwardIcon className="-rotate-90" fontSize="small" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SeasonRow