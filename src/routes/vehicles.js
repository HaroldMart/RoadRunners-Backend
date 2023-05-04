require('../controllers/vehiclesController')
//routes
const express = require('express');
const { listVehicules } = require('../controllers/vehiclesController');
const router = express.Router();

router.get('/', (req, res) => {
    listVehicules(req, res);
});

router.post('/', (req, res) => {
    res.send('Hello post!');
});

router.put('/', (req, res) => {
    res.send('Hello put!');
});

router.delete('/', (req, res) => {
    res.send('Hello delete!');
});

module.exports = router;