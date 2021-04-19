import Driver from "./Driver";

export default interface DriverService {
  getDrivers(filter: string): Promise<Driver[]>;
}