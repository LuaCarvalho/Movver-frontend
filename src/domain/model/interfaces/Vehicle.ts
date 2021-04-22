import { vehicle } from "../types";

export interface Vehicle {
  model: vehicle;
  capacity: number;
  licensePlate: string;
  truckBodyWorkOpen: boolean;
  color: string;
}