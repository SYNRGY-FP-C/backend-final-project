const app = require('../../app');
const request = require('supertest');
const models = require("../../app/models");
const Room = models.Room;


describe('GET /v1/rooms',() => {
    it('return 200 ok', (done) => {
         request(app)
        .get('/v1/rooms')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200,done)
    });
});

describe('GET /v1/rooms/:roomId',() => {
    it('return 200 ok get ID', (done) => {
        request(app)
        .get('/v1/rooms/1')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done)
    });
});

// describe('DELETE /v1/rooms/:roomId', () => {
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
//             label:"label",
//             quantity:2,
//             max_person:5,
//             available_room:0,
//             created_date: new Date()
//         });
//         await request(app)
//         .delete('/v1/rooms/' + room.id)
//         .expect(204);
//     });
// });