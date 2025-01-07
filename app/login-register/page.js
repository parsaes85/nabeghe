import React from "react";
import Link from "next/link";
import LoginForm from "@/components/templates/Login_Register/LoginForm";
import RegisterForm from "@/components/templates/Login_Register/RegisterForm";

async function Login_Register({ searchParams }) {
  const { isLogin } = await searchParams;

  return (
    <div
      className={`w-full h-screen flex justify-center items-center ${
        !Number(isLogin) && "my-16"
      }`}
    >
      <div className="w-96 mx-auto bg-gradient-to-b from-gray-100 to-white rounded-3xl">
        <div className="px-6">
          <div className="bg-white w-full rounded-b-3xl px-4 py-5">
            <Link href="/">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>
          <div>
            <h5 className="font-bold mt-4 mb-3 pr-1 text-lg">{Number(isLogin) ? "ورود" : "ثبت نام"}</h5>
            {Number(isLogin) ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
        <div className="text-sm mt-10 bg-gray-100 rounded-xl text-center py-4 text-gray-600">
          <p>
            ورود شما به معنای پذیرش{" "}
            <Link
              href="#"
              className="text-gray-800 hover:underline hover:text-primaryBlue"
            >
              شرایط
            </Link>{" "}
            و{" "}
            <Link
              href="#"
              className="text-gray-800 hover:underline hover:text-primaryBlue"
            >
              قوانین حریم خصوصی
            </Link>{" "}
            است.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login_Register;
