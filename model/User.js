const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const TokenSchema = require("./Token");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const generateToken = require('../utils/token');

const UserSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    username: {
        type: String,
        unique: true,
        required: '{PATH} is required!'
    },
    password: {
        type: String,
        required: '{PATH} is required!'
    },
    email: {
        type: String,
        unique: true,
        required: '{PATH} is required!'
    },
    token: {
        type: TokenSchema
    }
});

UserSchema.plugin(AutoIncrement,{id: "user_increment", inc_field: "id"});

UserSchema.pre('save', function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

UserSchema.pre('save', function (next) {
    let today = new Date();
    if (!this.isNew) {
        return next();
    }
    this.token = {
        token: generateToken(64),
        validUntil: new Date(today.getFullYear(), today.getMonth(), today.getDay() + 7)
    };
    next()
});

module.exports = mongoose.model('User', UserSchema, "users");