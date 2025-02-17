import { baseUrl } from "@/data/variables";

async function getCourseComments(courseId) {
  const res = await fetch(`${baseUrl}/coursesComments?courseId=${courseId}`);
  const resData = await res.json();

  return resData;
}

export default getCourseComments;
