import React from "react";
import Navbar from "@/components/modules/Navbar";
import Footer from "@/components/modules/Footer";
import Accordion from "@/components/templates/Faq/Accordion";

function Faq() {
  return (
    <>
      <Navbar />
      <div className="mt-28 px-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <span className="bg-yellow-500 px-[13px] py-0.5 text-2xl text-white rounded-full flex items-center justify-center">
            ?
          </span>
          <div className="bg-gradient-to-r from-yellow-300 to-white font-bold text-2xl py-4 px-8">
            پرسش های متداول
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="w-16 h-px bg-gray-200"></span>
            <span className="w-2 h-2 rounded-full bg-gray-200"></span>
            <span className="w-16 h-px bg-gray-200"></span>
          </div>
        </div>
      </div>
      <Accordion />
      <Footer />
    </>
  );
}

export default Faq;
