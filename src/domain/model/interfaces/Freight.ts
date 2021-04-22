import { Driver } from "./Driver";

export interface Freight {
  id: number;
  driver: Driver;
  date: Date;
  status: "Finalizada" | "Cancelada";
  price: number;
  locationOrigin: string;
  locationDestination: string;
}
