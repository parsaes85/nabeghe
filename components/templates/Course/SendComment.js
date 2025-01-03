import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function SendComment() {
  return (
    <div className="border rounded-3xl px-6 py-4">
      <h6 className="font-bold text-[15px]">ارسال دیدگاه یا پرسش</h6>
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center gap-3">
          <p>جلال بهرامی راد</p>
          <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
          <p className="text-sm text-gray-700">در پاسخ به</p>
          <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
          <div className="flex items-center gap-2">
            <img
              src="/images/teacher-img.jpeg"
              alt=""
              className="w-10 rounded-full"
            />
            <div>
              <p>امید تاجیک</p>
              <p className="text-sm text-gray-600">۲ هفته پیش</p>
            </div>
          </div>
        </div>
        <button className="text-red-600">لغو پاسخ</button>
      </div>
      <textarea
        rows="6"
        placeholder="متن مورد نظر خود را وارد کنید ..."
        className="w-full bg-gray-100 p-4 rounded-xl mt-4"
      ></textarea>
      <div>
        <button className="text-white bg-primaryBlue flex items-center gap-1 px-4 py-2.5 mt-3 justify-center rounded-full hover:opacity-80 transition-all mr-auto">
          <p className="-mt-0.5">ثبت دیدگاه یا پرسش</p>
          <ArrowOutwardIcon className="-rotate-90" fontSize="small" />
        </button>
      </div>
    </div>
  );
}

export default SendComment;
