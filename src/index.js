// ---------------------- requires and variables --------------------------

//A document .env in he project with the variable for connection
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const vehiculesRoutes = require('./routes/vehicles')

//The global variable for connection
const API_KEY = process.env.API_KEY;
const URI = process.env.URI;
const DEV_HOST = process.env.DEV_HOST;
const FRONT_HOST = process.env.FRONT_HOST; 
const app = express();
const cors = require('cors');
const PORT  = process.env.PORT || 3000;
const authMiddleware = (req, res, next) => {
const api_Key = req.headers["api_key"];

    if(api_Key === API_KEY) {
        next();
    } else {
        res.status(401).send({ message: 'Unauthorized' });
    }
}

//The list of the host
const allowedCors = [DEV_HOST, FRONT_HOST];

//Middlewares
app.use(cors({origin : allowedCors}));
app.use(authMiddleware)
app.use(morgan('dev'));
app.use(express.json());
app.use(vehiculesRoutes);

// ---------------------- connection --------------------------
//mongoose connection
mongoose.connect(URI).then(() => {
    console.log('Conection succeded');
}).catch((error) => {
    console.log(`Conection failed: ${error}`);
})

//listen the server
app.listen(PORT, (req, res) => {
    console.log(`Server on ${PORT}`);
})
