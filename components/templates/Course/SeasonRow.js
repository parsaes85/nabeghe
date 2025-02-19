"use client";
import React, { useState } from "react";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function SeasonRow(props) {
  const [isSeasonOpen, setIsSeasonOpen] = useState(false);
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

  return (
    <div>
      <div
        className="flex justify-between items-center bg-gray-100 rounded-2xl px-6 py-4 cursor-pointer"
        onClick={() => setIsSeasonOpen(!isSeasonOpen)}
      >
        <div className="flex items-center gap-6">
          <h6 className="text-[15px]">{props.name}</h6>
          <h4 className="text-sm">{props.title}</h4>
        </div>

        <span className="text-gray-400">
          <ArrowForwardIosIcon
            fontSize="small"
            className={`transition-all duration-300 ${isSeasonOpen ? "-rotate-90" : "rotate-90"} `}
          />
        </span>
      </div>
      <div
        className={`mt-2 space-y-1 sm:pr-10 sm:pl-16 overflow-hidden transition-all duration-500 ${
          isSeasonOpen ? "max-h-[100rem]" : "max-h-[0rem]"
        }`}
      >
        {props.sessions.map((session, index) => (
          <div
            className="border rounded-xl flex flex-col sm:flex-row sm:justify-between sm:items-center px-3 py-2 sm:py-1"
            key={session.id}
          >
            <div className="flex gap-6 text-sm">
              <p className="text-gray-600">
                {(index + 1).toLocaleString("fa")}
              </p>
              <Link href="session/2" className="hover:line-through">
                {session.title}
              </Link>
            </div>
            <div className="flex items-center gap-3 self-end">
              <div className="text-gray-600 text-sm">
                {formatTimeToMinutes(session.time)}{" "}
                <span className="text-base">
                  <AccessTimeIcon fontSize="" className="" />
                </span>
              </div>
              <button className="text-gray-600 bg-gray-100 rounded-full text-[15px] hover:text-primaryBlue transition-all">
                <Link
                  href="session/2"
                  className="flex items-center gap-1 px-4 py-2 sm:py-2.5"
                >
                  <p className="-mt-0.5">مشاهده</p>
                  <ArrowOutwardIcon className="-rotate-90" fontSize="small" />
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeasonRow;
