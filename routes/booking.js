import express, { Router } from 'express';
import bookingsController from '../controllers/bookingsController';
import userAuthenticated from '../middleware/userAuthenticated';

const router = express.Router();

router.get('/availableTrips', bookingsController.allTrips);
router.get('/oneTrip/:tripId', bookingsController.viewOneTrip);



module.exports = router;