// src/routes/userRoutes.mjs
/**
 * @swagger
 * /users/{userEmail}/vehicles:
 *   get:
 *     tags:
 *       - User
 *     summary: Get all vehicles owned by a user
 *     parameters:
 *       - in: path
 *         name: userEmail
 *         required: true
 *         schema:
 *           type: string
 *         description: The email of the user whose vehicles to fetch
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

import express from 'express';
//  used  importing differently using named export then importing here 
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
