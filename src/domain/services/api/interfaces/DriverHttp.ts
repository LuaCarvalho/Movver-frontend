import Driver from "../../../model/interfaces/Driver";

export default interface DriverHttp {
  getDrivers(filter: string): Promise<Driver[]>;
}