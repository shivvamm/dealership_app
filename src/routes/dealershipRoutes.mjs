// src/routes/dealershipRoutes.mjs
import express from 'express';
import dealershipController from '../controllers/dealershipController.mjs';
import authenticate from '../middlewares/authenticate.mjs';

const router = express.Router();

// Dealership routes (protected with authentication)
router.get('/cars', authenticate, dealershipController.viewAllCars);
router.post('/cars', authenticate, dealershipController.addCarToDealership);
router.get('/deals', authenticate, dealershipController.viewDealsByDealership);
router.post('/deals', authenticate, dealershipController.addDealToDealership);
router.get('/sold-vehicles', authenticate, dealershipController.viewSoldVehicles);
router.post('/sold-vehicles', authenticate, dealershipController.addSoldVehicle);

export default router;
