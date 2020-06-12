const Listing = require("../models/Listing");
const HttpStatus = require("http-status-codes");

exports.postListing = async (req, res, next) => {
    const {username, password, email, type} = req.body;
    let newListing = new Listing(req.body);

    newListing.save()
        .then((listing) => {
            res.send(listing);
        })
        .catch(err => {
            res.send(HttpStatus.BAD_REQUEST, {
                status: HttpStatus.BAD_REQUEST,
                message: err.message
            })
        });
}

exports.getListings = async (req, res, next) => {
    Listing.find()
        .then(listings => {
            res.send(HttpStatus.OK, listings);
        })
        .catch(next)
}

exports.getListing = async (req, res, next) => {
    Listing.findOne({_id: req.params.id})
        .then(listing => {
            if (!listing) {
                res.send(HttpStatus.NOT_FOUND, {message: "listing not found"});
            }
            res.send(HttpStatus.OK, listing);
        })
        .catch(next);
}
