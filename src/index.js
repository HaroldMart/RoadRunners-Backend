// ---------------------- requires and variables --------------------------

//A document .env in he project with the variable for connection
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const vehiculesRoutes = require('./routes/vehicles')
const multer = require('multer');

//The global variable for connection
const API_KEY = process.env.API_KEY;
const URI = process.env.URI;
const LOCAL = process.env.LOCAL;
const FRONT_HOST = process.env.FRONT_HOST;
const HOST_TESTING = process.env.HOST_TESTING;  
var upload = multer();
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
const allowedCors = [LOCAL, FRONT_HOST, HOST_TESTING];

//Middlewares
app.use(cors({origin : allowedCors}));
app.use(authMiddleware)
app.use(morgan('dev'));
app.use(express.json());
app.use(upload.array('Img'));
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
