const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../constants/env");

const generateToken = (user) => {
  return jwt.sign(user, JWT_SECRET, { expiresIn: "1d" });
};

const verifyAccessToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

const decodeToken = (token) => {
  return jwt.decode(token);
};

module.exports = { generateToken, decodeToken, verifyAccessToken };
