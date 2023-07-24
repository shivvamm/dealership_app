// src/models/Car.js
import { ObjectId } from "mongodb";

class Car {
    constructor(database) {
        this.collection = database.collection("cars");
    }

    async getCarById(carId) {
        try {
            return this.collection.findOne({ car_id: carId });
        } catch (err) {
            throw formatError(500, 'Error fetching car data');
        }
    }

    async getAllCars() {
        try {
            return this.collection.find({}).toArray();
        } catch (err) {
            throw formatError(500, 'Error fetching car data');
        }
    }
}

export default Car;
