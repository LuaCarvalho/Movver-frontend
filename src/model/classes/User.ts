import iUser from "../interfaces/iUser"

export default class User implements iUser {
  constructor(
    public readonly name: string,
    public readonly phone: number,
    public readonly password: string,
    public readonly birthday: string,
    public readonly cpf: string
  ) { };
}