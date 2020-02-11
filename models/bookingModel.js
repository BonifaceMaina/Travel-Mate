const Joi = require('joi');
const mongoose = require('mongoose');
 
const Trip = mongoose.model('Trip', new mongoose.Schema({
    userId: {type:String, required:true},
    departure: {type:String, required:true},
    arrival:{type:String, required:true},
    tickets: {type:Number, required:true},
    date:{type:String, required:true},
    price: {type:Number},
    time:{type:String, required:true},
    createdAt:{
        type:Date,
        default:Date.now()
    }
}));

function validateTrip(trip) {
    const schema = {
        departure: Joi.string().min(5).max(255).required(),
        arrival: Joi.string().min(5).max(255).required(),
        date: Joi.string().required(),
        tickets: Joi.number().min(1).required(),
        time: Joi.string().min(5).max(255).required()

    };
    return Joi.validate(trip, schema);
}
exports.Trip = Trip;
exports.validate = validateTrip;
