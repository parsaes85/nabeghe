import { baseUrl } from "@/data/variables";

async function getCourse(courseName) {
  const res = await fetch(`${baseUrl}/courses?name=${courseName}`);
  const resData = await res.json();

  return resData;
}

export default getCourse;
