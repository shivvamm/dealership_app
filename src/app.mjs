// app.js
import express from "express";
import { Double, MongoClient, ServerApiVersion } from "mongodb";
import { connectDB } from "./config/index.mjs"
import dotenv from 'dotenv';
import { Admin, User, Dealership, Deal, Car, SoldVehicle } from "./models/index.mjs"


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;



const db = await connectDB();
// Attach database object to the route handlers
app.use((req, res, next) => {
    req.database = db;
    next();
});

// const adminModel = new Admin(db);
// const userModel = new User(db);
// const dealershipModel = new Dealership(db);
// const dealModel = new Deal(db);
// const carModel = new Car(db);
// const soldVehicleModel = new SoldVehicle(db);

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


