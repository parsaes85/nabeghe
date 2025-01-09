import React from "react";
import Navbar from "@/components/modules/Navbar";
import Footer from "@/components/modules/Footer";

function Contact_Us() {
  return (
    <>
      <Navbar />
      <div className="mt-28 px-10">
        <div>
          <h4 className="font-bold text-[28px]">تماس با ما</h4>
          <p className="text-sm text-gray-700">
            در این صفحه میتوانید اطلاعات ارتباطی نابغه را مشاهده کنید.
          </p>
        </div>
      </div>
      <div className="px-10 mt-10 mb-24"></div>
      <Footer />
    </>
  );
}

export default Contact_Us;
