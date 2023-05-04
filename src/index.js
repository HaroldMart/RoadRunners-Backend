//requires
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const path = require('path'); 
const mongoose = require('mongoose');
const vehiculesRoutes = require('./routes/vehicles')
const URI = process.env.URI;
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

//mongoose connection
mongoose.connect(URI).then(() => {
    console.log('Conection succeded');
}).catch((error) => {
    console.log(`Conection failed: ${error}`);
})

//listen the server
app.listen(port, (req, res) => {
    console.log(`Server on port ${port}`);
})