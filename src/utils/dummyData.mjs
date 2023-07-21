// src/data/dummyData.js
import { faker } from '@faker-js/faker';

// src/utils/dummyData.mjs
// src/utils/dummyData.mjs

const generateFakeUser = () => ({
    user_id: faker.string.uuid(),
    name: faker.person.firstName(),
    email: faker.internet.email(),
    location: faker.location.city(),
    password: faker.internet.password(),
    vehicle_info: []
    // Add other user properties as needed
});

const generateFakeDealership = () => ({
    dealership_id: faker.string.uuid(),
    name: faker.company.companyName(),
    location: faker.location.city(),
    // Add other dealership properties as needed
});

const generateFakeAdmin = () => ({
    admin_id: faker.string.uuid(),
    password: faker.internet.password(),
    // Add other admin properties as needed
});

const generateFakeDeal = (car_id) => ({
    deal_id: faker.string.uuid(),
    car_id,
    deal_info: {
        // Add additional fields for deal_info as needed
    },
});

const generateFakeCars = () => ({
    car_id: faker.string.uuid(),
    type: faker.vehicle.type(),
    name: faker.vehicle.vehicle(),
    model: faker.vehicle.model(),
    car_info: {
        // Add additional fields for car_info as needed
    },
});

const generateFakeSoldVehicle = (car_id) => ({
    vehicle_id: faker.string.uuid(),
    car_id,
    vehicle_info: {
        // Add additional fields for vehicle_info as needed
    },
});

export {
    generateFakeUser,
    generateFakeDealership,
    generateFakeAdmin,
    generateFakeDeal,
    generateFakeCars,
    generateFakeSoldVehicle,
};


