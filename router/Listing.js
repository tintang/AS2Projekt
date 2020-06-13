const listingApi = require("../public/js/api/ListingApi");

const ListingRouter = require('express').Router();
const Listing = require('../models/Listing');
const AuthenticationMiddleware = require("../middleware/security/TokenAuthentication");
const userController = require("../controllers/ListingController");

ListingRouter
    .route("/")
    .get(listingApi.getAll);


ListingRouter
    .route("/:id")
    .get(userController.getListing);

module.exports = ListingRouter;