const mongoose = require("mongoose");
const UserSchema = require("User");
const mongooseHelper = require("../utils/helper.mongoose");

const ListingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: '{PATH} is required'
    },
    body: {
        type: String,
        required: '{PATH} is required'
    },
    creator: {
        type: User,
        required: '{PATH} is required'
    },
    price: {
        type: Number,
        required: '{PATH} is required'
    }
});

ListingSchema.post('save', mongooseHelper.onSave);

module.exports = mongoose.model('Listing', ListingSchema, 'listing');