
import { Localization } from './Localization';

export type service = "Mudança" | "Transporte de Materiais";
export type status = "Aguardando" | "Finalizada" | "Cancelada";
export interface Freight {
  id?: number;
  date: Date;
  status: status;
  price: number;
  service: service;
  weight: number;
  origin: Localization;
  destination: Localization;
  description?: string;
}
