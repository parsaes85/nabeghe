import getCookie from "./cookies/getCookie";
import { baseUrl } from "@/data/variables";

async function getMe() {
  const res = await fetch(`${baseUrl}/users?token=${getCookie("token")}`);
  const resData = await res.json();

  return resData.length ? resData[0] : null;
}

export default getMe;
