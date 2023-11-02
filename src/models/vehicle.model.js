const { Schema, model } = require("mongoose");

const vehicles = new Schema({
  owner_email: String,
  brand: String,
  type: String,
  model: String,
  condition: String,
  fuel: String,
  year: String,
  price: Number,
  location: String,
  images: [
    {
      data: Buffer,
      contentType: String
    }
  ],
});

module.exports = model("cars", vehicles);
