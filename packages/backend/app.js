const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const expressValidator = require("express-validator");

const errorHandlers = require("./handlers/errorHandler");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
const postsRoutes = require("./routes/posts");

// create express app
const app = express();

// set up cors to handle request from frontend
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//User Routes
app.use("/api/users", userRoutes);

// auth Routes
app.use("/api/auth", authRoutes);

// profile Routes
app.use("/api/profile", profileRoutes);

// posts Routes
app.use("/api/posts", postsRoutes);

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get("env") === "development") {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

module.exports = app;
