# frozen_string_literal: true

# A queue class
class Fifo
  def initialize
    @store = []
  end

  def empty?
    @store.empty?
  end

  def enqueue(value)
    @store.push(value)
    self
  end

  def dequeue
    @store.shift
  end
end
