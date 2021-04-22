import { Driver } from "../../../model/interfaces/Driver";

export interface DriverHttp {
  getDrivers(filter: string): Promise<Driver[]>;
}