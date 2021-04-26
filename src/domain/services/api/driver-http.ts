import { Driver } from "../../model/interfaces/Driver";
import { http } from "./api";

const url = "/drivers"

export async function getDrivers(filter?: string): Promise<Driver[]> {
  const response = await http.get(url)
  const drivers = response.data;
  return drivers;
}



export const DriverHttp = {
  getDrivers,
}