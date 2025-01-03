import React from "react";
import SeasonRow from "./SeasonRow";

function SeasonsSection() {
  return (
    <div className="mt-10">
      <h5 className="font-bold text-lg">سرفصلها</h5>
      <div className="mt-4 space-y-3">
        <SeasonRow />
        <SeasonRow />
      </div>
    </div>
  );
}

export default SeasonsSection;
