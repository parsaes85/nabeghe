import React from "react";

function HeaderSection() {
  return (
    <div>
      <img src="/images/01.jpg" alt="" className="w-full rounded-3xl" />
      <div className="bg-gray-50 rounded-3xl p-5 mx-5 text-[15px]">
        <h1 className="block font-bold hover:text-primaryBlue transition-all text-xl mt-1 mb-2">
          دوره پروژه محور React و Next
        </h1>
        <p className="text-gray-600">
          ساخت وبسایت فروشگاهی با React عنوان دوره پروژه محور react در نابغه است
          که قصد داریم در قالب این دوره react را در قالب پروژه به شما آموزش
          دهیم.
        </p>
      </div>
    </div>
  );
}

export default HeaderSection;
