'use strict';

const Stack = function () {
  Object.defineProperty(this, '_store', {
    value: [],
  });
};

Object.defineProperty(Stack.prototype, 'isEmpty', {
  get() {
    return this._store.length === 0;
  },
});

Stack.prototype.push = function(value) {
  this._store.push(value);
  return this;
};

Stack.prototype.pop = function() {
  return this._store.pop();
};

module.exports = Stack;
