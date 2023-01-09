const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAILER_SENDER_EMAIL,
    pass: process.env.MAILER_SENDER_PASSWORD,
  },
});

module.exports = transporter;
