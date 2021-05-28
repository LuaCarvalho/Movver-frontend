import { truckBodyworkEnum } from "../../../model/enums";
import { iDriver } from "../../../model/interfaces/iDriver";

type driverFilterType = (filter: driverFilterType) => driverFilterType;

//Objeto que implementa um filtro para selecionar os motoristas que possuam veiculos com certo tipo de carroceria
function truckBodyWorkFilter(truckBodyWork: string, drivers: iDriver[]): iDriver[] {
  return drivers.filter(driver => {
    if (truckBodyWork === truckBodyworkEnum.ANY) return true;
    return driver.vehicle.truckBodyWork === truckBodyWork;
  })
}

//Objeto que implementa um filtro para selecionar os motoristas que possuam veiculos com certo capacidade
function vehicleCapacityFilter(capacity: number, drivers: iDriver[]): iDriver[] {
  return drivers.filter(driver => driver.vehicle.capacity >= capacity);
}

export const DriverFunction = {
  truckBodyWorkFilter,
  vehicleCapacityFilter
}