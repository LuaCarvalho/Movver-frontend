import { vehicle } from "../types";

export default interface Vehicle {
  model: vehicle;
  capacity: number;
  licensePlate: string;
  truckBodyWorkOpen: boolean;
  color: string;
}