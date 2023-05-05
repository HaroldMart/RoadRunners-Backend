const { Schema, model } = require("mongoose");

//Schema for the vehicles
const vehicles = new Schema({
  owner_email: String,
  brand: String,
  type: String,
  model: String,
  condition: String,
  fuel: String,
  year: String,
  price: String,
  location: String,
});

//Export a model named cars, based in the vehicles schema
module.exports = model("cars", vehicles);
