import express from 'express';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/travelmate')
.then(()=>console.log('Connected to MongoDB'))
.catch(err => console.error('could not connect to MongoDB', err));

const userSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    password: String, 
    number: Number, 
    createdAt: { type:Date, default:Date.now }
});
const app = express();
const auth = require('./routes/auth');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(express.json());
app.use('/auth', auth);

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));
 
export default app