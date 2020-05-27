const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const passportRoutes = require("./routes/passportRoutes");
const configurePassport = require("./modules/Passport");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "front/build")));
app.use(express.static(path.join(__dirname, "front/public")));

configurePassport(app);

app.use("/", passportRoutes);

module.exports = app;
