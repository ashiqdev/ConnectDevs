const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const expressValidator = require("express-validator");

const errorHandlers = require("./handlers/errorHandler");
const routes = require("./routes");

// create express app
const app = express();

// set up cors to handle request from frontend
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Api Routes
app.use("/api", routes);

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get("env") === "development") {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

module.exports = app;
