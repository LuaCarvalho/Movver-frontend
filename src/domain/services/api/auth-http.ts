import { User } from "../../model/interfaces/User"
import { http } from "./api"

type signIn = {
  user: User,
  token: string
}

const url = "/auth"

async function signIn(phoneNumber: string, password: string): Promise<signIn> {
  const response = await http.post(url, { phoneNumber, password })
  const signIn: signIn = response.data
  if (signIn.token) http.defaults.headers["Authorization"] = `Bearer ${signIn.token}`
  return signIn;
}

function signOut() {

}



export const AuthHttp = {
  signIn,
  signOut
}