import { formatError } from '../utils/error.mjs';
import Dealership from '../models/Dealership.mjs';
import Cars from '../models/Car.mjs';
import Deals from '../models/Deal.mjs';
import SoldVehicles from '../models/SoldVehicle.mjs';

const dealershipController = {
  viewAllCars: async (req, res) => {
    try {
      const cars = await Cars.getAllCars();
      res.json(cars);
    } catch (err) {
      res.status(500).json(formatError(500, 'Internal server error'));
    }
  },

  addCarToDealership: async (req, res) => {
    try {
      const { car_id } = req.body;
      const dealership = await Dealership.getDealershipById(req.user.dealership_id);

      if (!dealership) {
        return res.status(404).json(formatError(404, 'Dealership not found'));
      }

      // Check if the car exists in the Cars collection
      const car = await Cars.getCarById(car_id);
      if (!car) {
        return res.status(404).json(formatError(404, 'Car not found'));
      }

      // Add the car to the dealership's cars array
      await Dealership.addCar(dealership.dealership_id, car_id);

      res.json({ message: 'Car added to the dealership successfully' });
    } catch (err) {
      res.status(500).json(formatError(500, 'Internal server error'));
    }
  },

  viewDealsByDealership: async (req, res) => {
    try {
      const dealership = await Dealership.getDealershipById(req.user.dealership_id);

      if (!dealership) {
        return res.status(404).json(formatError(404, 'Dealership not found'));
      }

      const deals = await Deals.getDealsByDealership(dealership.dealership_id);
      res.json(deals);
    } catch (err) {
      res.status(500).json(formatError(500, 'Internal server error'));
    }
  },

  addDealToDealership: async (req, res) => {
    try {
      const { car_id, deal_info } = req.body;
      const dealership = await Dealership.getDealershipById(req.user.dealership_id);

      if (!dealership) {
        return res.status(404).json(formatError(404, 'Dealership not found'));
      }

      // Check if the car exists in the Cars collection
      const car = await Cars.getCarById(car_id);
      if (!car) {
        return res.status(404).json(formatError(404, 'Car not found'));
      }


      await Deals.createDeal(dealership.dealership_id, car_id, deal_info);

      res.json({ message: 'Deal added to the dealership successfully' });
    } catch (err) {
      res.status(500).json(formatError(500, 'Internal server error'));
    }
  },

  viewSoldVehicles: async (req, res) => {
    try {
      const dealership = await Dealership.getDealershipById(req.user.dealership_id);

      if (!dealership) {
        return res.status(404).json(formatError(404, 'Dealership not found'));
      }

      const soldVehicles = await SoldVehicles.getSoldVehiclesByDealership(dealership.dealership_id);
      res.json(soldVehicles);
    } catch (err) {
      res.status(500).json(formatError(500, 'Internal server error'));
    }
  },

  addSoldVehicle: async (req, res) => {
    try {
      const { vehicle_id, vehicle_info } = req.body;
      const dealership = await Dealership.getDealershipById(req.user.dealership_id);

      if (!dealership) {
        return res.status(404).json(formatError(404, 'Dealership not found'));
      }

      // Check if the vehicle exists in the SoldVehicles collection
      const soldVehicle = await SoldVehicles.getSoldVehicleById(vehicle_id);
      if (!soldVehicle) {
        return res.status(404).json(formatError(404, 'Vehicle not found'));
      }

      // Add the vehicle to the list of sold vehicles for the dealership
      await Dealership.addSoldVehicle(dealership.dealership_id, vehicle_id, vehicle_info);

      res.json({ message: 'Sold vehicle added to the dealership successfully' });
    } catch (err) {
      res.status(500).json(formatError(500, 'Internal server error'));
    }
  },
};

export default dealershipController;
