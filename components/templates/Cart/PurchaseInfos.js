import React from "react";
import CachedIcon from "@mui/icons-material/Cached";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function PurchaseInfos() {
  return (
    <div className="sticky top-24">
      <div className="bg-gradient-to-b from-gray-100 to-white p-5 pt-0 rounded-2xl space-y-4">
        <div className="bg-white rounded-b-3xl px-6 py-4">
          <h5 className="font-bold text-[17px]">اطلاعات پرداخت</h5>
        </div>
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="کد تخفیف"
              className="outline-none rounded-xl py-2.5 pr-10 w-full"
            />
            <span className="text-gray-600 absolute right-2 top-3">
              <LocalOfferIcon fontSize="small" />
            </span>
          </div>
          <button className="text-white bg-primaryBlue px-4 rounded-xl hover:opacity-80 transition-all">
            <CachedIcon />
          </button>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm">جمع کل</p>
            <p className="font-bold text-lg tracking-[-0.09em]">
              ۱،۰۷۹،۰۰۰{" "}
              <span className="font-normal text-gray-600 text-sm tracking-normal">
                تومان
              </span>
            </p>
          </div>
          <div className="flex items-center justify-between mt-1">
            <p className="text-sm">تخفیف</p>
            <p className="font-bold text-lg tracking-[-0.09em]">
              ۱۸۵،۰۰۰{" "}
              <span className="font-normal text-gray-600 text-sm tracking-normal">
                تومان
              </span>
            </p>
          </div>
          <div className="flex items-center justify-between border-t pt-4 mt-4">
            <p className="text-sm">مبلغ قابل پرداخت</p>
            <p className="font-bold text-[22px] tracking-[-0.09em]">
              ۱،۰۷۹،۰۰۰{" "}
              <span className="font-normal text-gray-600 text-sm tracking-normal">
                تومان
              </span>
            </p>
          </div>
        </div>
        <div className="pt-4">
          <button className="w-full text-white bg-primaryBlue flex items-center gap-1 px-4 py-2.5 justify-center rounded-full hover:opacity-80 transition-all">
            <p className="-mt-0.5">تکمیل فرایند خرید</p>
            <ArrowOutwardIcon className="-rotate-90" fontSize="small" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PurchaseInfos;
