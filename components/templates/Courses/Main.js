import React from "react";
import Filters from "./Filters";
import CoursesList from "./CoursesList";

function Main() {
  return (
    <div className="px-10 mt-10 mb-24">
      <div className="flex gap-5">
        <div className="flex-1 relative">
          <Filters />
        </div>
        <div className="flex-[3.5]">
          <CoursesList />
        </div>
      </div>
    </div>
  );
}

export default Main;
