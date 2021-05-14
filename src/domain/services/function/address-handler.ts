import axios from "axios";
import { Localization } from "domain/model/interfaces/Localization";
import { Address } from "../../model/interfaces/Address";
import { TomTomSearch } from "../../model/interfaces/TomTomSearch";
import { tomKey } from "../config";

function Create(
  resultId: string,
  title: string,
  district: string,
  city: string,
  state: string,
  distance: number,
  localization: Localization): Address {
  return { resultId, title, district, city, state, distance, localization }
}

async function getAddress(search: string, localization: Localization): Promise<TomTomSearch> {
  const query = encodeURIComponent(search);
  const BASE_URL = "https://api.tomtom.com/search/2/search/";
  const APROX_LAT = localization.region.latitude;
  const APROX_LON = localization.region.longitude;
  const LIMIT = 5;
  const URL = `${BASE_URL}${query}.json?&countrySet=br&lat=${APROX_LAT}&lon=${APROX_LON}&language=pt-br&limit=${LIMIT}&key=${tomKey}`;
  const res = await axios.get(URL);
  const data: TomTomSearch = res.data;
  return data;
}

const AddressHandler = {
  Create,
  getAddress
}

export { AddressHandler };
