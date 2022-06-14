const express = require('express');

const Cars = require('./cars-model');

const md = require('./cars-middleware');

const router = express.Router();

router.get( '/', (req, res) => {
    Cars.getAll()
    .then(cars => res.json(cars))
    .catch(err => res.status(500).json(err.message))
});

router.get('/:id', md.checkCarId, (req, res) => {
    res.json(req.car)
});

router.post('/', (req, res) => {
    res.json({ message: "post router is working" })
});

module.exports = router
