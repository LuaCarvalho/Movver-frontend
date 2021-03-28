import { directionEnum } from "../types/enums";

interface Region {
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number
}


export default interface Localization {
  direction: directionEnum;
  region: Region;
}

