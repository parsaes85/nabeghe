import { baseUrl } from "@/data/variables";

async function getCourses(params = "") {
  const res = await fetch(`${baseUrl}/courses${params}`);
  const resData = await res.json();

  return resData;
}

export default getCourses;
