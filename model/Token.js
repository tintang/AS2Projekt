const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema({
    token: {
        type: String
    },
    validUntil: {
        type: Date
    }
});

module.exports = TokenSchema;

