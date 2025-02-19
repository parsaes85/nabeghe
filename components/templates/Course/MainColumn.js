import React from "react";
import HeaderSection from "./HeaderSection";
import SeasonsSection from "./SeasonsSection";
import CommentsSection from "./CommentsSection";
import DescriptionSection from "./DescriptionSection";

function MainColumn(props) {
  return (
    <>
      <HeaderSection {...props.courseData} />
      <DescriptionSection desc={props.courseData.desc} />
      <SeasonsSection courseId={props.courseData.id} />
      <CommentsSection courseId={props.courseData.id} />
    </>
  );
}

export default MainColumn;
