
import { iFreight, service, status } from '../../model/interfaces/iFreight';
import { iLocation } from "../interfaces/iLocation";

export class Freight implements iFreight {
  date: Date;
  status: status;
  price: number;
  service: service;
  weight: number;
  origin: iLocation;
  destination: iLocation;
  description?: string | undefined;
  id?: number | undefined;

  constructor(freight: iFreight) {
    this.date = freight.date;
    this.status = freight.status;
    this.price = freight.price;
    this.service = freight.service;
    this.weight = freight.weight;
    this.origin = freight.origin;
    this.destination = freight.destination;
    this.description = freight.description;
    this.id = freight.id;
  }


  isReady(): boolean {
    return Boolean(
      this.origin &&
      this.destination &&
      this.weight
    );
  }
}

