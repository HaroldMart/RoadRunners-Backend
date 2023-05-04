//requires
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
<<<<<<< HEAD
=======
const dotenv = require('dotenv').config();
const path = require('path'); 
>>>>>>> 16795827fa18303cb26493998c1cbf0904af4dc6
const mongoose = require('mongoose');
const vehiculesRoutes = require('./routes/vehicles')
const URI = process.env.URI;
const app = express();
const port = 2000;
<<<<<<< HEAD
=======

>>>>>>> 16795827fa18303cb26493998c1cbf0904af4dc6

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