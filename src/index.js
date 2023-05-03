//requires
const express = require('express');
const morgan = require('morgan');
const IniBD = require('../config/db')
const path = require('path'); 
const vehiculesRoutes = require('./routes/vehicles')

//variables
const app = express();
const port = 3000;

//settings


//Middlewares
app.use(vehiculesRoutes);
app.use(morgan('dev'));
app.use(express.json());


//listen the server
app.listen(port, (req, res) => {
    console.log(`Server on port ${port}`);
})

IniBD();
