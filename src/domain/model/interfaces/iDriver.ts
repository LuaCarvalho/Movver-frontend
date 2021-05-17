import { iVehicle } from "./iVehicle";

export interface iDriver {
  readonly name: string,
  readonly phoneNumber: string,
  readonly birthday: string,
  readonly password: string,
  readonly trips: number,
  readonly vehicle: iVehicle,
  readonly location: string,
  readonly available: boolean,
  readonly id?: string
}