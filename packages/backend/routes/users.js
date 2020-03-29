const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

// controllers
const { register } = require("../controllers/userController");

// validators
const { registerValidator } = require("../helpers/express-validator");

// @route  POST api/users
// @desc   Register User
// @access Public
router.post("/", registerValidator, register);

module.exports = router;
