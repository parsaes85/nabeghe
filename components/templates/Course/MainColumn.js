import React from "react";
import HeaderSection from "./HeaderSection";
import SeasonsSection from "./SeasonsSection";
import CommentsSection from "./CommentsSection";
import DescriptionSection from "./DescriptionSection";

function MainColumn() {
  return (
    <>
      <HeaderSection />
      <DescriptionSection />
      <SeasonsSection />
      <CommentsSection />
    </>
  );
}

export default MainColumn;
