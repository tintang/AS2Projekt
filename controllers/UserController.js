const User = require("../models/User").User;
const HttpStatus = require("http-status-codes");

exports.userCreate = async (req, res, next) => {
    const {username, password, email, type} = req.body;

    let newUser = new User({
        username, password, email, type
    });

    newUser.save()
        .then((user) => {
            res.send(user);
        })
        .catch(err => {
            res.send(HttpStatus.BAD_REQUEST, {
                status: HttpStatus.BAD_REQUEST,
                message: err.message
            })
        });
}

exports.getUsers = async (req, res, next) => {
    User.find()
        .then(users => {
            res.send(HttpStatus.OK, users);
        })
        .catch(next)
}

exports.getTeachers = async (req, res, next) => {
    User
        .find({}, {
            type: 'teacher'
        }).then((teachers) => res.send(HttpStatus.OK, teachers))
}

exports.getUser = async (req, res, next) => {
    User.findOne({_id: req.params.id})
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