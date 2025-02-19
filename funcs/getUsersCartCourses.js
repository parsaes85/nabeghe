import { baseUrl } from "@/data/variables";

async function getUsersCartCourses(userToken) {
  const res = await fetch(`${baseUrl}/usersCartCourses?userToken=${userToken}`);
  const resData = await res.json();

  return resData;
}

export default getUsersCartCourses;
