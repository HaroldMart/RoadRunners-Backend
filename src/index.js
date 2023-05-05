//requires
require('dotenv').config(); //A document .env in the project with the variable for connection
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const vehiculesRoutes = require('./routes/vehicles')
const URI = process.env.URI; //The global variable for connection
const app = express();
const port = 2000;

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(vehiculesRoutes);

//mongoose connection
mongoose.connect(URI).then(() => {
    console.log('Conection succeded');
}).catch((error) => {
    console.log(`Conection failed: ${error}`);
})

//listen the server
app.listen(port, (req, res) => {
    console.log(`Server on ${port}`);
})

