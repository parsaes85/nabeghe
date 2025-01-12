"use client";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function AccordionItem({ title, desc }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <div className="border-b">
      <div
        className="flex justify-between items-center cursor-pointer py-3 gap-2"
        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
      >
        <p className="text-sm xs:text-base font-bold">{title}</p>
        <span>
          <ArrowForwardIosIcon
            fontSize=""
            className={`${isAccordionOpen ? "-rotate-90" : "rotate-90"} transition-all xs:text-xl`}
          />
        </span>
      </div>
      <div className={`text-sm xs:text-base pb-2 text-gray-600 ${!isAccordionOpen && "hidden"}`}>
        {desc}
      </div>
    </div>
  );
}

export default AccordionItem;
