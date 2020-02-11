import data from '../models/data';

class UsersController{
    static allTrips(req, res){
        res.send(data);
    }
    static viewOneTrip(req, res) {
        const oneTrip = data.find((trip) => trip.id == req.params.tripId);
        if (oneTrip) {
          res.send(oneTrip);
        }
        res.status(404).send('Trip with that ID not found');
      }
}

export default UsersController;