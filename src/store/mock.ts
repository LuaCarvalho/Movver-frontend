type vehicle =
    "VUC" | "Caminhão Toco" | "Truck" | "Bitruck" | "Carreta simples" | "Carreta LS" | "Bitrem";

export interface Freight {
    id: number;
    driver: {
        name: string;
        trips: number;
        vehicle: vehicle;
        available: boolean;
    };
    date: Date;
    status: "Finalizada" | "Cancelada";
    price: number;
    locationOrigin: string;
    locationDestination: string;
}

const freights: Array<Freight> = [
    {
        id: 1,
        driver: {
            name: "João",
            trips: 9,
            vehicle: "Carreta simples",
            available: true
        },
        date: new Date("02/22/2021"),
        status: "Finalizada",
        price: 234.32,
        locationDestination: "Veiga Jardim",
        locationOrigin: "Parque Atlântico"
    },
    {
        id: 2,
        driver: {
            name: "Marcos",
            trips: 13.23,
            vehicle: "Caminhão Toco",
            available: false
        },
        date: new Date("11/21/2020"),
        status: "Finalizada",
        price: 423.00,
        locationDestination: "Setor marista",
        locationOrigin: "Park Oeste"
    }, {
        id: 3,
        driver: {
            name: "Pedro",
            trips: 23.12,
            vehicle: "Carreta LS",
            available: true
        },
        date: new Date("01/13/2021"),
        status: "Finalizada",
        price: 386.98,
        locationDestination: "Setor marista",
        locationOrigin: "Parque Atalaia"
    },
]


export default freights;