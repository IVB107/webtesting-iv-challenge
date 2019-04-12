const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(character) {
  const [id] = await db('sbChars').insert(character);
  return db('sbChars')
    .where({id})
    .first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return db('sbChars')
    .where({ id})
    .del();
}

function getAll() {
  return db('sbChars');
}

function findById(id) {
  return null;
}