const User = require("../../models/User").User;
const HttpStatus = require("http-status-codes")

module.exports = async (req, res, next) => {
    let token = req.headers["x-auth-token"];
    let user = await User.findOne({"token.token": token})

    if (!user) {
        return res.send(HttpStatus.FORBIDDEN, {
            message: "Not authenticated"
        })
    }
    req.user = user;
    next();
}