# frozen_string_literal: true

require_relative '../lib/stack.rb'

RSpec.describe Stack do
  context 'a new stack' do
    stack = Stack.new
    it 'is empty' do
      expect(stack.empty?).to eq(true)
    end
  end
  context 'push' do
    stack = Stack.new
    it 'adds an element to the stack' do
      stack.push(1)
      expect(stack.empty?).to eq(false)
    end
    it 'adds element to the top of the stack' do
      stack.push(2)
      expect(stack.instance_variable_get(:@store)[-1]).to eq(2)
    end
  end
  context 'pop' do
    stack = Stack.new
    stack.push(1).push(2)
    it 'removes an element from the top of the stack' do
      stack.pop
      expect(stack.instance_variable_get(:@store)[1]).to be_nil
      expect(stack.instance_variable_get(:@store)[0]).to eq(1)
    end
  end
end
