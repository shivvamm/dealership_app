// src/models/SoldVehicle.js
import { ObjectId } from "mongodb";

class SoldVehicle {
    constructor(database) {
        this.collection = database.collection("sold_vehicle");
    }

    async getSoldVehicleById(vehicleId) {
        return this.collection.findOne({ vehicle_id: vehicleId });
    }
}

export default SoldVehicle;
