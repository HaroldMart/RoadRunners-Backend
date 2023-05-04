const { Schema, model } = require("mongoose");

const vehicles = new Schema({
    Marca: String,
    Ruedas: String,
    Tipo: String,
})

module.exports = model('cars', vehicles);;
