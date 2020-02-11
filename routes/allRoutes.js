import express from 'express';
import auth from './auth';
import bookings from './booking';


const route = express.Router();


route.use('/trips', bookings);
route.use('/auth', auth);


export default route;