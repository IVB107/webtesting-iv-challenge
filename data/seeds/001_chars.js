exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sbChars').del()
    .then(function () {
      // Inserts seed entries
      return knex('sbChars').insert([
        { name: 'Barf' },
        { name: 'Pizza the Hutt' },
        { name: "Lonestar" },
        { name: 'Yogurt' }
      ]);
    });
};
