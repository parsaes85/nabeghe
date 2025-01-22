import React from "react";
import Link from "next/link";
import LoginForm from "@/components/templates/Login_Register/LoginForm";
import RegisterForm from "@/components/templates/Login_Register/RegisterForm";

async function Login_Register({ searchParams }) {
  const isLogin = (await searchParams)?.isLogin === "1";

  return (
    <div className="w-11/12 xs:w-96 mx-auto my-16">
      <div className="bg-gradient-to-b from-gray-100 to-white rounded-3xl p-6">
        <div className="bg-white rounded-b-3xl px-4 py-5">
          <Link href="/">
            <img src="/images/logo.png" alt="" className="mx-auto" />
          </Link>
        </div>
        <div className="mt-4">
          <h5 className="font-bold mb-3 text-lg text-right">
            {isLogin ? "ورود" : "ثبت نام"}
          </h5>
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
      <p className="text-sm mt-10 bg-gray-100 rounded-xl p-4 text-center text-gray-600">
        ورود شما به معنای پذیرش
        <Link
          href="#"
          className="hover:underline hover:text-primaryBlue"
        >
          شرایط
        </Link>
        و
        <Link
          href="#"
          className="hover:underline hover:text-primaryBlue"
        >
          قوانین حریم خصوصی
        </Link>
        است.
      </p>
    </div>
  );
}

export default Login_Register;
