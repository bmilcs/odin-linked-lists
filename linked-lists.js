//  Node: building blocks of a linked list
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

//  LinkedList: full list
class LinkedList {
  constructor() {
    this.head = new Node();
  }

  append(value) {
    // add new node containing value to END of list
  }

  prepend(value) {
    // add new node containing value to START of list
  }

  size() {
    // returns total # of nodes in list
  }

  head() {
    // returns first node in list
  }

  tail() {
    // returns last node in list
  }

  at(index) {
    // returns node at given index
  }

  pop() {
    // remove last node from list
  }

  contains(value) {
    // returns true if value is present in list
  }

  find(value) {
    // returns index of node containing value, or null if not found
  }

  toString() {
    // prints linked list objects as strings to console
    // ( value ) -> ( value ) -> null
  }

  //
  // extra credit!
  //

  insertAt(value, index) {
    // inserts new node @ provided index
  }

  removeAt(index) {
    // removes node at given index
  }
}

const myList = new LinkedList();
console.log({ myList });
console.log(myList.head);
