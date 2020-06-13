const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const TokenSchema = require("./Token");
const generateToken = require('../utils/token');
const mongooseHelper = require('../utils/helper.mongoose');


const TYPE_TEACHER = 'teacher';
const TYPE_USER = 'user';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: '{PATH} is required!'
    },
    password: {
        type: String,
        required: '{PATH} is required!',
        select: false
    },
    email: {
        type: String,
        unique: true,
        required: '{PATH} is required!'
    },
    type: {
        type: String,
        required: '{PATH} is required!'
    },
    token: {
        type: TokenSchema,
        select: false
    }
});

UserSchema.pre('save', function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

UserSchema.post('save', mongooseHelper.onSave);

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

module.exports = {
    User: mongoose.model('User', UserSchema, "users"),
    UserSchema: UserSchema
};