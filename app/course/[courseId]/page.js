import React from "react";
import Navbar from "@/components/modules/Navbar";
import Footer from "@/components/modules/Footer";
import SideColumn from "@/components/templates/Course/SideColumn";
import MainColumn from "@/components/templates/Course/MainColumn";

function Course() {
  return (
    <>
      <Navbar />
      <div className="mt-28 mb-24 px-10">
        <div className="flex gap-5">
          <div className="flex-[2]">
            <MainColumn />
          </div>
          <div className="flex-1 relative">
            <SideColumn />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Course;
