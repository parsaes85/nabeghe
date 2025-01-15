import { ErrorOutlineOutlined } from "@mui/icons-material";
import React from "react";

function NotificationBox() {
  return (
    <div className="border p-2 2xs:p-4 sm:p-6 rounded-2xl flex items-center">
      <span className="text-yellow-500 border-l pl-5 ml-5">
        <ErrorOutlineOutlined />
      </span>
      <div className="space-y-1">
        <h6 className="font-bold">ورود به سیستم</h6>
        <p className="text-gray-600 text-sm">
          درصورتی که فکر میکنید این کار توسط شما انجام نشده هرچه سریعتر به بخش
          مدیریت نشست ها در بخش پنل کاربری خود در نابغه مراجعه بفرمایید و نشست
          مورد نظر را حذف کنید.
        </p>
        <p className="text-gray-600 text-sm">۶ روز پیش</p>
      </div>
    </div>
  );
}

export default NotificationBox;
