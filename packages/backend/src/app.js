import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import expressValidator from "express-validator";

import { notFound, developmentErrors } from "./handlers/errorHandler";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import profileRoutes from "./routes/profile";
import postsRoutes from "./routes/posts";

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
app.use(notFound);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get("env") === "development") {
  /* Development Error Handler - Prints stack trace */
  app.use(developmentErrors);
}

export default app;
