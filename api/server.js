const express = require('express');

const server = express();

server.use(express.json());

// GET --> '/'
server.get('/', async (req, res) => {
  res.status(200).send("Welcome to the app!");
});

module.exports = server;