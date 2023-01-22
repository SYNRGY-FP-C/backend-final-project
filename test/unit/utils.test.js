const { generateOTP } = require("../../utils/generator");

describe("Test Utils", () => {
  describe("Create Random 4 Digits OTP", () => {
    it("should return 4 digits string", () => {
      const otp = generateOTP();
      expect(otp).toHaveLength(4);
    });
  });
});
