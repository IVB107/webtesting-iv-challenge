const db = require('../data/dbConfig');
const charsModel = require('./charsModel.js');

describe('charsModel.js', () => {

  beforeEach( async () => {
    await db('sbChars').truncate();
  })

  describe('Insert()', () => {

    it('Should insert the provided character', async () => {
      await charsModel.insert({ name: 'Gaffer' });
      await charsModel.insert({ name: 'Luis' });

      const chars = await db('sbChars');
      expect(chars).toHaveLength(2);
    });

    it('Should insert the provided character and check the name', async () => {

      let char = await charsModel.insert({ name: 'President Skroob' });
      expect(char.name).toBe('President Skroob');
      
    });

  });

  // describe('Remove()', async () => {
    
  //   it('Should remove the character specified by ID', async () => {
  //     const chars = await db('sbChars');
  //     await charsModel.remove({ id });

  //     expect(chars.id).toBeUndefined();
  //   })
  // })

});