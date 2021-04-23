import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { directionEnum } from "../../model/enums";
import { Localization } from "../../model/interfaces/Localization";



//Função construtora, responsavel por retornar um objeto do tipo Localization
export function Locatization_CF(
  direction: directionEnum,
  latitude: number,
  longitude: number): Localization {
  return {
    region: { latitude, longitude, latitudeDelta: 0.01, longitudeDelta: 0.01 },
    direction,
  }
}

/** Pede permissão do usuário para acessar sua geolocalição ou retorna um erro se não for concedida.
 ** Recebe um ENUM e, como base nele, irá construir um objeto do tipo "Localization"  */
export async function getCurrentLocation(direction: directionEnum): Promise<Localization> {
  //Pede permissão para acessar a localizão
  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== "granted") throw new Error("O acesso a localização não foi permitido!");
  const { coords } = await Location.getCurrentPositionAsync({
    accuracy: Location.LocationAccuracy.Highest,
  });
  const localization = Locatization_CF(direction, coords.latitude, coords.longitude)
  return localization;
}