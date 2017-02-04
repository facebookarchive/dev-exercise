const expect = require('chai').expect;

const createObject = require('./../src/prototype');


describe('createObject', function () {
  it('should return an object with getMessage function', function () {
    expect(
      createObject('message').getMessage
    ).to.be.a('function');
  });

  it('should return an object with getMessage on the prototype', function () {
    const object = createObject('message');
    expect(
      object.hasOwnProperty('getMessage')
    ).to.equal(false);
  });

  describe('getMessage', function () {
    it('should return correct text', function () {
      expect(
        createObject('message').getMessage()
      ).to.equal('message');
    });
  });
});
