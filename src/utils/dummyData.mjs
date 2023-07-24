// src/data/dummyData.js
import { faker } from '@faker-js/faker';



const generateFakeUser = () => ({
    user_id: faker.string.uuid(),
    name: faker.person.firstName(),
    email: faker.internet.email(),
    location: faker.location.city(),
    password: faker.internet.password(),
    vehicle_info: [],
    user_info: {
        "gfdgsdf": "hfhdfg"
    }

});

const generateFakeDealership = () => ({
    dealership_email: faker.internet.email(),
    dealership_id: faker.string.uuid(),
    name: faker.company.bs(),
    location: faker.location.city(),
    password: faker.internet.password(),
    dealership_info:{"hsghfdgh":"fdghsfhfgh"},
    cars: [faker.string.uuid()],
    delas: [faker.string.uuid()],
    sold_vehicles: [faker.string.uuid()]

});

const generateFakeAdmin = () => ({
    admin_id: faker.string.uuid(),
    password: faker.internet.password(),

});

const generateFakeDeal = (car_id) => ({
    deal_id: faker.string.uuid(),
    car_id: faker.string.uuid(),
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
        "dgdf": "dgdargdfgdg",
        "sdgdfgdgh": "dsgdfhgdghd"
    },
});

const generateFakeSoldVehicle = (car_id) => ({
    vehicle_id: faker.string.uuid(),
    car_id,
    vehicle_info: {
        "dgdf": "dgdargdfgdg",
        "sdgdfgdgh": "dsgdfhgdghd"
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


