// src/models/SoldVehicle.js
import { ObjectId } from "mongodb";

class SoldVehicle {
    constructor(database) {
        this.collection = database.collection("sold_vehicles");
    }

    async getSoldVehicleById(vehicleId) {
        try {
            return this.collection.findOne({ vehicle_id: vehicleId });
        } catch (err) {
            throw formatError(500, 'Error fetching Vehicle data');
        }
    }
}

export default SoldVehicle;
