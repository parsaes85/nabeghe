"use client";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function AccordionItem({ title, desc }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <div className="border-b">
      <div
        className="flex justify-between items-center cursor-pointer py-3"
        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
      >
        <p className="font-bold">{title}</p>
        <span>
          <ArrowForwardIosIcon
            fontSize="small"
            className={`${isAccordionOpen ? "-rotate-90" : "rotate-90"} transition-all `}
          />
        </span>
      </div>
      <div className={`pb-2 text-gray-600 ${!isAccordionOpen && "hidden"}`}>
        {desc}
      </div>
    </div>
  );
}

export default AccordionItem;
