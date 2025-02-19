import { baseUrl } from "@/data/variables"

async function getCourseSessions(courseId) {
    const res = await fetch(`${baseUrl}/coursesSessions?courseId=${courseId}`);
    const resData = await res.json();
  
    return resData;
}

export default getCourseSessions