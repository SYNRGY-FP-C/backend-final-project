const bcrypt = require("bcrypt");

const encrypt = (code) => {
  return bcrypt.hashSync(code, 10);
};

const verifyHash = (code, token) => {
  return bcrypt.compareSync(code, token);
};

module.exports = {
  encrypt,
  verifyHash,
};
