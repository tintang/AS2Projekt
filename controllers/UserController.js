const User = require("../model/User");
const HttpStatus = require("http-status-codes");

exports.userCreate = async (req, res) => {
    let newUser = new User(req.body);
    let result = await newUser.save();
    res.send(newUser);
}

exports.getUsers = async (req, res, next) => {
    User.find()
        .then(users => {
            res.send(HttpStatus.OK, users);
        })
        .catch(next)
}

exports.getUser = async (req, res, next) => {
    User.findOne({id: req.params.id})
        .then(user => {
            if (!user) {
                res.send(HttpStatus.NOT_FOUND, {message: "User not found"});
            }
            res.send(HttpStatus.OK, user);
        })
        .catch(next);
}

exports.patchUser = async (req, res, next) => {
    User.findOneAndUpdate({id: req.params.id})

}