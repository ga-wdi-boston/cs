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

  const queue = new Queue();

  describe('enqueue', function () {
    it('adds element to queue', function () {
      queue.enqueue(1);
      expect(queue._store[0]).to.equal(1);
    });

    it('adds element to the tail of the queue', function () {
      expect(queue.enqueue(2)._store[1]).to.equal(2);
    });
  });

  describe('dequeue', function () {
    it('removes an element', function () {
      queue.dequeue();
      expect(queue._store[1]).to.be.undefined;
    });

    it('removes an element from the head of the queue', function() {
      expect(queue._store[0]).to.equal(2);
    });
  });
});
