import jwt, { decode } from "jsonwebtoken";

const jwtValidator = (token) => jwt.verify(token, process.env.APP_SECRET);

export default function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // verify token
  try {
    const decoded = jwtValidator(token);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
}
