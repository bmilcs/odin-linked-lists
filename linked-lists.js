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
}

//
// Console Logging Functions
//

const logMethodDescription = (string, linkedList) => {
  console.warn(`\n# ${string}`);
  console.log(`- before: ${linkedList.toString()}`);
};

const logMethodEffects = (linkedList) => {
  console.log(`- after:  ${linkedList.toString()}`);
};

const logMethodReturnVal = (description, callback) => {
  console.log(`- ${description}: ${callback}`);
};

//
// Test Data
//

console.log("odin project assignment #14\nlinked lists [bmilcs]");

const myList = new LinkedList();

// append()
logMethodDescription(".append(): add node to the end of a linked list", myList);
myList.append("A");
myList.append("B");
myList.append("C");
myList.append("D");
logMethodEffects(myList);

// prepend()
logMethodDescription(
  ".prepend(): add node to the beginning of a linked list",
  myList
);
myList.prepend("0");
logMethodEffects(myList);

// size()
logMethodDescription(
  ".size(): return total size of linked list (length)",
  myList
);
logMethodReturnVal("size", myList.size());

// tail()
logMethodDescription(".tail(): return last node of a linked list", myList);
logMethodReturnVal("tail", myList.tail().value);

// at()
logMethodDescription(".at(): return node at given index", myList);
logMethodReturnVal("[2]", myList.at(2).value);

// pop()
logMethodDescription(".pop(): remove the last node in a linked list", myList);
myList.pop();
logMethodEffects(myList);

// contains()
logMethodDescription(
  ".contains(): return true if linked list contains a value",
  myList
);
logMethodReturnVal("contains B", myList.contains("B"));
logMethodReturnVal("contains G", myList.contains("G"));

// find()
logMethodDescription(
  ".find(): find a value in a linked list & return the index",
  myList
);
logMethodReturnVal("find A", myList.find("A"));
logMethodReturnVal("find T", myList.find("T"));

// insertAt()
logMethodDescription(".insertAt(): insert new node at a given index", myList);
console.log("- insert HI at index 2");
myList.insertAt("HI", 2);
logMethodEffects(myList);

// removeAt()
logMethodDescription(".removeAt(): remove node at a given index", myList);
console.log("- remove index 2");
myList.removeAt(2);
logMethodEffects(myList);

// reverse()
logMethodDescription(".reverse(): reverse order of a linked list", myList);
myList.reverse();
logMethodEffects(myList);
