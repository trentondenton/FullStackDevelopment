# Data Structures

[Mind Map](https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link/c25f98c73a03f5b1107cd0e2f4bce29c9d78e31655e55cb0b785d56f0036c9d1)

----------------

## Arrays

----------------

### Array Types

- Static Array
  - Fixed size
  - Fast lookups
  - Slow insertions and deletions
  - Fast random access
  - Slow iteration
  - Fast access to first and last element
  - Slow access to middle elements
  - Fast access to elements at the end
- Dynamic Array
  - Resizable
  - Slow lookups
  - Fast insertions and deletions
  - Slow random access
  - Fast iteration
  - Slow access to first and last element
  - Fast access to middle elements
  - Slow access to elements at the end

### Array Methods

- push()
  - Adds an element to the end of an array
- pop()
  - Removes an element from the end of an array
- shift()
  - Removes an element from the beginning of an array
- unshift()
  - Adds an element to the beginning of an array
- slice()
  - Returns a shallow copy of a portion of an array into a new array object
- splice()
  - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
- sort()
  - Sorts the elements of an array in place and returns the array
- reverse()
  - Reverses an array in place. The first array element becomes the last, and the last array element becomes the first
- concat()
  - Returns a new array comprised of this array joined with other array(s) and/or value(s)
- join()
  - Joins all elements of an array into a string
- indexOf()
  - Returns the first index at which a given element can be found in the array, or -1 if it is not present
- lastIndexOf()
  - Returns the last index at which a given element can be found in the array, or -1 if it is not present
- forEach()
  - Executes a provided function once for each array element
- map()
  - Creates a new array with the results of calling a provided function on every element in this array
- filter()
  - Creates a new array with all elements that pass the test implemented by the provided function
- reduce()
  - Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value

----------------

## Hash Tables

----------------

### Hash Table Methods

- set()
  - Adds a key-value pair to the hash table
- get()
  - Returns the value associated with a key
- has()
  - Returns a boolean reflecting whether or not the key exists in the hash table
- delete()
  - Removes any value associated to the key
- keys()
  - Returns an array of all the keys in the hash table
- values()
  - Returns an array of all the values in the hash table
- entries()
  - Returns an array of all the entries in the hash table
- forEach()
  - Executes a provided function once for each key-value pair in the hash table
- clear()
  - Removes all key-value pairs from the hash table
- size()
  - Returns the number of key-value pairs in the hash table
- isEmpty()
  - Returns a boolean reflecting whether or not the hash table is empty
- loadFactor()
  - Returns the load factor for the hash table
- resize()
  - Resizes the internal storage array of the hash table
- hash()
  - Hashes a key into an integer index in the hash table
- rehash()
  - Rehashes all the keys in the hash table
- getPrime()
  - Returns the smallest prime number greater than or equal to the given number
- isPrime()
  - Returns a boolean reflecting whether or not the given number is prime
- resize()
  - Resizes the internal storage array of the hash table

### Hash Table Function

- A hash function is used to map a given key to a location in the hash table
- The ideal hash function has the following properties:
  - Fast (i.e. constant time)
  - Doesn't cluster outputs at specific indices, but distributes uniformly
  - Deterministic (same input yields same output)

### Hash Table Collision

- Two keys that get mapped to the same index in the hash table is called a collision

#### Separate Chaining

- Each index of the array contains another data structure (e.g. an array or a linked list) that holds the key-value pairs that map to that index

#### Linear Probing

- When we find a collision, we search through the array to find the next empty slot

#### Quadratic Probing

- When we find a collision, we search through the array to find the next empty slot. Instead of searching by 1, we search by the current index squared

#### Double Hashing

- When we find a collision, we search through the array to find the next empty slot. Instead of searching by 1, we search by another hash function

----------------

## Trees

----------------

### Tree Terminology

- Root
  - The top node in a tree
- Child
  - A node directly connected to another node when moving away from the Root
- Parent
  - The converse notion of a child
- Siblings
  - A group of nodes with the same parent
- Leaf
  - A node with no children
- Edge
  - The connection between one node and another

### Tree Types

- Binary Tree
  - Each node can have at most two children
  - Each node can have at most one parent
  - Binary Search Tree
    - The left subtree of a node contains only nodes with keys lesser than the node's key
    - The right subtree of a node contains only nodes with keys greater than the node's key
    - The left and right subtree each must also be a binary search tree
- Heap
  - Binary Heap
    - A complete binary tree
    - A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible
    - Max Heap
      - The parent is greater than or equal to the children
    - Min Heap
      - The parent is less than or equal to the children
- Trie
  - A tree data structure used to store associative arrays where the keys are usually strings
  - Each node in the trie represents a character in the key
  - Each path down the tree represents a key
- Linked List
  - A linear data structure where each element is a separate object
  - Each element (we will call it a node) of a list is comprising of two items - the data and a reference to the next node
  - Singly Linked List
    - Each node points to the next node in the list
  - Doubly Linked List
    - Each node points to the next node and the previous node in the list

### Tree Methods

- insert
  - Inserts a node into the tree
- search
  - Searches for a node in the tree
- delete
  - Deletes a node from the tree
- append
  - Appends a node to the end of the tree
- print
  - Prints the tree
- prepend
  - Adds a node to the beginning of the list
- lookup
  - Searches for a node in the list

----------------

## Stacks

----------------

----------------

## Queues

----------------

----------------

## Graphs

----------------
