import { User } from "./User";
import { Vehicle } from "./Vehicle";

export interface Driver extends User {
  id: string;
  trips: number;
  vehicle: Vehicle;
  location: string;
  available: boolean;
}