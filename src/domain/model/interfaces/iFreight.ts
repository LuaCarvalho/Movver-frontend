import { iLocation } from "./iLocation";

export type service = "Mudança" | "Transporte de Materiais";
export type status = "Aguardando" | "Finalizada" | "Cancelada";

export interface iFreight {
  date: Date;
  status: status;
  price: number;
  service: service;
  weight: number;
  origin: iLocation;
  destination: iLocation;
  description?: string;
  id?: number;
}