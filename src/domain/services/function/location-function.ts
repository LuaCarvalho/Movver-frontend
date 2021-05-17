import * as ExpoLocation from "expo-location";
import * as Permissions from "expo-permissions";
import { iLocation } from "../../model/interfaces/iLocation";


//Função construtora, responsavel por retornar um objeto do tipo Location
function Create(
  latitude: number,
  longitude: number): iLocation {
  return {
    latitude, longitude, latitudeDelta: 0.01, longitudeDelta: 0.01
  }
}

async function askForLocationAccess(): Promise<ExpoLocation.LocationObject> {
  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== "granted")
    throw new Error("O acesso a localização não foi permitido!");
  const actualPosition = await ExpoLocation.getCurrentPositionAsync({
    accuracy: ExpoLocation.LocationAccuracy.Highest,
  });
  return actualPosition;
}

/// Pede permissão do usuário para acessar sua geolocalição ou retorna um erro se não for concedida.
async function getCurrentLocation(): Promise<iLocation> {
  const { coords } = await askForLocationAccess()
  return { ...coords, latitudeDelta: 0.01, longitudeDelta: 0.01 };
}


const LocationFunctions = {
  Create,
  getCurrentLocation,
}

export { LocationFunctions };
