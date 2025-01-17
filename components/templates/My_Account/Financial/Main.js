import React from "react";

function Main() {
  return (
    <div className="mb-10">
      <h5 className="font-bold text-lg mb-6">تاریخچه تراکنشها</h5>

      <div className="relative overflow-x-auto">
        <table className="w-full text-right">
          <thead>
            <tr className="text-gray-600 text-sm border-b [&>*]:py-5 [&>*]:px-3 whitespace-nowrap">
              <th className="pr-4">شماره پیگیری</th>
              <th>وضعیت</th>
              <th>شرح تراکنش</th>
              <th>مبلغ</th>
              <th>تاریخ ایجاد</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-gray-100 text-sm font-bold [&>*]:py-5 [&>*]:px-3 whitespace-nowrap ">
              <td className="pr-4">۱۰۷۹</td>
              <td>
                <li className="list-disc text-green-500">موفق</li>
              </td>
              <td>
                <p className="text-gray-600">خرید عضویت ویژه</p>
                <p>سه ماهه</p>
              </td>
              <td>
                <span>۱,۰۷۹,۰۰۰</span>
                <span className="text-gray-600 font-medium"> تومان</span>
              </td>
              <td className="text-gray-600 font-medium">۲۰ اردیبهشت ۱۴۰۲</td>
            </tr>
            <tr className="odd:bg-gray-100 text-sm font-bold [&>*]:py-5 ">
              <td className="pr-4">۱۰۷۹</td>
              <td>
                <li className="list-disc text-green-500">موفق</li>
              </td>
              <td>
                <p className="text-gray-600">خرید عضویت ویژه</p>
                <p>سه ماهه</p>
              </td>
              <td>
                <span>۱,۰۷۹,۰۰۰</span>
                <span className="text-gray-600 font-medium"> تومان</span>
              </td>
              <td className="text-gray-600 font-medium">۲۰ اردیبهشت ۱۴۰۲</td>
            </tr>
            <tr className="odd:bg-gray-100 text-sm font-bold [&>*]:py-5 ">
              <td className="pr-4">۱۰۷۹</td>
              <td>
                <li className="list-disc text-green-500">موفق</li>
              </td>
              <td>
                <p className="text-gray-600">خرید عضویت ویژه</p>
                <p>سه ماهه</p>
              </td>
              <td>
                <span>۱,۰۷۹,۰۰۰</span>
                <span className="text-gray-600 font-medium"> تومان</span>
              </td>
              <td className="text-gray-600 font-medium">۲۰ اردیبهشت ۱۴۰۲</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Main;
