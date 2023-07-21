// src/models/Dealership.js
import { ObjectId } from "mongodb";

class Dealership {
    constructor(database) {
        this.collection = database.collection("dealership");
    }

    async getDealershipByEmail(email) {
        try{
        return this.collection.findOne({ dealership_email: email });
    } catch (err) {
        throw formatError(500, 'Error fetching dealershps data');
      }
    }

    async getAllDealerships() {
        try{
        return this.collection.find({}).toArray();
    } catch (err) {
        throw formatError(500, 'Error fetching dealerships data');
      }
    }
}

export default Dealership;
