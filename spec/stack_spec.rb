# frozen_string_literal: true

require_relative '../lib/stack.rb'

RSpec.describe Stack do
  context 'a new stack' do
    stack = Stack.new
    it 'is empty' do
      expect(stack.empty?).to eq(true)
    end
    it 'adds an element to the stack' do
      stack.push(1)
      expect(stack.empty?).to eq(false)
    end
    it 'adds element to the top of the stack' do
      stack.push(2)
      expect(stack.instance_variable_get(:@store)[-1]).to eq(2)
    end
  end
end
