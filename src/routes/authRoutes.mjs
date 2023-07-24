// src/routes/authRoutes.mjs
import express from 'express';
import authController from '../controllers/authController.mjs';

const router = express.Router();

// User login route
router.post('/user/login', authController.userLogin);

// Dealership login route
router.post('/dealership/login', authController.dealershipLogin);

// Admin login route
router.post('/admin/login', authController.adminLogin);

export default router;
