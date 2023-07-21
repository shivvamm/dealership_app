// src/models/Dealership.js
import { ObjectId } from "mongodb";

class Dealership {
    constructor(database) {
        this.collection = database.collection("dealership");
    }

    async getDealershipByEmail(email) {
        return this.collection.findOne({ dealership_email: email });
    }

    async getAllDealerships() {
        return this.collection.find({}).toArray();
    }
}

export default Dealership;
