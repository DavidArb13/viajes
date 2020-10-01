const express = require('express');
const router = express.Router();

const services = require('../services/tripsService');

//GET
router.get('/countries', (req, res) => {
    services.searchCountries(
        (result) => res.json(result),
        (err) => res.json(err)
    );
});

router.get('/states', (req, res) => {
    services.searchStates(
        (result) => res.json(result),
        (err) => res.json(err)
    );
});

router.get('/cities', (req, res) => {
    services.searchCities(
        (result) => res.json(result),
        (err) => res.json(err)
    );
});

router.get('/trips', (req, res) => {
    services.searchTrips(
        (result) => res.json(result),
        (err) => res.json(err)
    );
});

//POST

router.post('/trips', (req, res) => {
    const data = req.body;
    services.addTrips(data,
        (result) => res.json(result),
        (err) => res.json(err)
    );
});

router.post('/login', (req, res) => {
    const data = req.body;
    services.login(data,
        (result) => res.json(result),
        (err) => res.json(err)
    );
});


module.exports = router;