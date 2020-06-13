const userRouter = require("./router/User");
const listingRouter = require("./router/Listing");
const mongoose = require('mongoose')
const express = require("express");
const bodyParser = require("body-parser")

const supportMiddleware = require("./middleware/Support");
const AuthenticationMiddleware = require("./middleware/security/TokenAuthentication");

const app = express();
const port = 3000;

const connectDb = () => {
    return mongoose.connect("mongodb://sirup:sirup@127.0.0.1:27017/app", {useNewUrlParser: true});
};


const init = () => {
    connectDb().then(() => {
        console.log('Successfully connected')
    }, (err) => {
        throw err;
    });
    //app.use(supportMiddleware);
    app.use(bodyParser.json());
    app.listen(port, () => console.log("app is listening"));
    app.use("/users", userRouter);
    app.use("/listings", listingRouter);


    app.get('/', (request, response) =>
        response.sendFile(__dirname + '/frontend/index.html')
    );


    app.use(express.static('public'))

}

init();