// app.js
import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import 'dotenv/config';
import { Admin, User, Dealership, Deal, Car, SoldVehicle } from "./models/index.mjs"
const app = express();
const port = process.env.PORT || 3000;

const uri = "mongodb+srv://admin:1234@cluster0.26qsxtx.mongodb.net";
const dbName = "car_dealership_db";



const client = new MongoClient(uri,  {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);

const connectToMongoDB = async () => {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const database = client.db(dbName); // Replace "dbname" with your database name

        // Attach database object to the route handlers
        app.use((req, res, next) => {
            req.database = database;
            next();
        });

        const adminModel = new Admin(database);
        const userModel = new User(database);
        const dealershipModel = new Dealership(database);
        const dealModel = new Deal(database);
        const carModel = new Car(database);
        const soldVehicleModel = new SoldVehicle(database);

        app.use(express.json());

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
    connectToMongoDB();
};

