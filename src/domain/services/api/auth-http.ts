import { User } from "../../model/interfaces/User";
import { StorageKeys } from "../config";
import { StorageHandler } from "../function/storage-handler";
import { http } from "./api";

interface Crendentials {
  readonly user: User;
  readonly token: string;
}

const AUTH_URL = "/auth";
const AUTH_VALIDATION_URL = `${AUTH_URL}/token-validation`

///Salva no armazenamento (Storage) do aparelho o objeto "user" e "token" do cliente
async function setUserAndToken(crendentials: Crendentials): Promise<void> {
  await StorageHandler.set(StorageKeys.user, crendentials.user)
  await StorageHandler.set(StorageKeys.token, crendentials.token);
}

//Retorna do armazenamento (Storage) o objeto "user" e seu "token"
async function getUserAndToken(): Promise<Crendentials> {
  const user = await StorageHandler.get(StorageKeys.user) as User;
  const token = await StorageHandler.get(StorageKeys.token) as string;
  return { user, token };
}

//Realiza o primeiro login do usuario (caso ele esteja usando o aplicativo pela primeira vez)
async function signIn(phoneNumber: string, password: string): Promise<User> {
  const response = await http.post(AUTH_URL, { phoneNumber, password })
  const auth: Crendentials = response.data
  setUserAndToken(auth)
  if (auth.token) http.defaults.headers["Authorization"] = `Bearer ${auth.token}`
  return auth.user;
}


//Verifica se o usuario atual possui um token de login valido
async function isLogged(): Promise<boolean> {
  const token = await StorageHandler.get(StorageKeys.token)
  const response = await http.post(AUTH_VALIDATION_URL, token);
  const isValid = response.data as boolean;
  if (!isValid) throw new Error("Sessão expirada. É preciso realizar o login.");
  return isValid;
}

//Realiza o login automatico (caso o usuário já tenha se logado no aplicativo atráves do dispositivo atual)
async function automaticSignIn(): Promise<User> {
  const isValid = await isLogged();
  if (!isValid) return Promise.reject(isValid)
  const auth: Crendentials = await getUserAndToken()
  setUserAndToken(auth)
  return auth.user;
}

async function signOut(): Promise<void> {
  await StorageHandler.remove(StorageKeys.token);
  await StorageHandler.remove(StorageKeys.user);
}





export const AuthHttp = {
  signIn,
  signOut,
  automaticSignIn
}