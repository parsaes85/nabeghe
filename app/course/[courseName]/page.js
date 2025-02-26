import React from "react";
import Navbar from "@/components/modules/Navbar";
import Footer from "@/components/modules/Footer";
import SideColumn from "@/components/templates/Course/SideColumn";
import MainColumn from "@/components/templates/Course/MainColumn";
import getCourse from "@/funcs/getCourse";

async function Course({ params }) {
  const courseData = await getCourse((await params).courseName);

  return (
    <>
      <Navbar />
      <div className="mt-28 mb-24 px-4 lg:px-10">
        <div className="flex flex-col md:flex-row gap-20 md:gap-5">
          <div className="flex-[2]">
            <MainColumn courseData={courseData[0]} />
          </div>
          <div className="flex-1 relative">
            <SideColumn {...courseData[0]} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Course;
