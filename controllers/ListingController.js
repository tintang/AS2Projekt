const Listing = require("../models/Listing");
const User = require("../models/User").User;
const HttpStatus = require("http-status-codes");

exports.postListing = async (req, res, next) => {
    const {title, body, price} = req.body;
    const userId = await req.user._id.toString();
    const user = await User.findOne({_id: userId});

    let test = user._id.toString();
    let newListing = await Listing.create({
        title: title,
        body: req.body.body,
        price: price,
        creator: user
    });

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
