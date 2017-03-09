# frozen_string_literal: true

require_relative '../lib/stack.rb'

RSpec.describe Stack do
  context 'a new stack' do
    stack = Stack.new
    it 'is empty' do
      expect(stack.empty?).to eq(true)
    end
  end
end
