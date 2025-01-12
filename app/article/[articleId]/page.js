import React from "react";
import Navbar from "@/components/modules/Navbar";
import Footer from "@/components/modules/Footer";
import SideColumn from "@/components/templates/Article/SideColumn";
import MainColumn from "@/components/templates/Article/MainColumn";

function Article() {
  return (
    <>
      <Navbar />
      <div className="mt-28 mb-24 px-4 md:px-10">
        <div className="flex flex-col md:flex-row gap-20 md:gap-5">
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

export default Article;
