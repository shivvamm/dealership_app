import jwt from 'jsonwebtoken';
import { formatError } from '../utils/error.mjs';

const authenticate = (req, res, next) => {

  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json(formatError(401, 'Unauthorized: Missing token'));
  }

  try {
    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user = decoded;
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(401).json(formatError(401, 'Unauthorized: Invalid token'));
  }
};

export default authenticate;
