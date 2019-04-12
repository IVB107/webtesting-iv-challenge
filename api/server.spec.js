const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {

  describe('GET /', () => {

    it('Should return status code 200', () => {
      // with asnyc requests, use 'return' to wait for promise to resolve
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200);
        })
    });

    it('Should return a list of characters', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.text).toBe('Welcome to the app!');
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        })
    });

  });

  describe('POST /', () => {

    it('Should respond with a status code 201', () => {
      const char = { name: 'King Roland' };
      // stuff
      return request(server)
        .post('/chars')
        .send(char)
        .then(res => {
          expect(res.status).toBe(201);
        })
    })

    it('Should return the added character', async () => {
      const char = { name: 'Some other dude' };
      const response = await request(server).post('/chars').send(char);

      expect(response.body.name).toBe('Some other dude');
    })
  })

  // describe('Delete /', () => {

  //   it('Should respond with a status code 204', () => {
  //     const char = req.
  //     // stuff
  //     return request(server)
  //       .delete('/chars')
  //       .send(char)
  //       .then(res => {
  //         expect(res.status).toBe(204);
  //       })
  //   })

  // })

});