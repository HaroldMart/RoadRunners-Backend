const { Schema, model } = require("mongoose");

//Schema for the vehicles
const vehicles = new Schema({
    Marca: String,
    Ruedas: String,
    Tipo: String,
})

//Export a model named cars, based in the vehicles schema 
module.exports = model('cars', vehicles);;
