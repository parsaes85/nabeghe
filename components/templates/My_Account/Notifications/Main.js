import React from "react";
import NotificationBox from "./NotificationBox";

function Main() {
  return (
    <div className="mb-10">
      <h5 className="font-bold text-lg mb-5">اعلانات</h5>

      <div className="space-y-6">
        <NotificationBox />
        <NotificationBox />
      </div>
    </div>
  );
}

export default Main;
