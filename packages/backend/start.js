const mongoose = require("mongoose");

const { PORT, DATABASE } = process.env;

const mongodbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// connect to db
mongoose.connect(DATABASE, mongodbOptions);

mongoose.connection.on("error", err => {
  console.error(`${err.message}`);
});

// import all of our models
require("./models/User");

const app = require("./app");

app.set("port", PORT || 7777);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
