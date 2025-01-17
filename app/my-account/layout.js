import React from "react";
import Navbar from "@/components/modules/Navbar";
import Footer from "@/components/modules/Footer";
import Sidebar from "@/components/modules/My_Account/Sidebar";

function MyAccountLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="mt-[105px] px-4 md:px-10">
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="flex-1 relative">
            <Sidebar />
          </div>
          <div className="flex-[2] lg:flex-[3.3] overflow-x-auto">{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyAccountLayout;
