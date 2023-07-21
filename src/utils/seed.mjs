// seedData.mjs
import connectDB from '../config/db.mjs';
import { Admin, User, Dealership, Deal, Car, SoldVehicle } from "../models/index.mjs"
import { generateFakeUser, generateFakeDealership, generateFakeAdmin, generateFakeDeal, generateFakeCars } from './dummyData.mjs';

(async () => {
    try {
        const db = await connectDB();

        const adminCollection = db.collection("admin")
        const usersCount = await adminCollection.countDocuments();
        if (usersCount === 0) {
            const adminToInsert = Array.from({ length: 10 }, () => generateFakeAdmin());
            await adminCollection.insertMany(adminToInsert);
            console.log('Dummy users inserted successfully.');
        }
        // Insert dummy users
        // const usersCollection = db.collection('users');
        // const usersCount = await usersCollection.countDocuments();
        // if (usersCount === 0) {
        //     const usersToInsert = Array.from({ length: 10 }, () => generateFakeUser());
        //     await usersCollection.insertMany(usersToInsert);
        //     console.log('Dummy users inserted successfully.');
        // }

        // Insert dummy dealerships
        // const dealershipsCollection = db.collection('dealerships');
        // const dealershipsCount = await dealershipsCollection.countDocuments();
        // if (dealershipsCount === 0) {
        //     const dealershipsToInsert = Array.from({ length: 5 }, () => generateFakeDealership());
        //     await dealershipsCollection.insertMany(dealershipsToInsert);
        //     console.log('Dummy dealerships inserted successfully.');
        // }

        process.exit(0);
    } catch (err) {
        console.error('Error seeding data:', err);
        process.exit(1);
    }
})();
