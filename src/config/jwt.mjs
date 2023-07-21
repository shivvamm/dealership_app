import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY;

const generateToken = (payload) => jwt.sign(payload, secretKey, { expiresIn: '1d' });

const verifyToken = (token) => jwt.verify(token, secretKey);

export { generateToken, verifyToken };