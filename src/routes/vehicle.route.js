import { listVehicles, getVehicle, searchByBrand, postVehicle, putVehicle, deleteVehicle } from '../controllers/vehicle.controller.js';
import express from 'express';
import upload from '../middlewares/upload.js';
import { checkToken, deleteScope } from '../middlewares/auth0.js';

const vehicleRoutes = express.Router();

vehicleRoutes.get("/", (req, res) => {
  listVehicles(res);
});

vehicleRoutes.get("/:id", (req, res) => {
  getVehicle(req, res);
});

vehicleRoutes.get("/brand/:brand?", (req, res) => {
  searchByBrand(req, res);
});

vehicleRoutes.post("/insert/", checkToken, upload.array('images', 7) , (req, res, next) => {
  postVehicle(req, res, next);
});

vehicleRoutes.put("/update/:id", checkToken, (req, res) => {
  putVehicle(req, res);
});

vehicleRoutes.delete("/delete/:id", checkToken, (req, res) => {
  deleteVehicle(req, res);
});

export default vehicleRoutes;