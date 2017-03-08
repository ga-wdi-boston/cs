# frozen_string_literal: true

require_relative '../lib/queue.rb'

RSpec.describe Fifo do
  context 'a new queue' do
    queue = Fifo.new
    it 'is empty' do
      expect(queue.empty?).to eq(true)
    end
  end
end
