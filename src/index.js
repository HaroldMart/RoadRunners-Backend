// ---------------------- requires and variables --------------------------

//A document .env in he project with the variable for connection
require('dotenv').config(); 
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const vehiculesRoutes = require('./routes/vehicles')

//The global variable for connection
const URI = process.env.URI;
const DEV_HOST = process.env.DEV_HOST;
const FRONT_HOST = process.env.FRONT_HOST; 
const app = express();
const cors = require('cors');
const PORT  = process.env.PORT || 3000;

//The list of the host
const list = [DEV_HOST, FRONT_HOST];

//Middlewares
app.use(cors({origin : list}));
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
app.listen(port, (req, res) => {
    console.log(`Server on ${PORT}`);
})
