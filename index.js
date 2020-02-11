import express from 'express';
import routes from './routes/allRoutes';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/travelmate')
.then(()=>console.log('Connected to MongoDB'))
.catch(err => console.error('could not connect to MongoDB', err));


const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/static'));

app.use(express.json());
app.use('/', routes);
const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));
 
export default app