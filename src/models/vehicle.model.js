import mongoose from "mongoose";

const vehicle = new mongoose.Schema({
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

const vehicleModel = mongoose.model("cars", vehicle);

export default vehicleModel;