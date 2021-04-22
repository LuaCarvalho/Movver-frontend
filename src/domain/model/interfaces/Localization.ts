import { directionEnum } from "../enums";

interface Region {
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number
}


export interface Localization {
  direction: directionEnum;
  region: Region;
}

