import { MongoClient, ServerApiVersion } from "mongodb";
import { Admin, User, Dealership, Deal, Car, SoldVehicle } from "../models/index.mjs"

import dotenv from 'dotenv';
dotenv.config();


const uri = process.env.MONGODB_URI;
const dbName = "car_dealership_db";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);

const connectDB = async () => {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const database = await client.db(dbName);
        const adminModel = new Admin(database);
        const userModel = new User(database);
        const dealershipModel = new Dealership(database);
        const dealModel = new Deal(database);
        const carModel = new Car(database);
        const soldVehicleModel = new SoldVehicle(database);
        return database;
    } catch (err) {
        console.error('Error connecting to the database', err);
        process.exit(1);
    }
};

export default connectDB;

