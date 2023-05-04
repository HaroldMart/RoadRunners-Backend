require("../controllers/vehiclesController");
//routes
const express = require("express");
const {
  listVehicles,
  getVehicle,
  postVehicle,
  putVehicle,
  deleteVehicle,
} = require("../controllers/vehiclesController");
const router = express.Router();

router.get("/", (req, res) => {
  listVehicles(res);
});

router.get("/:id", (req, res) => {
  getVehicle(req, res);
});

router.post("/", (req, res) => {
  postVehicle(req, res);
});

router.put("/", (req, res) => {
  putVehicle(req, res);
});

router.delete("/", (req, res) => {
  deleteVehicle(req, res);
});

module.exports = router;
