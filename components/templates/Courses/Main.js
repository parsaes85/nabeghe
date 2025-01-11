"use client";
import React, { useState } from "react";
import Filters from "./Filters";
import CoursesList from "./CoursesList";

function Main() {
  const [isFiltersSidebarOpen, setIsFiltersSidebarOpen] = useState(false);

  return (
    <div className="px-4 md:px-10 mt-10 mb-24">
      <div className="flex gap-5">
        <div
          className={`fixed w-full h-full top-0 ${
            isFiltersSidebarOpen ? "right-0" : "-right-[999px]"
          } md:h-auto md:w-auto md:right-0 bg-black md:bg-white bg-opacity-10 z-40 md:z-auto md:block flex-1 md:relative`}
        >
          <Filters setIsFiltersSidebarOpen={setIsFiltersSidebarOpen} />
        </div>
        <div className="flex-[2.5] lg:flex-[3]">
          <CoursesList setIsFiltersSidebarOpen={setIsFiltersSidebarOpen} />
        </div>
      </div>
    </div>
  );
}

export default Main;
