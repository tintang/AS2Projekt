const userRouter = require('express').Router();
const User = require('../model/User');
const AuthenticationMiddleware = require("../middleware/security/TokenAuthentication");
const userController = require("../controllers/UserController");

userRouter
    .route("/")
    .post(userController.userCreate)
    .get(userController.getUsers);

userRouter
    .route("/:id")
    .get(userController.getUser)
    .patch(AuthenticationMiddleware, userController.patchUser);

module.exports = userRouter;