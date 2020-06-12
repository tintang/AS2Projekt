const mongoose = require('mongoose');
const UserSchema = require('./User');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Booking = new mongoose.Schema({
    price: {
        type: Number,
        required: '{PATH} is required'
    },
    user: {
        type: UserSchema,
        required: '{PATH} is required'
    },
    bookingRecipient: {
        type: UserSchema,
        required: '{PATH} is required'
    },
    bookingDate: {
        type: Date,
        default: new Date()
    },
    payed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Booking', Booking, 'bookings');