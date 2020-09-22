// import all of our models
import "./models/User";
import "./models/Profile";
import "./models/Post";

import app from "./app";

const mongoose = require("mongoose");

const { API_PORT, DATABASE } = process.env;

const mongodbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

// connect to db
mongoose.connect(DATABASE, mongodbOptions);

mongoose.connection.on("error", (err) => {
  console.error(`${err.message}`);
});

app.set("port", API_PORT || 7777);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
