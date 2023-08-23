require("../controllers/vehiclesController");

//routes
const express = require("express");
const router = express.Router();
const {
  listVehicles,
  getVehicle,
  searchByBrand,
  postVehicle,
  putVehicle,
  deleteVehicle,
} = require("../controllers/vehiclesController");

router.get("/", (req, res) => {
  listVehicles(res);
});

router.get("/:id", (req, res) => {
  getVehicle(req, res);
});

router.get("/brand/:brand?", (req, res) => {
  searchByBrand(req, res);
});

router.post("/insert/", (req, res) => {
  postVehicle(req, res);
});

router.put("/update/:id", (req, res) => {
  putVehicle(req, res);
});

router.delete("/delete/:id", (req, res) => {
  deleteVehicle(req, res);
});

module.exports = router;
