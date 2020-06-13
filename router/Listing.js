const ListingRouter = require('express').Router();
const Listing = require('../models/Listing');
const AuthenticationMiddleware = require("../middleware/security/TokenAuthentication");
const listingController = require("../controllers/ListingController");

ListingRouter
    .route("/")
    .post(AuthenticationMiddleware, listingController.postListing)
    .get(listingController.getListings);


ListingRouter
    .route("/:id")
    .get(listingController.getListing);

module.exports = ListingRouter;