const mongoose = require("mongoose");
const app = require("./app");

const {PORT,DATABASE} = process.env;

const mongodbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(DATABASE, mongodbOptions);

mongoose.connection.on("error", err => {
  console.error(`${err.message}`);
});

// TODO import all of our models

app.set("port", PORT || 7777);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
