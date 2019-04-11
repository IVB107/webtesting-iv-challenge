const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {

  // beforeEach( async () => {
  //   await db('hobbits').truncate();
  // })

  describe('GET /', () => {

    it('Should return status code 200', () => {
      // with asnyc requests, use 'return' to wait for promise to resolve
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200);
        })
    });
  });

  describe('POST /', () => {
    it('Should respond with a created resource', () => {
      // stuff
    })
  })

});