const app = require("../../app");
const request = require("supertest");
const { Kost } = require("../../app/models");

describe("GET /v1/kosts", () => {
  it("return 200 ok", (done) => {
    request(app)
      .get("/v1/kosts")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, done);
  });
});

describe("GET /v1/kosts/:id", () => {
  it("return 200 ok get ID", (done) => {
    request(app)
      .get("/v1/kosts/1")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, done);
  });
});

// describe('DELETE /v1/room/:id', () => {
//     it('respond 204 Delete OK', async () => {
//         const room = await Room.create({
//             owner_id :null,
//             kost_id :1,
//             thumbnail_id :null,
//             price : null,
//             name:"Kost apa aja tes delete",
//             description: null,
//             room_number: null,
//             capacity: null,
//             width:null,
//             length:null,
//             quantity:2,
//             available_room:0
//         });
//         request(app)
//         .delete('/v1/room/' + room.id)
//         .expect('Content-Type', 'application/json; charset=utf-8')
//         .expect(204);
//     });
// });
