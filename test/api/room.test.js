const app = require('../../app');
const request = require('supertest');
const { Room } = require('../../app/models'); 


describe('GET /v1/room',() => {
    it('return 200 ok', async() => {
        await request(app)
        .get('/v1/room')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
    });
});

describe('GET /v1/room/:id',() => {
    it('return 200 ok get ID', async() => {
        await request(app)
        .get('/v1/room/1')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
    });
});

describe('POST /v1/room',() => {
    it('return 201 created ok', async () => {
        const payload = {
            owner_id :null,
            kost_id :1,
            thumbnail_id :null,
            price : null,
            name:"Kost apa aja tes",
            description: null,
            room_number: null,
            capacity: null,
            width:null,
            length:null,
            quantity:2,
            available_room:0
        };
        await request(app)
        .post('/v1/room')
        .send(payload)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(201)
    });
});

describe('PUT /v1/room/:id',() => {
    it('return 200 updated OK', async () => {
        const payloadCreate = {
            owner_id :null,
            kost_id :1,
            thumbnail_id :null,
            price : null,
            name:"Kost apa aja tes update",
            description: null,
            room_number: null,
            capacity: null,
            width:null,
            length:null,
            quantity:2,
            available_room:0
        };

        const payloadUpdate = {
            owner_id :null,
            kost_id :1,
            thumbnail_id :null,
            price : null,
            name:"Kost udah terupdate nich",
            description: null,
            room_number: null,
            capacity: null,
            width:null,
            length:null,
            quantity:3,
            available_room:0
        };

        const room = await Room.create(payloadCreate);
        await request(app)
        .put('/v1/room/'+ room.id)
        .send(payloadUpdate)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
    });
});

describe('DELETE /v1/room/:id', () => {
    it('respond 204 Delete OK', async () => {
        const room = await Room.create({
            owner_id :null,
            kost_id :1,
            thumbnail_id :null,
            price : null,
            name:"Kost apa aja tes delete",
            description: null,
            room_number: null,
            capacity: null,
            width:null,
            length:null,
            quantity:2,
            available_room:0
        });
        request(app)
        .delete('/v1/room/' + room.id)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(204);
    });
});