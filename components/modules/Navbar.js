"use client";
import Link from "next/link";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import {
  AutoAwesomeOutlined,
  Close,
  LoginOutlined,
  PaymentsOutlined,
  SchoolOutlined,
  SmsOutlined,
} from "@mui/icons-material";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchBarShow, setIsSearchBarShow] = useState(false);
  const [isProfileSubMenuShow, setIsProfileSubMenuShow] = useState(false);

  return (
    <>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="border-b px-4 md:px-10 py-4 fixed z-40 top-0 right-0 w-full bg-white bg-opacity-[0.98] backdrop-blur-md">
        <div className="flex justify-between">
          <div className="flex gap-3 lg:gap-6 items-center">
            <span
              className="bg-gray-100 p-2 rounded-full lg:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
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
                    <ArrowForwardIosIcon
                      fontSize="small"
                      className="rotate-90"
                    />
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
                    <li className="group/subItemMenu px-3">
                      <Link
                        href="/courses"
                        className="text-gray-700 flex items-center justify-between gap-1 hover:text-black transition-all"
                      >
                        همه دوره ها
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-gray-600 hover:text-black transition-all"
                >
                  مقالات آموزشی
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-black transition-all"
                >
                  پرسش و پاسخ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-600 hover:text-black transition-all"
                >
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <span
              className="bg-gray-100 text-gray-700 p-2 rounded-full cursor-pointer hidden lg:block"
              onClick={() => setIsSearchBarShow(true)}
            >
              <SearchIcon />
            </span>
            <Link
              href="/cart"
              className="bg-gray-100 text-gray-700 p-2 rounded-full relative"
            >
              <span className="absolute left-0 -top-1 bg-primaryBlue text-white rounded-full text-sm px-1.5">
                ۲
              </span>
              <ShoppingCartOutlinedIcon />
            </Link>
            <div className="relative">
              <div
                className="flex gap-1 sm:gap-3 cursor-pointer"
                onClick={() => setIsProfileSubMenuShow(!isProfileSubMenuShow)}
              >
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
                      className={`transition-all ${
                        isProfileSubMenuShow ? "-rotate-90" : "rotate-90"
                      }  text-gray-600`}
                    />
                  </span>
                </div>
              </div>
              <div
                className={`absolute left-0 top-12 ${
                  !isProfileSubMenuShow && "hidden"
                }`}
              >
                <ul className="p-5 rounded-xl space-y-4 border bg-white text-sm shadow-md w-[220px]">
                  <li>
                    <Link
                      href="/my-account/dashboard"
                      className="flex items-center gap-2 hover:text-primaryBlue"
                    >
                      <span>
                        <AutoAwesomeOutlined fontSize="small" />
                      </span>
                      پیشخوان
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/my-account/courses"
                      className="flex items-center gap-2 hover:text-primaryBlue"
                    >
                      <span>
                        <SchoolOutlined fontSize="small" />
                      </span>
                      دوره ها
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/my-account/financial"
                      className="flex items-center gap-2 hover:text-primaryBlue"
                    >
                      <span>
                        <PaymentsOutlined fontSize="small" />
                      </span>
                      مالی
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/my-account/comments"
                      className="flex items-center gap-2 hover:text-primaryBlue"
                    >
                      <span>
                        <SmsOutlined fontSize="small" />
                      </span>
                      پرسش و دیدگاه ها
                    </Link>
                  </li>
                  <li>
                    <button className="flex items-center gap-2 text-red-500 hover:text-red-700">
                      <span>
                        <LoginOutlined fontSize="small" />
                      </span>
                      خروج از حساب
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute w-full h-full right-0 z-10 px-14 bg-white flex items-center transition-all duration-200 ${
            isSearchBarShow ? "top-0" : "-top-[999px]"
          }`}
        >
          <div className="flex-1 flex justify-between items-center">
            <input
              type="text"
              placeholder="نام دوره، مقاله و یا دسته بندی را وارد نمایید.."
              className="w-full outline-none text-lg placeholder:text-gray-500"
            />
            <span
              className="text-gray-500 bg-gray-100 rounded-full p-1.5 cursor-pointer hover:text-red-400"
              onClick={() => setIsSearchBarShow(false)}
            >
              <Close />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
