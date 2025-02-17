import React from "react";

function DescriptionSection({ desc }) {
  return (
    <div className="mt-10">
      <h5 className="font-bold text-lg">معرفی دوره</h5>
      <div className="mt-4">
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

export default DescriptionSection;
