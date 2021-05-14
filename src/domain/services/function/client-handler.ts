import { User } from '../../model/interfaces/User';

function Create(name: string, phoneNumber: string, birthday: string, password: string): User {
  return { name, phoneNumber, birthday, password }
}


const ClientHandler = {
  Create,
}

export { ClientHandler };
