import React from "react";
import Navbar from "@/components/modules/Navbar";
import Footer from "@/components/modules/Footer";
import Sidebar from "@/components/modules/My_Account/Sidebar";

function MyAccountLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="mt-[105px] px-4 md:px-10">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 relative">
            <Sidebar />
          </div>
          <div className="flex-[3.3]">{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyAccountLayout;
