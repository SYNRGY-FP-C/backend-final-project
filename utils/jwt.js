const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../constants/env");

const generateToken = (user) => {
  return jwt.sign(user, JWT_SECRET, { expiresIn: "1d" });
};

export const verifyAccessToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

module.exports = { generateToken, verifyAccessToken };
