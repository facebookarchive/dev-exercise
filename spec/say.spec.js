const expect = require('chai').expect;

const say = require('./../src/say');


describe('say', function () {
  it('should return correct value', function () {
    expect(
      say('Hello')('World')
    ).to.equal('Hello World');
  });
});
