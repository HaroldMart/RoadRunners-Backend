import { listVehicles, getVehicle, searchByBrand, postVehicle, putVehicle, deleteVehicle } from '../controllers/vehicle.controller.js';
import express from 'express';
import upload from '../middlewares/upload.js';
import { checkToken } from '../middlewares/auth0.js';

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

vehicleRoutes.post("/insert", checkToken, upload.array('images',7), (req, res) => {
  postVehicle(req, res);
});

vehicleRoutes.put("/update/:id", checkToken, (req, res, next) => {
  putVehicle(req, res, next);
});

vehicleRoutes.delete("/delete/:id", checkToken, (req, res) => {
  deleteVehicle(req, res);
});

export default vehicleRoutes;