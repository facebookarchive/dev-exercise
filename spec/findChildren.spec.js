const expect = require('chai').expect;

const findChildren = require('./../src/findChildren');


describe('findChildren', function () {
  it('should return correct b children', function () {
    const tree = {
      id: 'a',
      children: [{
        id: 'b',
        children: [{
          id: 'd',
          children: []
        }]
      }, {
        id: 'c',
        children: []
      }]
    };


    expect(
      findChildren('b', tree)
    ).to.equal(
      tree.children[0].children
    )
  });

  it('should return correct c children', function () {
    const tree = {
      id: 'a',
      children: [{
        id: 'b',
        children: [{
          id: 'd',
          children: []
        }]
      }, {
        id: 'c',
        children: []
      }]
    };


    expect(
      findChildren('c', tree)
    ).to.equal(
      tree.children[1].children
    )
  });

  it('should return null when no children are found', function () {
    const tree = {
      id: 'a',
      children: [{
        id: 'b',
        children: [{
          id: 'd',
          children: []
        }]
      }, {
        id: 'c',
        children: []
      }]
    };


    expect(
      findChildren('z', tree)
    ).to.equal(null)
  });
});
