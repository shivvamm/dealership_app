/**
 * @swagger
 * /cars/dealership/{dealershipId}:
 *   get:
 *     tags:
 *       - Dealership
 *     summary: Get all cars in a dealership
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: dealershipId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the dealership to fetch cars from
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         description: Unauthorized - Token is missing or invalid
 *       404:
 *         description: Dealership not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /dealerships/{carId}:
 *   get:
 *     tags:
 *       - Dealership
 *     summary: Get all dealerships with a certain car
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: carId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the car to find dealerships with
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         description: Unauthorized - Token is missing or invalid
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /vehicles:
 *   get:
 *     tags:
 *       - User
 *     summary: Get all vehicles owned by the authenticated user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         description: Unauthorized - Token is missing or invalid
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /dealerships/range:
 *   get:
 *     tags:
 *       - Dealership
 *     summary: Get dealerships within a certain range based on user location
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: userLocation
 *         required: true
 *         schema:
 *           type: string
 *         description: The location of the user to find dealerships within range
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         description: Unauthorized - Token is missing or invalid
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /deals/{carId}:
 *   get:
 *     tags:
 *       - User
 *     summary: Get all deals on a certain car
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: carId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the car to find deals on
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         description: Unauthorized - Token is missing or invalid
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /deals/buy/{dealId}:
 *   post:
 *     tags:
 *       - User
 *     summary: Allow the user to buy a car after a deal is made
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: dealId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the deal to process the purchase
 *       - in: body
 *         name: body
 *         required: true
 *         description: The user and deal information for the purchase
 *         schema:
 *           type: object
 *           properties:
 *             userId:
 *               type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *       400:
 *         description: Bad Request - Missing required data
 *       401:
 *         description: Unauthorized - Token is missing or invalid
 *       404:
 *         description: User or deal not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /cars:
 *   get:
 *     tags:
 *       - Dealership
 *     summary: Get all cars in the dealership
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         description: Unauthorized - Token is missing or invalid
 *       500:
 *         description: Internal server error
 *
 *   post:
 *     tags:
 *       - Dealership
 *     summary: Add a new car to the dealership
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         description: The car information to be added
 *         schema:
 *           type: object
 *           properties:
 *             type:
 *               type: string
 *             name:
 *               type: string
 *             model:
 *               type: string
 *     responses:
 *       201:
 *         description: Car added successfully
 *       401:
 *         description: Unauthorized - Token is missing or invalid
 *       500:
 *         description: Internal server error
 */


