import {
  Close,
  Search,
  DragHandle,
  DescriptionOutlined,
  HelpOutlineOutlined,
  ArrowForwardIos,
  PhoneEnabledOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <div
      className={`fixed w-full h-screen top-0 right-0 bg-gray-100 z-50 transition-all duration-700 ${
        isSidebarOpen ? "visible bg-opacity-80" : "invisible bg-opacity-0"
      }`}
    >
      <div
        className={`absolute top-0 w-[88%] 2xs:w-80 h-screen rounded-l-xl p-4 pb-8 bg-white overflow-auto transition-all duration-300 ${
          isSidebarOpen ? "right-0" : "-right-[999px]"
        }`}
      >
        <div className="flex justify-between items-center">
          <Link href="/">
            <img src="/images/logo.png" alt="" />
          </Link>
          <span onClick={() => setIsSidebarOpen(false)}>
            <Close />
          </span>
        </div>
        <div className="relative mt-8 mb-6 border-b pb-4">
          <span className="absolute top-2 right-2 text-gray-500">
            <Search />
          </span>
          <input
            type="text"
            placeholder="دنبال چی میگردی؟"
            className="w-full border bg-gray-100 rounded-xl py-2 pr-10 outline-none"
          />
        </div>
        <div>
          <ul className="space-y-4">
            <li className="group/subMenu">
              <div className="flex items-center justify-between text-gray-600 group-hover/subMenu:text-black">
                <div className="flex items-center gap-2 text-sm">
                  <span>
                    <DragHandle fontSize="small" />
                  </span>
                  دسته بندی آموزشها
                </div>
                <span>
                  <ArrowForwardIos fontSize="" className="rotate-90 group-hover/subMenu:-rotate-90" />
                </span>
              </div>
              <div className="hidden mt-4 pb-2 pr-3 text-gray-400 text-sm group-hover/subMenu:block">
                <ul className="pr-4 border-r py-2 space-y-4">
                  <li className="group/subItemMenu">
                    <div className="flex gap-1 group-hover/subItemMenu:text-black">
                      <span>
                        <ArrowForwardIos fontSize="" className="-rotate-180 group-hover/subItemMenu:-rotate-[225deg]" />
                      </span>
                      برنامه نویسی وب
                    </div>
                    <ul className="hidden py-2 pr-5 border-r my-4 space-y-3 group-hover/subItemMenu:block">
                      <li>
                        <Link href="#">- جاوااسکریپت</Link>
                      </li>
                      <li>
                        <Link href="#">- نود جی اس</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#">- دیتا ساینس</Link>
                  </li>
                  <li>
                    <Link href="#">- زبانهای برنامه نویسی</Link>
                  </li>
                  <li>
                    <Link href="/courses">- همه دوره ها</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="/articles"
                className="flex items-center gap-2 text-gray-600 text-sm"
              >
                <span>
                  <DescriptionOutlined fontSize="small" />
                </span>
                مقالات آموزشی
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="flex items-center gap-2 text-gray-600 text-sm"
              >
                <span>
                  <HelpOutlineOutlined fontSize="small" />
                </span>
                پرسش و پاسخ
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="flex items-center gap-2 text-gray-600 text-sm"
              >
                <span>
                  <PhoneEnabledOutlined fontSize="small" />
                </span>
                تماس با ما
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
