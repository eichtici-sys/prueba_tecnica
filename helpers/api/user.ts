import { User } from "@prisma/client"
import axios from "axios"

export type userBody = Pick<User, "name" | "lastname">

export const createUser = async (data: userBody) => {
  const res = await axios.post("/api/user", data)
  return res.data
}

export const getAllUsers = async () => {
  const res = await axios.get(`/api/user`)
  return res.data
}
