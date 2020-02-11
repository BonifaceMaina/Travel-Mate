import express, { Router } from 'express';
import bookingsController from '../controllers/bookingsController';
import userAuthenticated from '../middleware/userAuthenticated';

const router = express.Router();

router.get('/availableTrips', bookingsController.allTrips);
router.get('/:tripId', userAuthenticated,  bookingsController.viewOneTrip);
router.post('/:tripId/book', userAuthenticated, bookingsController.bookTrip);

module.exports = router;