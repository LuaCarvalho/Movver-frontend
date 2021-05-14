import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

function formatPhoneNumber(phoneNumber: string): string {
  let v = phoneNumber;
  v = v.replace(/\D/g, "");
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
  v = v.replace(/(\d)(\d{4})$/, "$1-$2");
  return v;
}

async function askForLocationAccess(): Promise<{ latitude: number, longitude: number }> {
  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== "granted") throw new Error("O acesso a localização não foi permitido!");
  const { coords } = await Location.getCurrentPositionAsync({
    accuracy: Location.LocationAccuracy.Highest,
  });
  return coords;
}

function formatDate(date: string) {
  const value = new Date(date);
  return `${value.getDay()}/${value.getMonth()}/${value.getFullYear()}`
}

export function numberSeparador(bigNumber: number): string {
  const value = String(bigNumber).split("").reverse()
  const newValue = value.map((val, index) => {
    if ((index % 3) == 0 && index != 0) return val + ".";
    return val
  })
  return newValue.reverse().join("")
}

export function getPercentage(value: number, perc: number) {
  return value / 100 * perc;
}

export function getStateAbrev(state: string | undefined): string {
  if (!state) return "";
  if (state === "Acre") return "AC"
  if (state === "Alagoas") return "AL"
  if (state === "Amapá") return "AP"
  if (state === "Amazonas") return "AM"
  if (state === "Bahia") return "BA"
  if (state === "Ceará") return "CE"
  if (state === "Distrito Federal") return "DF"
  if (state === "Espírito Santo") return "ES"
  if (state === "Goiás") return "GO"
  if (state === "Maranhão") return "MA"
  if (state === "Mato Grosso") return "MT"
  if (state === "Mato Grosso do Sul") return "MS"
  if (state === "Minas Gerais") return "MG"
  if (state === "Pará") return "PA"
  if (state === "Paraíba") return "PB"
  if (state === "Paraná") return "PR"
  if (state === "Pernambuco") return "PE"
  if (state === "Piauí") return "PI"
  if (state === "Rio de Janeiro") return "RJ"
  if (state === "Rio Grande do Norte") return "RN"
  if (state === "Rio Grande do Sul") return "RS"
  if (state === "Rondônia") return "RO"
  if (state === "Roraima") return "RR"
  if (state === "Santa Catarina") return "SC"
  if (state === "São Paulo") return "SP"
  if (state === "Sergipe") return "SE"
  if (state === "Tocantins") return "TO"
  return "";
}

export const Utils = {
  formatPhoneNumber,
  formatDate,
  numberSeparador,
  getPercentage,
  getStateAbrev,
}