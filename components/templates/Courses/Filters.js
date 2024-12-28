import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Filters() {
  return (
    <div className="sticky top-24">
      <div>
        <h4 className="font-bold mb-2.5">جستجوی دوره</h4>
        <div className="relative">
          <input
            type="text"
            placeholder="عنوان دوره..."
            className="bg-gray-100 rounded-lg px-3 py-2 w-full"
          />
          <span className="absolute left-3 top-2 text-gray-500">
            <SearchIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Filters;
