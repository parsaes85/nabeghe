import React from "react";
import HeaderSection from "./HeaderSection";
import DescriptionSection from "./DescriptionSection";
import CommentsSection from "./CommentsSection";

function MainColumn() {
  return (
    <>
      <HeaderSection />
      <DescriptionSection />
      <CommentsSection />
    </>
  );
}

export default MainColumn;
