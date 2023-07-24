// userController.mjs
import { ObjectId } from "mongodb";
import { formatError } from '../utils/error.mjs';
// Route handler to get all cars owned by a user
const viewVehiclesOwnedByUser = async (req, res) => {
  try {
    const userEmail = req.params.userEmail;
    const user = await req.database.collection("users").findOne({ user_email: userEmail });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const ownedVehicleIds = user.vehicle_info;
    const ownedVehicles = await req.database
      .collection("sold_vehicles")
      .find({ vehicle_id: { $in: ownedVehicleIds } })
      .toArray();

    res.json(ownedVehicles);
  } catch (error) {
    console.error("Error fetching owned vehicles:", error);
    res.status(500).json({ error: "Failed to fetch owned vehicles" });
  }
};

// Route handler to view all deals on a certain car
const viewAllDealsOnCar = async (req, res) => {
  try {
    const carId = req.params.carId;
    const deals = await req.database.collection("deals").find({ car_id: carId }).toArray();

    res.json(deals);
  } catch (error) {
    console.error("Error fetching deals:", error);
    res.status(500).json({ error: "Failed to fetch deals" });
  }
};

// Route handler to view all dealerships with a certain car
const viewDealershipsWithCertainCar = async (req, res) => {
  try {
    const carId = req.params.carId;
    const dealerships = await req.database.collection("dealerships").find({ cars: carId }).toArray();

    res.json(dealerships);
  } catch (error) {
    console.error("Error fetching dealerships:", error);
    res.status(500).json({ error: "Failed to fetch dealerships" });
  }
};

// Route handler to view all cars in a dealership
const viewAllCarsInDealership = async (req, res) => {
  try {
    const dealershipId = req.params.dealershipId;
    const dealership = await req.database.collection("dealerships").findOne({ dealership_id: dealershipId });

    if (!dealership) {
      return res.status(404).json({ error: "Dealership not found" });
    }

    const carIds = dealership.cars;
    const cars = await req.database.collection("cars").find({ car_id: { $in: carIds } }).toArray();

    res.json(cars);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ error: "Failed to fetch cars" });
  }
};


const viewDealershipWithinRange = async (req, res) => {
  try {
    const userLocation = req.query.userLocation;
    // Use maps API to calculate dealerships within the specified range based on userLocation
    const dealerships = []; // Replace this with actual logic to fetch dealerships within range

    res.json(dealerships);
  } catch (error) {
    console.error("Error fetching dealerships:", error);
    res.status(500).json({ error: "Failed to fetch dealerships" });
  }
};


const viewAllDealsFromDealership = async (req, res) => {
  try {
    const dealershipId = req.params.dealershipId;
    const deals = await req.database.collection("deals").find({ dealership_id: dealershipId }).toArray();

    res.json(deals);
  } catch (error) {
    console.error("Error fetching deals:", error);
    res.status(500).json({ error: "Failed to fetch deals" });
  }
};

// Route handler to allow a user to buy a car after a deal is made
const buyCar = async (req, res) => {
  try {
    const { userId, dealId } = req.body;

    // Fetch the user and deal information
    const user = await req.database.collection("users").findOne({ user_id: userId });
    const deal = await req.database.collection("deals").findOne({ deal_id: dealId });

    if (!user || !deal) {
      return res.status(404).json({ error: "User or deal not found" });
    }

    // Update the user's vehicle_info to include the purchased vehicle
    const vehicleId = deal.car_id;
    const newVehicleInfo = [...user.vehicle_info, vehicleId];
    await req.database.collection("users").updateOne({ user_id: userId }, { $set: { vehicle_info: newVehicleInfo } });

    // You can also perform other actions, such as updating the dealership's sold_vehicles list, etc.

    res.json({ message: "Car purchased successfully" });
  } catch (error) {
    console.error("Error buying car:", error);
    res.status(500).json({ error: "Failed to buy the car" });
  }
};


export { buyCar, viewDealershipWithinRange, viewAllCarsInDealership, viewDealershipsWithCertainCar, viewAllDealsOnCar, viewVehiclesOwnedByUser }


