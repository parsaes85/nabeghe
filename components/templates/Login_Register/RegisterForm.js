"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

function RegisterForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    router.push("/");
  };

  return (
    <>
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="fullName" className="text-gray-500">
            نام و نام خانوادگی
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full border bg-gray-100 rounded-xl outline-none p-2 mt-2"
            {...register("fullName", { required: true })}
          />
          {errors.fullName?.type === "required" && (
            <p className="text-red-500 text-xs mr-2">
              نام و نام خانوادگی اجباری است
            </p>
          )}
        </div>
        <div>
          <label htmlFor="username" className="text-gray-500">
            نام کاربری
          </label>
          <input
            type="text"
            id="username"
            className="w-full border bg-gray-100 rounded-xl outline-none p-2 mt-2"
            {...register("username", { required: true, minLength: 6 })}
          />
          {errors.username?.type === "required" && (
            <p className="text-red-500 text-xs mr-2">نام کاربری اجباری است</p>
          )}
          {errors.username?.type === "minLength" && (
            <p className="text-red-500 text-xs mr-2">
              نام کاربری حداقل باید ۶ کاراکتر باشد
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="text-gray-500">
            ایمیل
          </label>
          <input
            type="text"
            id="email"
            className="w-full border bg-gray-100 rounded-xl outline-none p-2 mt-2"
            {...register("email", {
              required: true,
              pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i,
            })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500 text-xs ml-2">ایمیل اجباری است</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="text-red-500 text-xs ml-2">ایمیل نامعتبر است</p>
          )}
        </div>
        <div className="relative">
          <label htmlFor="password" className="text-gray-500">
            رمز عبور
          </label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            className="w-full border bg-gray-100 rounded-xl outline-none p-2 mt-2"
            {...register("password", { required: true, minLength: 6 })}
          />
          <span
            className="absolute left-2 top-[42px] text-[#848284] cursor-pointer"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <VisibilityOffOutlinedIcon fontSize="small" />
            ) : (
              <VisibilityOutlinedIcon fontSize="small" />
            )}
          </span>
          {errors.password?.type === "required" && (
            <p className="text-red-500 text-xs mr-2">رمز عبور اجباری است</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 text-xs mr-2">
              رمز عبور حداقل باید ۶ کاراکتر باشد
            </p>
          )}
        </div>
        <div>
          <button className="w-full text-white bg-primaryBlue flex items-center gap-1 px-4 py-2 justify-center rounded-full hover:opacity-80 transition-all">
            <p className="-mt-0.5">برو بریم</p>
            <ArrowOutwardIcon className="-rotate-90" fontSize="small" />
          </button>
        </div>
      </form>
      <p className="text-sm mt-1">
        قبلا ثبت نام کرده اید؟{" "}
        <Link
          href="/login-register?isLogin=1"
          className="text-primaryBlue hover:underline"
        >
          وارد شوید
        </Link>
      </p>
    </>
  );
}

export default RegisterForm;
