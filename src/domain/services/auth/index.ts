import User from "../../model/interfaces/User"

export function Login_CF(phone: string, password: string) {
  return { phone, password }
}

export const Register_CF = (
  name: string, phone: string, birthday: string, cpf: string, password: string
): User => ({ name, phone, birthday, cpf, password })
