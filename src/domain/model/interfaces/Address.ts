import Localization from "./Localization";

export default interface Address {
  readonly id: string,
  readonly title: string,
  readonly district: string,
  readonly city: string,
  readonly state: string,
  readonly localization: Localization
}