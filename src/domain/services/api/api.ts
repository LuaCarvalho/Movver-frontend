import axios, { AxiosError, AxiosResponse } from "axios";

function onSuccessReponse(value: AxiosResponse): Promise<AxiosResponse> {
  return Promise.resolve(value);
}

function onErrorReponse(value: AxiosError): Promise<AxiosError> {
  return Promise.reject(value);
}

const http = axios.create({
  baseURL: "https://movver.herokuapp.com"
})

http.interceptors.response.use(onSuccessReponse, onErrorReponse);

export { http };
