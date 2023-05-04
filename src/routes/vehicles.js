<<<<<<< HEAD
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
=======
require('../controllers/vehiclesController')
//routes
const express = require('express');
const { listVehicules } = require('../controllers/vehiclesController');
const router = express.Router();

router.get('/', (req, res) => {
    listVehicules(req, res);
>>>>>>> 16795827fa18303cb26493998c1cbf0904af4dc6
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

<<<<<<< HEAD
router.delete("/", (req, res) => {
  deleteVehicle(req, res);
});

module.exports = router;
=======
module.exports = router;
>>>>>>> 16795827fa18303cb26493998c1cbf0904af4dc6
