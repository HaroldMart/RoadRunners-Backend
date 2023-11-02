require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const auth = require('./middlewares/auth');
const vehiclesRoute = require('./routes/vehicle.route');

const URI = process.env.URI;
const LOCAL = process.env.LOCAL;
const FRONT_HOST = process.env.FRONT_HOST;
const DEV_HOST = process.env.DEV_HOST;
const HOST_TESTING = process.env.HOST_TESTING; 
const HOST = process.env.HOST;  
const PORT  = process.env.PORT || 3000;

const app = express();
app.use(cors({origin : [DEV_HOST, FRONT_HOST, HOST_TESTING, LOCAL]}));
app.use(auth);
app.use(morgan('dev'));
app.use(express.json());
app.use(vehiclesRoute);

mongoose.connect(URI).then(() => {
    console.log('Conection succeded');
}).catch((error) => {
    console.log(`Conection failed: ${error}`);
})

app.listen(PORT, (req, res) => {
    console.log(`Server on ${HOST}:${PORT}`);
})
