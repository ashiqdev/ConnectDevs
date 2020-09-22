import { check, validationResult } from "express-validator";
import mongoose from "mongoose";
import gravatar from "gravatar";
import bcrypt from "bcryptjs";
import { signToken } from "../../utils/utils";

const User = mongoose.model("User");

const express = require("express");

const router = express.Router();

// @route  POST api/users
// @desc   Register User
// @access Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // see if user exists
      const user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }
      // get users gravatar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      // encrypt password
      const salt = await bcrypt.genSalt(10);

      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = await new User({
        name,
        email,
        avatar,
        password: hashedPassword,
      });

      await newUser.save();

      // return JWT
      return res.status(200).json({ token: signToken(newUser) });
    } catch (error) {
      console.log(error.message);
      return res.status(500).send("Server Error");
    }
  }
);

export default router;
