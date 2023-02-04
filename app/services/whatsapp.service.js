const axios = require("../../utils/axios");

const sendMessage = async (phone_number, code) => {
  await axios.post("/api/messages", {
    phone_number: phone_number,
    message: `Kode verifikasi kosthub kamu: ${code}`,
  });
};

module.exports = {
  sendMessage,
};
