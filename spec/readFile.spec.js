const expect = require('chai').expect;

const readFile = require('./../src/readFile');

describe.only('readFile', function () {
  describe('When file resolves', function () {
    it('should resolve with correct contents', function () {
      return readFile(__dirname + '/../src/file.json')
        .then((resp) => {
          expect(resp).to.eql({
            success: true
          })
        });
    });
  });

  describe('When file does not exist', function () {
    it('should reject with correct error', function (done) {
      readFile('nosuchfile.json')
        .then(null, (err) => {
          done();
        });
    });
  });
});
