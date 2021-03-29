import Localization from "./Localization";

export default interface Address {
  readonly resultId: string,
  readonly title: string,
  readonly district: string,
  readonly city: string,
  readonly state: string,
  readonly distance: number, 
  readonly localization: Localization
}