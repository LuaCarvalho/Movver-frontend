import Localization from "domain/model/interfaces/Localization";
import Address from "../../model/interfaces/Address"

export function Address_FC(
  resultId: string,
  title: string,
  district: string,
  city: string,
  state: string,
  distance: number,
  localization: Localization): Address {
  return { resultId, title, district, city, state, distance, localization }
}