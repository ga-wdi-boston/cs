[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Computer Science

[Computer science](https://en.wikipedia.org/wiki/Computer_science) as an area of
study comprises everything necessary for the design, construction, and use of
computers.

We'll focus on one area of theoretical computer science, algorithms and data
structures, and  begin with abstract data types.

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

## Discussion: Stack

Stack operations:

-   `empty?` - check to see if there are any items on the stack.
-   `push` - add an item onto the top of the stack.
-   `pop` - remove and return an item from the top of the stack.

Stack implementations:

-   As an [array](http://www.cs.usfca.edu/~galles/visualization/StackArray.html).
-   As a [list](http://www.cs.usfca.edu/~galles/visualization/StackLL.html).

## Discussion: Queue

Queue operations:

-   `empty?` - check to see if there are any items in the queue.
-   `enqueue` - add an item to the tail of the queue.
-   `dequeue` - remove an item from the head of the queue.

Queue implementations:

-   As an [array](http://www.cs.usfca.edu/~galles/visualization/QueueArray.html)
-   As a [list](http://www.cs.usfca.edu/~galles/visualization/QueueLL.html)

## Language details

In languages that have a "nothing" type, `nil` in Ruby or `undefined` in
JavaScript, `empty?` need not be implemented.  Instead, check for that type when
calling `pop` or `dequeue`.

### Lab: List

List operations:

-   empty? -
-   prepend -
-   append -
-   first -
-   next -

In your squads, discuss implementing a list in an array.

How would you implement each of the operations?

What if this theoretical array type only provided index based access to elements
(i.e. the `[]` operator) and required explicit allocation of space for elements?
Would this change your implementation significantly?  How would you handle
adding an item to a "full" array?

## Additional Resources

-   [Data Structure Visulizations](http://www.cs.usfca.edu/~galles/visualization/Algorithms.html).

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
