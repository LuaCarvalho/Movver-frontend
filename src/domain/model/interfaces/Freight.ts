import Driver from "./Driver";

export default interface Freight {
  id: number;
  driver: Driver;
  date: Date;
  status: "Finalizada" | "Cancelada";
  price: number;
  locationOrigin: string;
  locationDestination: string;
}
