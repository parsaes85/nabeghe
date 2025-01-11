import Link from "next/link";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <div className="border-b px-4 md:px-10 py-4 fixed z-40 top-0 right-0 w-full bg-white bg-opacity-[0.98] backdrop-blur-md">
      <div className="flex justify-between">
        <div className="flex gap-3 lg:gap-6 items-center">
          <span className="bg-gray-100 p-2 rounded-full lg:hidden">
            <MenuIcon />
          </span>
          <Link href="/">
            <img src="/images/logo.png" alt="" />
          </Link>
          <ul className="hidden lg:flex gap-6">
            <li className="group/subMenu relative">
              <div className="flex gap-1.5 text-gray-600">
                دسته بندی آموزشها
                <span>
                  <ArrowForwardIosIcon fontSize="small" className="rotate-90" />
                </span>
              </div>
              <div className="absolute top-6 pt-4 opacity-0 invisible group-hover/subMenu:opacity-100 group-hover/subMenu:visible transition-all duration-200">
                <ul className="py-3 space-y-6 border bg-white shadow-md w-[220px]">
                  <li className="group/subItemMenu px-3">
                    <div className="text-gray-700 flex items-center justify-between gap-1">
                      دیتا ساینس
                      <span>
                        <ArrowForwardIosIcon
                          fontSize="small"
                          className="rotate-180"
                        />
                      </span>
                    </div>
                    <ol className="list-disc border py-3 px-8 absolute right-[218px] top-4 text-gray-600 bg-white opacity-0 invisible group-hover/subItemMenu:opacity-100 group-hover/subItemMenu:visible">
                      <li>جاوااسکریپت</li>
                      <li>ریکت</li>
                    </ol>
                  </li>
                  <li className="group/subItemMenu px-3">
                    <div className="text-gray-700 flex items-center justify-between gap-1">
                      توسعه بازی
                      <span>
                        <ArrowForwardIosIcon
                          fontSize="small"
                          className="rotate-180"
                        />
                      </span>
                    </div>
                    <ol className="list-disc border py-3 px-8 absolute right-[218px] top-4 text-gray-600 bg-white opacity-0 invisible group-hover/subItemMenu:opacity-100 group-hover/subItemMenu:visible text-nowrap">
                      <li>جنگو</li>
                      <li>پی اچ پی</li>
                      <li>لاراول</li>
                    </ol>
                  </li>
                  <li className="group/subItemMenu px-3">
                    <div className="text-gray-700 flex items-center justify-between gap-1">
                      برنامه نویسی وب
                      <span>
                        <ArrowForwardIosIcon
                          fontSize="small"
                          className="rotate-180"
                        />
                      </span>
                    </div>
                    <div></div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="text-gray-600">مقالات آموزشی</div>
              <div></div>
            </li>
            <li className="group relative">
              <div className="flex gap-1.5 text-gray-600">
                لینکهای مفید
                <span>
                  <ArrowForwardIosIcon fontSize="small" className="rotate-90" />
                </span>
              </div>
              <div className="absolute top-6 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <ul className="p-4 rounded-md space-y-3 border bg-white shadow-md w-[220px]">
                  <li className="text-gray-700">مشاهده پروفایل</li>
                  <li className="text-gray-700">دوره ها</li>
                  <li className="text-gray-700">مالی</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-gray-100 text-gray-700 p-2 rounded-full hidden lg:block">
            <SearchIcon />
          </span>
          <span className="bg-gray-100 text-gray-700 p-2 rounded-full">
            <ShoppingCartOutlinedIcon />
          </span>
          <div className="flex gap-1 sm:gap-3">
            <span className="bg-gray-100 text-gray-700 p-2 rounded-full">
              <PersonOutlineOutlinedIcon />
            </span>
            <div className="flex items-center gap-2">
              <div className="text-sm hidden xs:block">
                <p>جلال بهرامی‌راد</p>
                <p className="text-gray-500">خوش آمدید</p>
              </div>
              <span>
                <ArrowForwardIosIcon
                  fontSize="small"
                  className="rotate-90 text-gray-600"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
