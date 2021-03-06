const Booking = require("../models/Booking");
const User = require("../models/User").User;
const HttpStatus = require("http-status-codes");

exports.postBooking = async (req, res, next) => {
    const {price} = req.body;
    const user = await User.findOne({"_id": req.body.user});
    const bookingRecipient = await User.findOne({"_id": req.body.bookingRecipient});

    let newBooking = await Booking.create({
        price, user, bookingRecipient
    });

    newBooking.save()
        .then((booking) => {
            res.send(booking);
        })
        .catch(err => {
            res.send(HttpStatus.BAD_REQUEST, {
                status: HttpStatus.BAD_REQUEST,
                message: err.message
            })
        });
}

exports.getBookings = async (req, res, next) => {
    Booking.find()
        .then(bookings => {
            res.send(HttpStatus.OK, bookings);
        })
        .catch(next)
}

exports.getBooking = async (req, res, next) => {
    Booking.findOne({_id: req.params.id})
        .then(booking => {
            if (!booking) {
                res.send(HttpStatus.NOT_FOUND, {message: "booking not found"});
            }
            res.send(HttpStatus.OK, booking);
        })
        .catch(next);
}
