const whatsappService = require("../services/whatsapp.service");

const request = async (req, res, next) => {
    try {
        const {email, phone_number} = req.body;
        const code = "1234";

        if(phone_number && !email )
        await whatsappService.sendMessage(phone_number, code);
 
        res.status(200).json({
            code: 200,
            status: "success",
            message: "Code sent successfully",
          });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    request
}