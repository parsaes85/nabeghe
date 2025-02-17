"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathName = usePathname();

  useEffect(() => {
    scrollTo({
      top: 0,
    });
  }, [pathName]);

  return (
    <div className="sticky top-24">
      <div className="flex items-center gap-3">
        <img
          src="/images/teacher-img.jpeg"
          alt=""
          className="w-10 rounded-full"
        />
        <div>
          <p className="text-gray-600 text-sm">خوش آمدید</p>
          <p>جلال بهرامی راد</p>
        </div>
      </div>
      <div className="mt-4 bg-gray-100 p-5 rounded-xl space-y-3">
        <div>
          <Link
            href="/my-account/dashboard"
            className={`flex items-center gap-3 rounded-full px-4 py-3 bg-white text-gray-600 transition-all hover:bg-primaryBlue hover:text-white`}
            style={
              pathName == "/my-account/dashboard"
                ? {
                    backgroundColor: "#1d4ed8",
                    color: "#fff",
                  }
                : {}
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-sm">پیشخوان</span>
          </Link>
        </div>
        <div>
          <Link
            href="/my-account/courses"
            className={`flex items-center gap-3 rounded-full px-4 py-3 bg-white text-gray-600 transition-all hover:bg-primaryBlue hover:text-white`}
            style={
              pathName == "/my-account/courses"
                ? {
                    backgroundColor: "#1d4ed8",
                    color: "#fff",
                  }
                : {}
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              ></path>
            </svg>
            <span className="text-sm">دوره ها</span>
          </Link>
        </div>
        <div>
          <Link
            href="/my-account/wishlist"
            className={`flex items-center gap-3 rounded-full px-4 py-3 bg-white text-gray-600 transition-all hover:bg-primaryBlue hover:text-white`}
            style={
              pathName == "/my-account/wishlist"
                ? {
                    backgroundColor: "#1d4ed8",
                    color: "#fff",
                  }
                : {}
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              ></path>
            </svg>
            <span className="text-sm">علاقمندی ها</span>
          </Link>
        </div>
        <div>
          <Link
            href="/my-account/financial"
            className={`flex items-center gap-3 rounded-full px-4 py-3 bg-white text-gray-600 transition-all hover:bg-primaryBlue hover:text-white`}
            style={
              pathName == "/my-account/financial"
                ? {
                    backgroundColor: "#1d4ed8",
                    color: "#fff",
                  }
                : {}
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
              ></path>
            </svg>
            <span className="text-sm">مالی و اشتراک</span>
          </Link>
        </div>
        <div>
          <Link
            href="/my-account/comments"
            className={`flex items-center gap-3 rounded-full px-4 py-3 bg-white text-gray-600 transition-all hover:bg-primaryBlue hover:text-white`}
            style={
              pathName == "/my-account/comments"
                ? {
                    backgroundColor: "#1d4ed8",
                    color: "#fff",
                  }
                : {}
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              ></path>
            </svg>
            <span className="text-sm">دیدگاه و پرسشهای شما</span>
          </Link>
        </div>
        <div>
          <Link
            href="/my-account/notifications"
            className={`flex items-center gap-3 rounded-full px-4 py-3 bg-white text-gray-600 transition-all hover:bg-primaryBlue hover:text-white`}
            style={
              pathName == "/my-account/notifications"
                ? {
                    backgroundColor: "#1d4ed8",
                    color: "#fff",
                  }
                : {}
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              ></path>
            </svg>
            <span className="text-sm">اعلانات</span>
          </Link>
        </div>
        <div>
          <Link
            href="/my-account/edit-profile"
            className={`flex items-center gap-3 rounded-full px-4 py-3 bg-white text-gray-600 transition-all hover:bg-primaryBlue hover:text-white`}
            style={
              pathName == "/my-account/edit-profile"
                ? {
                    backgroundColor: "#1d4ed8",
                    color: "#fff",
                  }
                : {}
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              ></path>
            </svg>
            <span className="text-sm">ویرایش پروفایل</span>
          </Link>
        </div>
        <div>
          <button className="flex w-full items-center gap-3 rounded-full px-4 py-3 bg-white text-gray-600 transition-all hover:bg-primaryBlue hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              ></path>
            </svg>
            <span className="text-sm">خروج حساب</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
