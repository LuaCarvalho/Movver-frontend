import { iFreight } from "../../model/interfaces/iFreight";
import { http } from "./api";

const url = "/freights"

export async function getFreights(filter?: string): Promise<iFreight[]> {
  const response = await http.get(url)
  const freights = response.data;
  return freights;
}



export const FreightHttp = {
  getFreights,
}