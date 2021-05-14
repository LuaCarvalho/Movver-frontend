
import { Freight, service, status } from '../../model/interfaces/Freight';
import { Localization } from '../../model/interfaces/Localization';

function Create(
  date: Date = new Date(),
  price: number = 0,
  weight: number = 0,
  service: service,
  origin: Localization,
  destination: Localization,
  status: status = "Aguardando",
  description: string,
  id?: number,
): Freight {
  return {
    id, weight, service, date, status, price, description, origin, destination
  }
}

function allFieldsAreFilled(freight: Freight): boolean {
  return (
    Boolean(freight.service) &&
    Boolean(freight.weight) &&
    Boolean(freight.destination) &&
    Boolean(freight.origin)
  )
}



const FreightHandler = {
  Create,
  allFieldsAreFilled
}

export { FreightHandler };
