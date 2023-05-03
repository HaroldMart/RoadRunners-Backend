const { Schema, model } = require("mongoose");

const vehicles = new Schema({
    marca: String,
    modelo: String,
    color: String,
    precio: Number
})

const car = model('Carro', vehicles);
const truck = model('Camion', vehicles);


module.exports = {
   car,
   truck
}
