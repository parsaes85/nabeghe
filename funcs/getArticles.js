import { baseUrl } from "@/data/variables";

async function getArticles(params) {
  const res = await fetch(`${baseUrl}/articles${params}`);
  const resData = await res.json();

  return resData;
}

export default getArticles;
