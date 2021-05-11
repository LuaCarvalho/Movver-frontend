import { Client } from '../../model/interfaces/Client';

function createClient(name: string, phoneNumber: string, birthDate: string, password: string): Client {
  return { name, phoneNumber, birthDate, password }
}


export const ClientHandler = {
  createClient,
}