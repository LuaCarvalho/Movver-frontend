import { Localization } from "./Localization";

export interface Address {
  readonly resultId: string,
  readonly title: string,
  readonly district: string,
  readonly city: string,
  readonly state: string,
  readonly distance: number, 
  readonly localization: Localization
}