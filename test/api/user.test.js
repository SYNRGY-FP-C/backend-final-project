const request = require("supertest");
const app = require("../../app");

describe("Test API Router", () => {
  describe("GET /users => Users", () => {
    it("should respond with a 200 status code", async () => {
      await request(app).get("/v1/users").expect(200);
    });
  });
});
