import React from "react";
import SeasonRow from "./SeasonRow";
import getCourseSessions from "@/funcs/getCourseSessions";

async function SeasonsSection({ courseId }) {
  const data = await getCourseSessions(courseId);
  return (
    <div className="mt-10">
      <h5 className="font-bold text-lg">سرفصلها</h5>
      <div className="mt-4 space-y-3">
        {!data.length && (
          "هنوز جلسه ای برای این دوره آپلود نشده"
        )}
        {data.map((season) => (
          <SeasonRow key={season.id} {...season} />
        ))}
      </div>
    </div>
  );
}

export default SeasonsSection;
