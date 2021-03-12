const query=require("sinesp-api")

async function getVehicle(plate) {
    const result=await query.search(plate)
    console.log(result)
}

const licensePlate = [
    "Rbw0A48", "Qtp0666", "Ngd9737", "Gmz0117", "Ogt0130",
    "Kdc5475", "Aqzbd57", "Ngo4740", "Bpb2256", "Bwn3121",
    "Omx6995", "Kef3168", "Hoj6a23", "Fks9991", "Dls5793",
    "Ogn8770", "Pqq5190", "Hrd3054", "Ogv7001", "Ihn6259",
    "Pre1203", "Ngb3140",
]

getVehicle(licensePlate[3])
// getVehicle(licensePlate[1])
// getVehicle(licensePlate[2])
// getVehicle(licensePlate[3])
// getVehicle(licensePlate[4])
// getVehicle(licensePlate[5])
