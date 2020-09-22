const { check } = require("express-validator");

// eslint-disable-next-line import/prefer-default-export
export const registerValidator = [
  check("name", "Ashik Name is required").not().isEmpty(),

  check("email", "Please include a valid email").isEmail(),

  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
];
