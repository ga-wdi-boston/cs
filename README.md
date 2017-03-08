[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Computer Science: An introduction

[Computer science](https://en.wikipedia.org/wiki/Computer_science) as an area of
study comprises everything necessary for the design, construction, and use of
computers.

We'll focus on one area of theoretical computer science, algorithms and data
structures, and begin with abstract data types.

## Prerequisites

-   Familiarity with a high-level programming language implementing dynamic
    arrays.

## Objectives

By the end of this, developers should be able to:

-   Define abstract data type (ADT).
-   Create stacks and queues from dynamic arrays.

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.

## Abstract data type (ADT)

An [ADT](https://en.wikipedia.org/wiki/Abstract_data_type) is a type defined by
what it does, rather than how it is implemented.  Specific implementations have
limitations not found in the ADT and must be able to create instances of the
type.

## Stack

A stack implements a last in, first out data store (LIFO).  

### Discussion: Stack

Stack operations:

-   `empty?` - check to see if there are any items on a stack.
-   `push` - add an item onto the top of a stack.
-   `pop` - remove and return an item from the top of a stack.

Visualizing stack implementations:

-   As an [array](http://www.cs.usfca.edu/~galles/visualization/StackArray.html).
-   As a [list](http://www.cs.usfca.edu/~galles/visualization/StackLL.html).

### Code along: Implementing a stack in JavaScript

### Lab: Implementing a stack in Ruby

## Queue

A queue implements a first in, first out data store (FIFO).

### Discussion: Queue

Queue operations:

-   `empty?` - check to see if there are any items in a queue.
-   `enqueue` - add an item to the tail of a queue.
-   `dequeue` - remove an item from the head of a queue.

Visualizing queue implementations:

-   As an [array](http://www.cs.usfca.edu/~galles/visualization/QueueArray.html)
-   As a [list](http://www.cs.usfca.edu/~galles/visualization/QueueLL.html)

### Code along: Implementing a queue in JavaScript

### Lab: Implementing a queue in Ruby

## Implementation details

Do we need `empty?` (or `isEmpty` or `isempty`) when implementing either ADT in
a language that has a "nothing" type  (`nil` in Ruby, `undefined` in JavaScript,
or `None` in Python)?  Why or why not?

How should we handle the limitations of concrete implementations of either ADT?

## List

### Discussion: List

List operations:

-   `empty?` - check to see if there are any items in a list.
-   `first` - return the item at the head of a list.
-   `rest` - return the tail of a list - the list comprised of all elements
    except the head (the element containing the item returned by first).
-   `prepend` - create a one element list and add the existing head as its tail.
-   `delete` - replace a list with `rest`, removing the head.

### Lab: List

In your squads, discuss implementing these operations using an array.

What if this theoretical array type only provided index based access to elements
(i.e. the `[]` operator) and required explicit allocation of space for elements?
Would this change your implementation significantly?  How would you handle
adding an item to a "full" array?

## Additional Resources

-   [Data Structure Visualizations](http://www.cs.usfca.edu/~galles/visualization/Algorithms.html).

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
