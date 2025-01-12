import React from "react";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import Navbar from "@/components/modules/Navbar";
import Footer from "@/components/modules/Footer";
import Form from "@/components/templates/Contact_Us/Form";

function Contact_Us() {
  return (
    <>
      <Navbar />
      <div className="mt-28 px-4 md:px-10">
        <div>
          <h4 className="font-bold text-2xl xs:text-[28px]">تماس با ما</h4>
          <p className="text-sm text-gray-700">
            در این صفحه میتوانید اطلاعات ارتباطی نابغه را مشاهده کنید.
          </p>
        </div>
      </div>
      <div className="px-4 md:px-10 mt-10 mb-24">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-y-10">
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-3 pr-2">شبکه های اجتماعی</h3>
              <div className="flex gap-6">
                <Link
                  href="#"
                  className="bg-gray-100 rounded-full p-3 text-gray-700"
                >
                  <InstagramIcon />
                </Link>
                <Link
                  href="#"
                  className="bg-gray-100 rounded-full p-3 text-gray-700"
                >
                  <TelegramIcon />
                </Link>
                <Link
                  href="#"
                  className="bg-gray-100 rounded-full p-3 text-gray-700"
                >
                  <YouTubeIcon />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 pr-2">شبکه های اجتماعی</h3>
              <p className="font-bold">۰۲۱−۱۲۳۴۵۶۷</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 pr-2">آدرس دفتر</h3>
              <p className="font-bold">
                استان، شهر، خیابان (...)، کوچه(...)، پلاک(...)
              </p>
            </div>
          </div>
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact_Us;
