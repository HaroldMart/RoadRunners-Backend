require("../controllers/vehiclesController");
//routes
const express = require("express");
const router = express.Router();
const {
  listVehicles,
  getVehicle,
  postVehicle,
  putVehicle,
  deleteVehicle,
} = require("../controllers/vehiclesController");

router.get('/', (req, res) => {
    listVehicles(req, res);
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
