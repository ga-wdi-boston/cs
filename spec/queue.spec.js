'use strict';

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const expect = chai.expect;

const Queue = require('../lib/queue');

describe('Queue', function () {
  describe('a new queue', function () {
    const queue = new Queue();
    it('is empty', function () {
      expect(queue.isEmpty).to.be.true;
    });
  });
});
