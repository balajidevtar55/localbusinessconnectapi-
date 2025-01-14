const express = require('express');
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT');
const bookingcontroller = require('../controllers/bookingcontroller');

router.post('/booking',verifyJWT, bookingcontroller.BookingAdd);


module.exports = router; 