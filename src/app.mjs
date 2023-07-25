// app.js
import express from "express";
import { Double, MongoClient, ServerApiVersion } from "mongodb";
import { connectDB } from "./config/index.mjs"
import dotenv from 'dotenv';
import authRoutes from "./routes/authRoutes.mjs"
import userRoutes from "./routes/userRoutes.mjs"
import dealershipRoutes from "./routes/dealershipRoutes.mjs"
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerDef from './swaggerDef.mjs'; 

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;



const db = await connectDB();
// Attach database object to the route handlers
app.use((req, res, next) => {
    req.database = db;
    next();
});

app.use(express.json());


const options = {
    swaggerDefinition: swaggerDef, 
    apis: ['./src/routes/JSDoc.mjs'],
  };

  const swaggerSpec = swaggerJsDoc(options);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/dealership', dealershipRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


