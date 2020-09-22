import jwt from "jsonwebtoken";
import { randomBytes } from "crypto";
import { promisify } from "util";

const signToken = ({ id, name, email }) => {
  return jwt.sign(
    {
      id,
      name,
      email,
    },
    process.env.APP_SECRET,
    { expiresIn: "1 day" }
  );
};

const createHash = async () => {
  const randomBytesPromise = promisify(randomBytes);
  const hash = (await randomBytesPromise(20)).toString("hex");
  return hash;
};

export { signToken, createHash };
