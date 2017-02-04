const expect = require('chai').expect;
const jsdom = require('jsdom');

const getElement = require('./../src/getElement');

describe('Element', function () {
  let document;

  beforeEach(function (done) {
    jsdom.env('<div id="dontfindme"></div><div class="hello">You found me</div>', function (err, window) {
      document = window.document;
      done();
    });
  });

  it('should return correct element when element with id is present', function () {
    expect(
      getElement(document, '.hello').textContent
    ).to.equal('You found me');
  });

  it('should return null when element with id is present', function () {
    expect(
      getElement(document, '.notfound')
    ).to.equal(null);
  });
})
