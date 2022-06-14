const express = require('express');

const router = express.Router();

router.get( '/', (req, res) => {
    res.json({ message: "get router working" })
})

router.get('/:id', (req, res) => {
    res.json({ message: "get by id working" })
})

router.post('/', (req, res) => {
    res.json({ message: "post router is working" })
})

module.exports = router
