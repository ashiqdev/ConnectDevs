const mongoose = require("mongoose");
const { validationResult } = require("express-validator");

const User = mongoose.model("User");

const register = async (req, res) => {
  const errors = validationResult(req);

  //   If there are errors
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  res.status(200).send("User Route");
};

module.exports = {
  register
};
