import axios from "axios";
import Driver from "../../model/interfaces/Driver";
import { driversUrl } from "../config/api-endpoints";


export async function getDrivers(): Promise<Driver[]> {
  const response = await axios.get(driversUrl)
  const drivers = response.data;
  return drivers;
}