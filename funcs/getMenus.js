import { baseUrl } from "@/data/variables"

async function getMenus() {
    const res = await fetch(`${baseUrl}/menus`)
    const resData = await res.json()

    return resData
}

export default getMenus