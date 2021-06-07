
import { freightService, freightStatus, iFreight } from '../../model/interfaces/iFreight';
import { FreightFunction } from "../../services/function/freight-function";
import { iClient } from "../interfaces/iClient";
import { iDriver } from "../interfaces/iDriver";
import { iLocation } from "../interfaces/iLocation";

export class Freight {
  origin: iLocation;
  destination: iLocation;
  client: iClient;

  id: number | null;
  driver: iDriver | undefined;
  description: string | undefined;

  private _startDate: Date | undefined;
  private _endDate: Date | undefined;
  private _distance: number;
  private _weight: number;
  private _service: freightService;
  private _price: number;
  private _status: freightStatus;

  private readonly freight: iFreight;

  constructor(freight: iFreight) {
    this.freight = freight;
    const {
      id,
      weight,
      client,
      destination,
      distance,
      origin,
      service,
      startDate,
      description,
      driver,
      endDate,
      price = 50,
      status = "UNCONFIRMED"
    } = freight;

    this.origin = origin;
    this.destination = destination;
    this.client = client;
    this._distance = distance;
    this.id = id || null;
    this.driver = driver;
    this.description = description;
    this._startDate = startDate ? new Date(startDate) : undefined;
    this._endDate = endDate ? new Date(endDate) : undefined;
    this._price = price;
    this._weight = weight;
    this._service = service;
    this._status = status
  }

  toSend(): iFreight {
    return this.freight;
  }

  isReady(): boolean {
    return Boolean(
      this.origin &&
      this.destination &&
      this._weight &&
      this._service
    );
  }

  get status(): string {
    return FreightFunction.getStatusName(this._status)
  }
  get service(): string {
    return FreightFunction.getServiceName(this._service)
  }

  get price(): string {
    return this._price.toFixed(2)
  }

  get weight(): string {
    return this._weight.toFixed(2)
  }

  get startDate(): string | undefined {
    return this._startDate?.toDateString()
  }

  get endDate(): string | undefined {
    return this._endDate?.toDateString()
  }

  get distance(): string {
    return this._distance > 1 ? `${this._distance.toFixed(2)} km` : `${this._distance * 1000} metros`;
  }

}

