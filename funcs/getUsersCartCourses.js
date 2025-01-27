import { baseUrl } from "@/data/variables"

async function getUsersCartCourses(userId) {
    const res = await fetch(`${baseUrl}/usersCartCourses?userId=${userId}`)
    const resData = await res.json()

    return resData
}

export default getUsersCartCourses