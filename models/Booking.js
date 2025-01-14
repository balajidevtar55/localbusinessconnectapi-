const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    bookingDetails: {
      type: mongoose.Schema.Types.Mixed, 
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
