'use strict';

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const expect = chai.expect;

const Stack = require('../lib/stack');

describe('Stack', function () {
  describe('a new stack', function () {
    const stack = new Stack();
    it('is empty', function () {
      expect(stack.isEmpty).to.be.true;
    });
  });

  const stack = new Stack();

  describe('push', function () {

    it('adds element to stack', function () {
      stack.push(1);
      expect(stack._store[0]).to.equal(1);
    });

    it('adds element to the top of the stack', function () {
      expect(stack.push(2)._store[1]).to.equal(2);
    });
  });

  describe('pop', function() {

    it('removes an element', function() {
      stack.pop();
      expect(stack._store[1]).to.be.undefined;
    });

    it('removes an element from the top of the stack', function() {
      expect(stack._store[0]).to.equal(1);
    });
  });
});
