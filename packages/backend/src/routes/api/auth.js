import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { check, validationResult } from "express-validator";
import auth from "../../middleware/auth";
import { signToken } from "../../utils/utils";

const User = mongoose.model("User");

const router = express.Router();

// @route  GET api/auth
// @desc   Get Current User
// @access Private

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id }).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route  POST api/auth
// @desc   Authenticate user & get token
// @access Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // see if user exists
      const user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      // return JWT
      return res.status(200).json({ token: signToken(user) });
    } catch (error) {
      console.log(error.message);
      return res.status(500).send("Server Error");
    }
  }
);

export default router;
