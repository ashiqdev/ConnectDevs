import express from "express";
import cors from "cors";

import { notFound, developmentErrors } from "./handlers/errorHandler";
import userRoutes from "./routes/api/users";
import authRoutes from "./routes/api/auth";
import profileRoutes from "./routes/api/profile";
import postsRoutes from "./routes/api/posts";

// create express app
const app = express();

// set up cors to handle request from frontend
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// User Routes
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
