import { truckBodyworkEnum } from "../enums";
import { vehicle } from "../types";

export interface iVehicle {
  model: vehicle;
  capacity: number;
  licensePlate: string;
  truckBodyWork: truckBodyworkEnum;
  color: string;
}