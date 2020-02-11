import express from 'express';
import auth from './auth';
import bookings from './booking';
import templates from './templates';


const route = express.Router();


route.use('/trips', bookings);
route.use('/auth', auth);
route.use('/', templates);


export default route;