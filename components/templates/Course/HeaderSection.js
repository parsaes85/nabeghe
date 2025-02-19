"use client";
import React, { useEffect, useState } from "react";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import WindowIcon from "@mui/icons-material/Window";
import ErrorIcon from "@mui/icons-material/Error";
import GroupsIcon from "@mui/icons-material/Groups";
import getCourseSessions from "@/funcs/getCourseSessions";

function HeaderSection(props) {
  const [sessionsCount, setSessionsCount] = useState(0);
  const [sessionsTime, setSessionsTime] = useState(0);

  function formatTimeToMinutes(seconds) {
    if (
      typeof seconds !== "number" ||
      seconds < 0 ||
      !Number.isFinite(seconds)
    ) {
      throw new Error("invalid input");
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes.toLocaleString("fa")).padStart(2, "۰")}:${String(
      remainingSeconds.toLocaleString("fa")
    ).padStart(2, "۰")}`;
  }

  useEffect(() => {
    getCourseSessions(props.id).then((res) => {
      res.forEach((season) => {
        season.sessions.forEach((session) => {
          setSessionsCount((prevCount) => (prevCount += 1));
          setSessionsTime((prevCount) => (prevCount += session.time));
          console.log(session);
        });
      });
    });
  }, []);

  return (
    <div>
      <img src={props?.images[0]} alt="" className="w-full rounded-3xl" />
      <div className="bg-gray-50 rounded-3xl p-5 mx-5 text-[15px]">
        <li
          className={`${
            props.isComplete ? "text-green-600 " : "text-orange-600"
          } list-disc`}
        >
          {props.isComplete ? "تکمیل شده" : "درحال ضبط"}{" "}
        </li>
        <h1 className="block font-bold hover:text-primaryBlue transition-all text-xl mt-1 mb-2">
          {props.title}
        </h1>
        <p className="text-gray-600">{props.shortDesc}</p>
      </div>
      <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="border bg-gray-100 flex flex-col items-center rounded-2xl py-3 flex-1">
          <span className="bg-white rounded-full text-primaryBlue px-4 py-3.5">
            <WatchLaterIcon fontSize="small" />
          </span>
          <p className="text-gray-600 mt-2">مدت دوره</p>
          <p>{formatTimeToMinutes(sessionsTime)}</p>
        </div>
        <div className="border bg-gray-100 flex flex-col items-center rounded-2xl py-3 flex-1">
          <span className="bg-white rounded-full text-primaryBlue px-4 py-3.5">
            <WindowIcon fontSize="small" />
          </span>
          <p className="text-gray-600 mt-2">تعداد جلسات</p>
          <p>{sessionsCount.toLocaleString("fa")}</p>
        </div>
        <div className="border bg-gray-100 flex flex-col items-center rounded-2xl py-3 flex-1">
          <span className="bg-white rounded-full text-primaryBlue px-4 py-3.5">
            <ErrorIcon fontSize="small" />
          </span>
          <p className="text-gray-600 mt-2">نوع دوره</p>
          <p>ویژه / {props.price ? "نقدی" : "رایگان"}</p>
        </div>
        <div className="border bg-gray-100 flex flex-col items-center rounded-2xl py-3 flex-1">
          <span className="bg-white rounded-full text-primaryBlue px-4 py-3.5">
            <GroupsIcon fontSize="small" />
          </span>
          <p className="text-gray-600 mt-2">شرکت‌کنندگان</p>
          <p>{props.students.toLocaleString("fa")} دانشجو</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
