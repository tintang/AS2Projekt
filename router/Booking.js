const BookingRouter = require('express').Router();
const Booking = require('../models/Booking');
const AuthenticationMiddleware = require("../middleware/security/TokenAuthentication");
const bookingController = require("../controllers/BookingController");

BookingRouter
    .route("/")
    .get(bookingController.getBookings)
    .post(AuthenticationMiddleware, bookingController.postBooking);


BookingRouter
    .route("/:id")
    .get(bookingController.getBooking);

module.exports = BookingRouter;