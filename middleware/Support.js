module.exports = (req, res, next) => {
    let applicationType = req.headers["content-type"];
    if (applicationType !== 'application/json') {
        return res.send(415, {message: "NOT SUPPORTED"})
    }
    next();
};