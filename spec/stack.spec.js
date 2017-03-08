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
});
