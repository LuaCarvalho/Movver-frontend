import { Vehicle } from "./Vehicle";

export interface Driver {
  id: string;
  name: string;
  trips: number;
  vehicle: Vehicle;
  location: string;
  available: boolean;
}