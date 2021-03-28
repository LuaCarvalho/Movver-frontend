import Localization from "domain/model/interfaces/Localization";
import Address from "../../model/interfaces/Address"

export function Address_FC(
  id: string,
  title: string,
  district: string,
  city: string,
  state: string,
  localization: Localization): Address {
  return { id, title, district, city, state, localization }
}