const request = require("supertest");
const app = require("../../app");
const { Account, OTP } = require("../../app/models");
const { faker } = require("@faker-js/faker");
const { encrypt } = require("../../utils/bcrypt");
const { generateOTP } = require("../../utils/generator");

describe("Test API Verification", () => {
  let account;
  beforeAll(async () => {
    account = await Account.create({
      email: faker.internet.email(),
      phone: faker.phone.number(),
      password: encrypt(faker.internet.password()),
    });
  });
  describe("POST /verify/request => Request OTP", () => {
    it("should respond with a 200 status code", async () => {
      await request(app)
        .post("/v1/verify/request")
        .send({
          email: account.email,
        })
        .expect(200);
    });

    it("should respond with a 200 status code", async () => {
      await request(app)
        .post("/v1/verify/request")
        .send({
          phone: account.phone,
        })
        .expect(200);
    });
  });

  describe("POST /verify => Verify OTP", () => {
    it("should respond with a 200 status code", async () => {
      account = await Account.create({
        email: faker.internet.email(),
        phone: faker.phone.number(),
        password: encrypt(faker.internet.password()),
      });
      const code = generateOTP();
      await OTP.create({
        token: encrypt(code),
        account_id: account.id,
      });

      await request(app)
        .post("/v1/verify")
        .send({
          email: account.email,
          code: code,
        })
        .expect(200);
    });

    it("should respond with a 200 status code", async () => {
      const account = await Account.create({
        email: faker.internet.email(),
        phone: faker.phone.number(),
        password: encrypt(faker.internet.password()),
      });

      const code = generateOTP();
      await OTP.create({
        token: encrypt(code),
        account_id: account.id,
      });

      await request(app)
        .post("/v1/verify")
        .send({
          phone: account.phone,
          code: code,
        })
        .expect(200);
    });
  });
});
