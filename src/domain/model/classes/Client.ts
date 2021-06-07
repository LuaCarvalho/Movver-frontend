import { iClient } from "../interfaces/iClient";

export class Client {
  readonly name: string;
  readonly phoneNumber: string;
  readonly password: string;
  readonly id?: string | undefined;
  
  private readonly _birthdate: Date;

  private readonly client: iClient;

  constructor(client: iClient) {
    const { id, name, phoneNumber, birthdate, password } = client;
    this.client = client;
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this._birthdate = new Date(birthdate)
  }

  toSend(): iClient {
    return this.client;
  }

  get birthdate(): string {
    return this._birthdate.toDateString()
  }
}