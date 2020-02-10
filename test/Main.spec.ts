import Main from '../src/Main';

describe('Main', () => {

  const main = new Main();

  describe('getHello', () => {

    it('should return greeting', () => {

      const result = main.getHello();

      expect(result).toEqual(Main.GREETING);
    })

  });

})