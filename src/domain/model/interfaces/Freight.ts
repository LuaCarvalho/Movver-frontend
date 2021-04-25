
import { Localization } from './Localization';

export type status = "Aguardando" | "Finalizada" | "Cancelada";
export interface Freight {
  id?: number;
  date: Date;
  status: status;
  price: number;
  service: string;
  weight: number;
  origin: Localization;
  destination: Localization;
  description?: string;
}
