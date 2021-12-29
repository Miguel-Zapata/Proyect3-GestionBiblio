const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    card: {
        type: mongoose.Types.ObjectId,
        ref: "Card"
    },
    library: {
        type: mongoose.Types.ObjectId,
        ref: "Library"
    },
    condition: { type: Boolean },
    start_Date: { type: Date },
    finish_Date: { type: Date }
});

module.exports = Booking = mongoose.model("Booking", BookingSchema);