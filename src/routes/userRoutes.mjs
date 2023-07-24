// src/routes/userRoutes.mjs
import express from 'express';
import { buyCar, viewDealershipWithinRange, viewAllCarsInDealership, viewDealershipsWithCertainCar, viewAllDealsOnCar, viewVehiclesOwnedByUser } from '../controllers/userController.mjs';
import authenticate from '../middlewares/authenticate.mjs';

const router = express.Router();

// User routes (protected with authentication)
router.get('/cars/dealership/:dealershipId', authenticate, viewAllCarsInDealership);
router.get('/dealerships/:carId', authenticate, viewDealershipsWithCertainCar);
router.get('/vehicles', authenticate, viewVehiclesOwnedByUser);
router.get('/dealerships/range', authenticate, viewDealershipWithinRange);
router.get('/deals/:carId', authenticate, viewAllDealsOnCar);
router.post('/deals/buy/:dealId', authenticate, buyCar);

export default router;
