import axios from "axios";
import Driver from "../../model/interfaces/Driver";
import DriverService from "../../model/interfaces/DriverService";
import { driversUrl } from "../config/api-endpoints";

export async function getDrivers(filter: string): Promise<Driver[]> {
  const response = await axios.get(driversUrl)
  const drivers = response.data;
  return drivers;
}


const driverService: DriverService = {
  getDrivers,
}


export default driverService;