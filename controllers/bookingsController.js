import data from '../models/data';
import { Trip, validate } from '../models/bookingModel';

class BookingsController{

  // show all available trips
    static allTrips(req, res){
        res.send(data);
    }

    // show one trip based on ID
    static viewOneTrip(req, res) {
        const oneTrip = data.find((trip) => trip.id == req.params.tripId);
        if (oneTrip) {
          res.send(oneTrip);
        }
        res.status(404).send('Trip with that ID not found');
      }

      // book trip
    static async bookTrip(req, res){
      const { error } = validate(req.body);
      if (error) {
          return res.status(400).send(error.details[0].message);
      }

      const oneTrip = data.find((trip) => trip.id == req.params.tripId);
      if (oneTrip) {        
        const trip = new Trip({
          userId: req.user.email,
          departure: req.body.departure,
          arrival:req.body.arrival,
          tickets: req.body.tickets,
          price: 1400*req.body.tickets,
          time:req.body.time
        });
        await trip.save();
        res.status(201).send(trip);
      }
      res.status(404).send('Trip with that ID not found');
    }
}

export default BookingsController;