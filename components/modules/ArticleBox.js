import React from "react";
import Link from "next/link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function ArticleBox(props) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <div className="relative">
        <Link href={`/article/${props.name}`}>
          <img src={props.cover} alt="" className="w-full rounded-2xl" />
        </Link>
        <span className="absolute left-4 -bottom-3 bg-gray-100 text-gray-600 rounded-full py-2 px-2.5 hover:text-red-500 transition-all cursor-pointer">
          <FavoriteIcon fontSize="small" />
        </span>
      </div>
      <div className="space-y-3 mt-3">
        <Link
          href={`/article/${props.name}`}
          className="block font-bold hover:text-primaryBlue transition-all text-[15px]"
        >
          {props.title}
        </Link>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="/images/teacher-img.jpeg"
              alt=""
              className="rounded-full w-8"
            />
            <Link href="#" className="text-sm font-bold">
              جلال بهرامی راد
            </Link>
          </div>
          <Link
            href={`/articles?category=${props?.category?.name}`}
            className="block text-primaryBlue bg-gray-100 rounded-full px-4 py-1.5 text-sm hover:opacity-80 transition-all"
          >
            {props?.category?.title}
          </Link>
        </div>
        <div className="flex items-center justify-end gap-0.5 text-[15px]">
          <span className="text-gray-600">
            <AccessTimeIcon fontSize="small" /> زمان مطالعه:{" "}
          </span>
          <span>{props?.time?.toLocaleString("fa")} دقیقه</span>
        </div>
      </div>
    </div>
  );
}

export default ArticleBox;
