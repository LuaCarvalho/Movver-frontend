import { iClient } from "../../model/interfaces/iClient";
import { StorageKeys } from "../config";
import { StorageFunctions } from "../function/storage-function";
import { http } from "./api";

interface Crendentials {
  readonly user: iClient;
  readonly token: string;
}

const AUTH_URL = "/auth";
const AUTH_VALIDATION_URL = `${AUTH_URL}/token-validation`

///Salva no armazenamento (Storage) do aparelho o objeto "user" e "token" do cliente
async function setCredentials(crendentials: Crendentials): Promise<iClient> {
  const { user, token }: Crendentials = crendentials;
  http.defaults.headers["Authorization"] = `Bearer ${token}`
  await StorageFunctions.set(StorageKeys.user, user)
  await StorageFunctions.set(StorageKeys.token, token);
  return user;
}

//Retorna do armazenamento (Storage) o objeto "user" e seu "token"
async function getCredentials(): Promise<Crendentials> {
  const user = await StorageFunctions.get(StorageKeys.user) as iClient;
  const token = await StorageFunctions.get(StorageKeys.token) as string;
  return { user, token };
}

//Verifica se o usuario atual possui um token de login valido
async function isLogged(): Promise<boolean> {
  const token = await StorageFunctions.get(StorageKeys.token)
  const response = await http.post(AUTH_VALIDATION_URL, token);
  const isValid = response.data as boolean;
  if (!isValid) throw new Error("Sessão expirada. É preciso realizar o login.");
  return isValid;
}

//Realiza o primeiro login do usuario (caso ele esteja usando o aplicativo pela primeira vez)
async function signIn(phoneNumber: string, password: string): Promise<iClient> {
  const response = await http.post(AUTH_URL, { phoneNumber, password });
  const credentials: Crendentials = response.data;
  const user = setCredentials(credentials);
  return user;
}

//Realiza o login automatico (caso o usuário já tenha se logado no aplicativo atráves do dispositivo atual)
async function automaticSignIn(): Promise<iClient> {
  const isValid = await isLogged();
  if (!isValid) return Promise.reject(isValid)
  const credentials = await getCredentials();
  const user = setCredentials(credentials);
  return user;
}

async function signOut(): Promise<void> {
  await StorageFunctions.remove(StorageKeys.token);
  await StorageFunctions.remove(StorageKeys.user);
}


export const AuthHttp = {
  signIn,
  signOut,
  automaticSignIn
}