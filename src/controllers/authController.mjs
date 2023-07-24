// src/controllers/authController.mjs
import { formatError } from '../utils/error.mjs';
import User from '../models/User.mjs';
import Dealership from '../models/Dealership.mjs';
import Admin from '../models/Admin.mjs';
import { generateToken, verifyToken } from "../config/jwt.mjs"

const generateJWTToken = (user) => {
  const payload = {
    user_id: user.user_id || user.dealership_id || user.admin_id,
    role: user.user_id ? 'user' : user.dealership_id ? 'dealership' : 'admin',
  };
  return generateToken(payload);
};

const authController = {
  userLogin: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.getUserByEmail(email);

      if (!user || user.password !== password) {
        return res.status(401).json(formatError(401, 'Invalid email or password'));
      }

      const token = generateToken(user);
      res.json({ token });
    } catch (err) {
      res.status(500).json(formatError(500, 'Internal server error'));
    }
  },

  dealershipLogin: async (req, res) => {
    try {
      const { email, password } = req.body;
      const dealership = await Dealership.getDealershipByEmail(email);

      if (!dealership || dealership.password !== password) {
        return res.status(401).json(formatError(401, 'Invalid email or password'));
      }

      const token = generateToken(dealership);
      res.json({ token });
    } catch (err) {
      res.status(500).json(formatError(500, 'Internal server error'));
    }
  },

  adminLogin: async (req, res) => {
    try {
      const { email, password } = req.body;
      const admin = await Admin.getAdminByEmail(email);

      if (!admin || admin.password !== password) {
        return res.status(401).json(formatError(401, 'Invalid email or password'));
      }

      const token = generateToken(admin);
      res.json({ token });
    } catch (err) {
      res.status(500).json(formatError(500, 'Internal server error'));
    }
  },
};

export default authController;
