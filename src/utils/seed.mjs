// seedData.mjs
import connectDB from '../config/db.mjs';
import { Admin, User, Dealership, Deal, Car, SoldVehicle } from "../models/index.mjs"
import { generateFakeUser, generateFakeDealership, generateFakeAdmin, generateFakeDeal, generateFakeCars, generateFakeSoldVehicle } from './dummyData.mjs';

(async () => {
    try {
        const db = await connectDB();

        const adminCollection = db.collection("admin")
        const adminCount = await adminCollection.countDocuments();
        if (adminCount === 0) {
            const adminToInsert = Array.from({ length: 10 }, () => generateFakeAdmin());
            await adminCollection.insertMany(adminToInsert);
            console.log('Dummy admin inserted successfully.');
        }

        const usersCollection = db.collection('users');
        const usersCount = await usersCollection.countDocuments();
        if (usersCount === 0) {
            const usersToInsert = Array.from({ length: 10 }, () => generateFakeUser());
            await usersCollection.insertMany(usersToInsert);
            console.log('Dummy users inserted successfully.');
        }


        const dealershipsCollection = db.collection('dealerships');
        const dealershipsCount = await dealershipsCollection.countDocuments();
        if (dealershipsCount === 0) {
            const dealershipsToInsert = Array.from({ length: 5 }, () => generateFakeDealership());
            await dealershipsCollection.insertMany(dealershipsToInsert);
            console.log('Dummy dealerships inserted successfully.');
        }

        // Insert dummy cars
        const carsCollection = db.collection('cars');
        const carsCount = await carsCollection.countDocuments();
        if (carsCount === 0) {
            const carsToInsert = Array.from({ length: 10 }, generateFakeCars);
            await carsCollection.insertMany(carsToInsert);
            console.log('Dummy cars inserted successfully.');
        }

        // Insert dummy deals
        const dealsCollection = db.collection('deals');
        const dealsCount = await dealsCollection.countDocuments();
        if (dealsCount === 0) {
            const cars = await carsCollection.find().toArray();
            const dealsToInsert = cars.map((car) => generateFakeDeal(car.car_id));
            await dealsCollection.insertMany(dealsToInsert);
            console.log('Dummy deals inserted successfully.');
        }

        // Insert dummy sold vehicles
        const soldVehiclesCollection = db.collection('sold_vehicles');
        const soldVehiclesCount = await soldVehiclesCollection.countDocuments();
        if (soldVehiclesCount === 0) {
            const cars = await carsCollection.find().toArray();
            const soldVehiclesToInsert = cars.map((car) => generateFakeSoldVehicle(car.car_id));
            await soldVehiclesCollection.insertMany(soldVehiclesToInsert);
            console.log('Dummy sold vehicles inserted successfully.');
        }
        process.exit(0);
    } catch (err) {
        console.error('Error seeding data:', err);
        process.exit(1);
    }
})();
