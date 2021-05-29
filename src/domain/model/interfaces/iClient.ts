export interface iClient {
  readonly name: string;
  readonly phoneNumber: string;
  readonly birthdate: string;
  readonly password: string;
  readonly id?: string;
}