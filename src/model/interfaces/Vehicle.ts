import { truckBodyworkEnum } from "../types/enums";
import { vehicle } from "../types";

export default interface Vehicle {
  type: vehicle;
  capacity: number;
  licensePlate: string;
  truckBudyWork: truckBodyworkEnum;
  color: string;
}