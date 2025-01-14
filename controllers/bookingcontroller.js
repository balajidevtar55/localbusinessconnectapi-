
const asyncHandler = require('express-async-handler');
const Booking = require('../models/Booking');

const BookingAdd = asyncHandler(async (req, res) => {
    const { bookingDetails } = req.body;
    
    try {
        if (!bookingDetails) {
            return res.status(400).json({message: "All fields are required"});
        }
    
        const booking = new Booking({
            bookingDetails, // Add category-specific fields here
          });
          const savedBooking = await booking.save();
          res.status(201).json(savedBooking); 
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
    
}); 

module.exports = {
    BookingAdd,
    
}
