// src/models/Car.js
import { ObjectId } from "mongodb";

class Car {
    constructor(database) {
        this.collection = database.collection("car");
    }

    async getCarById(carId) {
        return this.collection.findOne({ car_id: carId });
    }

    async getAllCars() {
        return this.collection.find({}).toArray();
    }
}

export default Car;
