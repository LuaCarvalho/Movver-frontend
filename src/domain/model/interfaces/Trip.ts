import { Localization } from "./Localization";

export interface Trip {
  origin: Localization;
  destination: Localization;
  distance: number;
}