# frozen_string_literal: true

# A queue class
class Fifo
  attr_accessor :value
  def initialize(value = 0)
    @value = value
  end
end
