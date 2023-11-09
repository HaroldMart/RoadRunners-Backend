const { listVehicles, getVehicle, searchByBrand, postVehicle, putVehicle, deleteVehicle } = require("../controllers/vehicle.controller");
const express = require("express");
const router = express.Router();
const upload = require('../middlewares/upload');

router.get("/", (req, res) => {
  listVehicles(res);
});

router.get("/:id", (req, res) => {
  getVehicle(req, res);
});

router.get("/brand/:brand?", (req, res) => {
  searchByBrand(req, res);
});

router.post("/insert/", upload.array('images', 7) , (req, res, next) => {
  postVehicle(req, res, next);
});

router.put("/update/:id", (req, res) => {
  putVehicle(req, res);
});

router.delete("/delete/:id", (req, res) => {
  deleteVehicle(req, res);
});

module.exports = router;
