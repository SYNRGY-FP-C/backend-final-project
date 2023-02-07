const request = require("supertest");
const app = require("../../app");
const { Transaction } = require("../../app/models");
const { faker } = require("@faker-js/faker");

describe("Test API Transaction", () => {
  describe("GET /transaction => Get All", () => {
    let account;
    beforeAll(async () => {
      account = await Account.create({
        email: faker.internet.email(),
        phone: faker.phone.number(),
        password: encrypt(faker.internet.password()),
      });
    });

    it("should respond with a 200 status code", async () => {
      await request(app)
        .post("/api/verify/request")
        .send({
          email: account.email,
        })
        .expect(200);
    });

    it("should respond with a 200 status code", async () => {
      await request(app)
        .post("/api/verify/request")
        .send({
          phone: account.phone,
        })
        .expect(200);
    });
  });

  describe("POST /verify/request => Request OTP", () => {
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
        .post("/api/verify")
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
        .post("/api/verify")
        .send({
          phone: account.phone,
          code: code,
        })
        .expect(200);
    });
  });
});
