"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AutoAwesomeOutlined,
  Close,
  LoginOutlined,
  PaymentsOutlined,
  SchoolOutlined,
  SmsOutlined,
} from "@mui/icons-material";

import Sidebar from "./Sidebar";
import getMe from "@/funcs/getMe";
import deleteCookie from "@/funcs/cookies/deleteCookie";
import getUsersCartCourses from "@/funcs/getUsersCartCourses";
import getMenus from "@/funcs/getMenus";
import getCookie from "@/funcs/cookies/getCookie";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchBarShow, setIsSearchBarShow] = useState(false);
  const [isProfileSubMenuShow, setIsProfileSubMenuShow] = useState(false);
  const [userInfos, setUserInfos] = useState(null);
  const [userCartCourses, setUserCartCourses] = useState([]);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getMenus().then((res) => setMenus(res));
    getMe().then((res) => {
      setUserInfos(res);
      getUsersCartCourses(getCookie("nabeghe-token")).then((res) =>
        setUserCartCourses(res)
      );
    });
  }, []);

  function logoutHandler() {
    deleteCookie("nabeghe-token");
    getMe().then((res) => {
      setUserInfos(res);
      getUsersCartCourses(getCookie("nabeghe-token")).then((res) =>
        setUserCartCourses(res)
      );
    });
    setIsProfileSubMenuShow(false);
  }

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
              {menus.map((menu) =>
                menu.submenu.length ? (
                  <li key={menu.id} className="group/subMenu relative">
                    <div className="flex gap-1.5 text-gray-600">
                      {menu.title}
                      <span>
                        <ArrowForwardIosIcon
                          fontSize="small"
                          className="rotate-90"
                        />
                      </span>
                    </div>
                    <div className="absolute top-6 pt-4 opacity-0 invisible group-hover/subMenu:opacity-100 group-hover/subMenu:visible transition-all duration-200">
                      <ul className="py-3 space-y-6 border bg-white shadow-md w-[220px]">
                        {menu.submenu.map((submenu) => (
                          <li
                            key={submenu.id}
                            className="group/subItemMenu px-3"
                          >
                            <Link href={`/courses?s=${submenu.name}`}>
                              <div className="text-gray-700 flex items-center justify-between gap-1">
                                {submenu.title}
                                <span>
                                  <ArrowForwardIosIcon
                                    fontSize="small"
                                    className="rotate-180"
                                  />
                                </span>
                              </div>
                            </Link>
                            <ol className="list-disc border w-max h-[94%] py-3 px-8 absolute right-[218px] flex flex-col flex-wrap gap-x-10 gap-y-1 top-4 text-gray-600 shadow-sm bg-white opacity-0 invisible group-hover/subItemMenu:opacity-100 group-hover/subItemMenu:visible">
                              {submenu.categories.map((category) => (
                                <li key={category.id}>
                                  <Link
                                    href={`/course/${category.name}`}
                                    className="whitespace-nowrap block"
                                  >
                                    {category.title}
                                  </Link>
                                </li>
                              ))}
                            </ol>
                          </li>
                        ))}
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
                ) : (
                  <li key={menu.id}>
                    <Link
                      href={`/${menu.name}`}
                      className="text-gray-600 hover:text-black transition-all"
                    >
                      {menu.title}
                    </Link>
                  </li>
                )
              )}
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
                {userCartCourses?.length.toLocaleString("fa-IR")}
              </span>
              <ShoppingCartOutlinedIcon />
            </Link>
            {userInfos ? (
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
                      <p>{userInfos?.fullname}</p>
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
                      <button
                        className="flex items-center gap-2 text-red-500 hover:text-red-700"
                        onClick={logoutHandler}
                      >
                        <span>
                          <LoginOutlined fontSize="small" />
                        </span>
                        خروج از حساب
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                href="/login-register?isLogin=1"
                className="bg-primaryBlue hover:opacity-70 text-white rounded-lg px-4 py-2 transition duration-200"
              >
                ثبت نام / ورود
              </Link>
            )}
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
