import { Router } from 'express';
import { TripController } from '../controllers/trip.controller';

const router = Router();
const tripController = new TripController();

/**
 * @swagger
 * /trips:
 *   get:
 *     summary: Get all trips
 *     description: Retrieve a list of all trips
 *     tags: [Trips]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of trips
 *       401:
 *         description: Unauthorized
 */
router.get('/', tripController.getAllTrips);

/**
 * @swagger
 * /trips:
 *   post:
 *     summary: Create a new trip
 *     description: Create a new trip with the provided details
 *     tags: [Trips]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 format: date
 *               endDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Trip created successfully
 *       401:
 *         description: Unauthorized
 */
router.post('/', tripController.createTrip);

export default router; 