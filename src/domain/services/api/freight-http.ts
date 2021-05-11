import { Freight } from "../../model/interfaces/Freight";
import { http } from "./api";

const url = "/freights"

export async function getFreights(filter?: string): Promise<Freight[]> {
  const response = await http.get(url)
  const freights = response.data;
  return freights;
}



export const FreightHttp = {
  getFreights,
}