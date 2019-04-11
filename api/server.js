const express = require('express');

const Chars = require('../characters/charsModel');

const server = express();

server.use(express.json());

// GET --> '/'
server.get('/', async (req, res) => {
  res.status(200).send("Welcome to the app!");
});

server.post('/chars', async (req, res) => {
  try {
    const char = await Chars.insert(req.body);
    res.status(201).json(char)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

// server.delete('/chars/:id', async (req, res) => {
//   try {
//     const deleted = await Chars.remove(req.params.id);
//     res.status(204).json({ message: `Deleted character`});
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = server;