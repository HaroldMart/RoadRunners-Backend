//routes
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello get!');
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