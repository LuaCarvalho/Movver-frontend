type vehicle = 
"VUC" | "Caminhão Toco" | "Truck" | "Bitruck" | "Carreta simples" | "Carreta LS" | "Bitrem";


const freights: Array<{
    id: number;
    driver: {
        name: string;
        trips: number;
        vehicle: vehicle;
        available: boolean;
    };
    price: number;
    locationOrigin: string;
    locationDestiny: string;
}> = [
        {
            id: 1,
            driver: { name: "João", trips: 9, vehicle: "Carreta simples", available: true },
            price: 234,
            locationDestiny: "Veiga Jardim",
            locationOrigin: "Parque Atlântico"
        },
        {
            id: 2,
            driver: { name: "Marcos", trips: 13, vehicle: "Caminhão Toco", available: false },
            price: 423,
            locationDestiny: "Setor marista",
            locationOrigin: "Park Oeste"
        }, {
            id: 3,
            driver: { name: "Pedro", trips: 23, vehicle: "Carreta LS", available: true },
            price: 386,
            locationDestiny: "Setor marista",
            locationOrigin: "Parque Atalaia"
        },
    ]


export default freights;