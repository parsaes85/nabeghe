import React from "react";

function Form() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white rounded-2xl p-5 pt-0 w-full sm:w-[420px]">
      <div className="bg-white rounded-b-3xl px-6 py-4">
        <h5 className="font-bold text-[17px]">فرم تماس با ما</h5>
      </div>
      <form className="space-y-3 mt-4">
        <div>
          <label htmlFor="fullName" className="text-gray-500 text-sm">
            نام و نام خانوادگی
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full border bg-gray-100 rounded-xl outline-none p-2 mt-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-gray-500 text-sm">
            ایمیل
          </label>
          <input
            type="text"
            id="email"
            className="w-full border bg-gray-100 rounded-xl outline-none p-2 mt-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-gray-500 text-sm">
            ایمیل
          </label>
          <textarea
            id="email"
            rows={3}
            className="w-full border bg-gray-100 rounded-xl outline-none p-2 mt-2"
          />
        </div>
        <div>
          <button className="text-white bg-primaryBlue px-8 py-2 rounded-full hover:opacity-80 transition-all mr-auto block">
            ارسال پیام
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
