import React from "react";
import Navbar from "@/components/modules/Navbar";
import Footer from "@/components/modules/Footer";
import PurchaseInfos from "@/components/templates/Cart/PurchaseInfos";
import CartCourses from "@/components/templates/Cart/CartCourses";

function Cart() {
  return (
    <>
      <Navbar />
      <div className="mt-28 mb-24 px-10">
        <div className="flex gap-5">
          <div className="flex-[2]">
            <CartCourses />
          </div>
          <div className="flex-1 relative">
            <PurchaseInfos />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
