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
}

//
// Console Logging Functions
//

const logBefore = (string, linkedList) => {
  console.warn(`\n# ${string}`);
  console.log(`- before: ${linkedList.toString()}`);
};

const logAfter = (linkedList) => {
  console.log(`- after:  ${linkedList.toString()}`);
};

const logValue = (description, callback) => {
  console.log(`- ${description}: ${callback}`);
};

//
// Test Data
//

console.log("odin project assignment #14\nlinked lists\n");

const myList = new LinkedList();

logBefore(".append(): add node to the end of a linked list", myList);
myList.append("A");
myList.append("B");
myList.append("C");
myList.append("D");
logAfter(myList);

logBefore(".prepend(): add node to the beginning of a linked list", myList);
myList.prepend("0");
logAfter(myList);

logBefore(".size(): return total size of linked list (length)", myList);
logValue("size", myList.size());

logBefore(".tail(): return last node of a linked list", myList);
logValue("tail", myList.tail().value);

logBefore(".at(): return node at given index", myList);
logValue("[2]", myList.at(2).value);

logBefore(".pop(): remove the last node in a linked list", myList);
myList.pop();
logAfter(myList);

logBefore(".contains(): return true if linked list contains a value", myList);
logValue("contains B", myList.contains("B"));
logValue("contains G", myList.contains("G"));

logBefore(".find(): find a value in a linked list & return the index", myList);
logValue("find A", myList.find("A"));
logValue("find T", myList.find("T"));

logBefore(".insertAt(): insert new node at a given index", myList);
console.log("- HI at index 2");
myList.insertAt("HI", 2);
logAfter(myList);

logBefore(".removeAt(): remove node at a given index", myList);
console.log("- index 2");
myList.removeAt(2);
logAfter(myList);
