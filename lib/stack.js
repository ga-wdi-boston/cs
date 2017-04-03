'use strict';

// Constructor for Stack datatype
const Stack = function () {
  // Add storage for items stored on the stack
  // Keep it hidden
  Object.defineProperty(this, '_store', {
    value: [],
  });
};

// Add a read only property to tell us if the stack is empty.
Object.defineProperty(Stack.prototype, 'isEmpty', {
  enumerable: true,
  get() {
    return this._store.length === 0;
  },
});

// Add a push method to add items to the top of the stack
// return the stack to allow method chaining
Stack.prototype.push = function (value) {
  this._store.push(value);
  return this;
};

// pop top item off the stack.
Stack.prototype.pop = function () {
  return this._store.pop();
};

module.exports = Stack;
