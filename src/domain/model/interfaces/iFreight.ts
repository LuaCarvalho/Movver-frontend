import { iClient } from "./iClient";
import { iDriver } from "./iDriver";
import { iLocation } from "./iLocation";

export type service = "Mudança" | "Transporte de Materiais";
export type status = "Aguardando" | "Finalizada" | "Cancelada";

export interface iFreight {
  date: Date;
  status: status;
  price: number;
  service: service;
  weight: number;
  client: iClient;
  origin: iLocation;
  destination: iLocation;
  driver?: iDriver;
  description?: string;
  id?: number;
}