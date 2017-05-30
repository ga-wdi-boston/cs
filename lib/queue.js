'use strict';

const Queue = function () {
  Object.defineProperty(this, '_store', {
    value: [],
  });
};

Object.defineProperty(Queue.prototype, 'isEmpty', {
  get() {
    return this._store.length === 0;
  },
});

Queue.prototype.enqueue = function (value) {
  this._store.push(value);
  return this;
};

module.exports = Queue;
