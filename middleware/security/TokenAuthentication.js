const User = require("./../../model/User");
const HttpStatus = require("http-status-codes")

module.exports = (req, res, next) => {
    User.find()
        .then(users => {
            let test = users;
        });

    let token = req.headers["x-auth-token"];
    User.findOne({"token.token": token})
        .then((user) => {
            if (!user) {
                return res.send(HttpStatus.FORBIDDEN, {
                    message: "Not authenticated"
                })
            }
            req.user = user;
            next();
        })
        .catch(err => {
            return next(err);
        });
};