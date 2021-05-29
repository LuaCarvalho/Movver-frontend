
import { iFreight, service, status } from '../../model/interfaces/iFreight';
import { iClient } from "../interfaces/iClient";
import { iDriver } from "../interfaces/iDriver";
import { iLocation } from "../interfaces/iLocation";

export class Freight implements iFreight {
  status: status;
  startDate: string;
  endDate: string;
  price: number;
  service: service;
  weight: number;
  origin: iLocation;
  destination: iLocation;
  client: iClient;
  description?: string | undefined;
  id?: number | undefined;
  driver?: iDriver | undefined;

  constructor(freight: iFreight) {
    this.status = freight.status;
    this.price = freight.price;
    this.service = freight.service;
    this.weight = freight.weight;
    this.origin = freight.origin;
    this.destination = freight.destination;
    this.description = freight.description;
    this.id = freight.id;
    this.client = freight.client;
    this.driver = freight.driver;
    this.startDate = freight.startDate;
    this.endDate = freight.endDate;
  }


  isReady(): boolean {
    return Boolean(
      this.origin &&
      this.destination &&
      this.weight
    );
  }
}

