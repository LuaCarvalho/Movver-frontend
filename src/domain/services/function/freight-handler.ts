
import { Freight, status } from '../../model/interfaces/Freight';
import { Localization } from '../../model/interfaces/Localization';

function createFreigth(
  date: Date = new Date(),
  price: number = 0,
  weight: number = 0,
  service: string = "",
  origin: Localization,
  destination: Localization,
  status: status = "Aguardando",
  description: string,
  id: number,
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
  createFreigth,
  allFieldsAreFilled
}

export { FreightHandler };
