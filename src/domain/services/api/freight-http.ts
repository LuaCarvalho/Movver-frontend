import { iFreight } from "../../model/interfaces/iFreight";
import { http } from "./api";

const url = "/freights";

async function getFreights(): Promise<iFreight[]> {
  const response = await http.get(url)
  const freights = response.data;
  return freights;
}

async function save(freight: iFreight): Promise<iFreight> {
  const response = await http.post(url, freight);
  const freightData: iFreight = response.data
  return freightData;
}


export const FreightHttp = {
  getFreights,
  save
}