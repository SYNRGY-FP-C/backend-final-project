const mailer = require("../../configs/mailer.config");

const sendEmail = async (email, code) => {
  await mailer.sendMail({
    to: email,
    subject: "KostHub Verification",
    text: `Kode verifikasi kosthub kamu: ${code}`,
  });
};

module.exports = { sendEmail };
