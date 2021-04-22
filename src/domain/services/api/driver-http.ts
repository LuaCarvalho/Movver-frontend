import axios from "axios";
import { Driver } from "../../model/interfaces/Driver";
import { driversUrl } from "../config/api-endpoints";
import { DriverHttp } from "./interfaces/DriverHttp";


export async function getDrivers(filter: string): Promise<Driver[]> {
  const response = await axios.get(driversUrl)
  const drivers = response.data;
  return drivers;
}


const driverHttp: DriverHttp = {
  getDrivers,
}


export default driverHttp;