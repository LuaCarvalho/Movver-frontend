// import { Driver } from "../../model/interfaces/Driver";
// import { Freight } from "../../model/interfaces/Freight";
// import { Vehicle } from "../../model/interfaces/Vehicle";

// const licensePlate = [
//     "Rbw0A48", "Qtp0666", "Ngd9737", "Gmz0117", "Ogt0130",
//     "Kdc5475", "Aqzbd57", "Ngo4740", "Bpb2256", "Bwn3121",
//     "Omx6995", "Kef3168", "Hoj6a23", "Fks9991", "Dls5793",
//     "Ogn8770", "Pqq5190", "Hrd3054", "Ogv7001", "Ihn6259",
//     "Pre1203", "Ngb3140",
// ]

// export const vehicles: Array<Vehicle> = [
//     {
//         model: "Caminhão Truck ou Eixo duplo pesado",
//         capacity: 11000,
//         truckBodyWorkOpen: true,
//         licensePlate: "Rbw0A48",
//         color: "branco"
//     }, {
//         model: "VUC",
//         capacity: 2500,
//         truckBodyWorkOpen: true,
//         licensePlate: "Ngd9737",
//         color: "preto"
//     }, {
//         model: "Veículo utilitário",
//         capacity: 900,
//         truckBodyWorkOpen: false,
//         licensePlate: "Qtp0666",
//         color: "azul"
//     },
//     {
//         model: "Caminhão Toco ou Semi-pesado",
//         capacity: 6000,
//         truckBodyWorkOpen: true,
//         licensePlate: "Gmz0117",
//         color: "vermelho"
//     },
//     {
//         model: "Veículo utilitário",
//         capacity: 1400,
//         truckBodyWorkOpen: true,
//         licensePlate: "Ogt0130",
//         color: "preto"
//     },
//     {
//         model: "Caminhão Truck ou Eixo duplo pesado",
//         capacity: 11000,
//         truckBodyWorkOpen: true,
//         licensePlate: "Kdc5475",
//         color: "branco"
//     }

// ]
// export const drivers: Array<Driver> = [
//     {
//         id: "1",
//         name: "João Silva",
//         trips: 9,
//         vehicle: vehicles[0],
//         location: "Parque Atalaia, Aparecida de Goiânia",
//         available: true
//     }, {
//         id: "2",
//         name: "Marcos Silva",
//         trips: 3,
//         location: "Vila Heitor, Guapó",
//         vehicle: vehicles[1],
//         available: false
//     },
//     {
//         id: "3",
//         name: "Pedro Lucas",
//         trips: 22,
//         location: "Jardim Tesouro, Anápolis",
//         vehicle: vehicles[2],
//         available: true
//     },
//     {
//         id: "4",
//         name: "Lucas Sousa Pinheiro",
//         trips: 23,
//         location: "Setor Garavelo, Aparecidade de Goiânia",
//         vehicle: vehicles[3],
//         available: false
//     },
//     {
//         id: "5",
//         name: "André Monteiro",
//         trips: 13,
//         location: "Setor Bueno, Goiânia",
//         vehicle: vehicles[4],
//         available: true
//     },
//     {
//         id: "6",
//         name: "Antônio Felix",
//         trips: 10,
//         vehicle: vehicles[5],
//         location: "Setor Campinas, Goiânia",
//         available: true
//     },
// ];
// export const freights: Array<Freight> = [
//     {
//         id: 1,
//         driver: drivers[0],
//         date: new Date("02/22/2021"),
//         status: "Finalizada",
//         price: 234.32,
//         locationDestination: "Veiga Jardim",
//         locationOrigin: "Parque Atlântico"
//     },
//     {
//         id: 2,
//         driver: drivers[1],
//         date: new Date("11/21/2020"),
//         status: "Finalizada",
//         price: 423.00,
//         locationDestination: "Setor marista",
//         locationOrigin: "Park Oeste"
//     }, {
//         id: 3,
//         driver: drivers[2],
//         date: new Date("01/13/2021"),
//         status: "Finalizada",
//         price: 386.98,
//         locationDestination: "Setor marista",
//         locationOrigin: "Parque Atalaia"
//     },
// ]
