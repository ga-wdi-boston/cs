# frozen_string_literal: true

# A queue class
class Fifo
  # allocating space for items on our queue
  def initialize
    @store = []
  end

  # Is this queue empty
  def empty?
    @store.empty?
  end

  # add item to the end of the queue
  # return self to allow method chaining
  def enqueue(value)
    @store.push(value)
    self
  end

  # remove item from the front of the queue
  def dequeue
    @store.shift
  end
end
