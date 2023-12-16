import { Schema, model } from "mongoose";

const vehicles = new Schema({
  portrait: {
    data: Buffer,
    contentType: String
  },
  owner: String,
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

export default model("cars", vehicles);