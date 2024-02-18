import mongoose from "mongoose";

const vehicle = new mongoose.Schema({
  portrait: {
    data: Buffer,
    contentType: String
  },
  owner: String,
  brand: String,
  type: String,
  model: String,
  condition: String,
  fuel: String,
  year: String,
  price: Number,
  location: String,
  seller: {
    picture: String,
    name: String,
    email: String,
    phone: String,
    whatsapp: String,
    telegram: String,
  },
  images: [
    {
      data: Buffer,
      contentType: String
    }
  ],
});

const vehicleModel = mongoose.model("cars", vehicle);

export default vehicleModel;