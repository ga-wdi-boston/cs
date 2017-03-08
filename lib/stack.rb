# frozen_string_literal: true

# A queue class
class Stack
  def initialize
    @store = []
  end

  def empty?
    @store.empty?
  end

  def push(value)
    @store.push(value)
    self
  end

  def pop
    @store.pop
  end
end
