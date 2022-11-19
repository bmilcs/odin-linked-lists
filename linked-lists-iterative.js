// Node: building blocks of a linked list
const Node = require("./node.js");

//  Linked List: Iterative using Classes
module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // add new node containing value to END of list
  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    currentNode = new Node(value);
    if (previousNode !== null) previousNode.nextNode = currentNode;
  }

  // add new node containing value to START of list
  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return;
    }
    const newHead = new Node(value, this.head);
    this.head = newHead;
  }

  // returns total # of nodes in list
  size() {
    let listLength = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      ++listLength;
      currentNode = currentNode.nextNode;
    }

    return listLength;
  }

  // returns first node in list
  head() {
    return this.head;
  }

  // returns last node in list
  tail() {
    let currentNode = this.head;
    while (currentNode.nextNode !== null) currentNode = currentNode.nextNode;
    return currentNode;
  }

  // returns node at given index
  at(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) currentNode = currentNode.nextNode;
    return currentNode;
  }

  // remove last node from list
  pop() {
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.nextNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    previousNode.nextNode = null;
  }

  // returns true if value is present in list
  contains(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  // returns index of node containing value, or null if not found
  find(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) return index;
      currentNode = currentNode.nextNode;
      ++index;
    }
    return null;
  }

  toString() {
    // prints linked list objects as strings to console
    let string = "";
    let currentNode = this.head;

    while (currentNode !== null) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    return `${string}null`;
  }

  //
  // extra credit!
  //

  // inserts new node @ provided index
  insertAt(value, index) {
    let previousNode = null;
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex !== index) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      ++currentIndex;
    }

    previousNode.nextNode = new Node(value, currentNode);
  }

  // removes node at given index
  removeAt(index) {
    let previousNode = null;
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex !== index) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      ++currentIndex;
    }

    const nextNode = currentNode.nextNode;
    previousNode.nextNode = nextNode;
  }

  //
  // bonus!
  //

  // reverse the order of a linked list
  reverse() {
    let current = this.head;
    let nextBackup = null;
    let prevNode = null;

    while (current !== null) {
      // backup original nextNode
      nextBackup = current.nextNode;

      // sever next, change next to previous element
      current.nextNode = prevNode;

      // prepare for next iteration
      prevNode = current;
      current = nextBackup;
    }

    // finally, update list's head node
    this.head = prevNode;
  }
};
