import { baseUrl } from "@/data/variables"

async function canRegister(email) {
  try {
    const res = await fetch(`${baseUrl}/users?email=${email}`)
    const data = await res.json()

    return data.length ? false : true
  } catch (error) {
    return false
  }
}

export default canRegister