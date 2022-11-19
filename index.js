//  Node: building blocks of a linked list
const LinkedList = require("./linked-lists-iterative");
const log = require("./logging");
//
// Test Data
//

console.log("odin project assignment #14\nlinked lists [bmilcs]");

const myList = new LinkedList();

// append()
log.methodDescription(
  ".append(): add node to the end of a linked list",
  myList
);
myList.append("A");
myList.append("B");
myList.append("C");
myList.append("D");
log.methodEffects(myList);

// prepend()
log.methodDescription(
  ".prepend(): add node to the beginning of a linked list",
  myList
);
myList.prepend("0");
log.methodEffects(myList);

// size()
log.methodDescription(
  ".size(): return total size of linked list (length)",
  myList
);
log.methodReturnVal("size", myList.size());

// tail()
log.methodDescription(".tail(): return last node of a linked list", myList);
log.methodReturnVal("tail", myList.tail().value);

// at()
log.methodDescription(".at(): return node at given index", myList);
log.methodReturnVal("[2]", myList.at(2).value);

// pop()
log.methodDescription(".pop(): remove the last node in a linked list", myList);
myList.pop();
log.methodEffects(myList);

// contains()
log.methodDescription(
  ".contains(): return true if linked list contains a value",
  myList
);
log.methodReturnVal("contains B", myList.contains("B"));
log.methodReturnVal("contains G", myList.contains("G"));

// find()
log.methodDescription(
  ".find(): find a value in a linked list & return the index",
  myList
);
log.methodReturnVal("find A", myList.find("A"));
log.methodReturnVal("find T", myList.find("T"));

// insertAt()
log.methodDescription(".insertAt(): insert new node at a given index", myList);
console.log("- insert HI at index 2");
myList.insertAt("HI", 2);
log.methodEffects(myList);

// removeAt()
log.methodDescription(".removeAt(): remove node at a given index", myList);
console.log("- remove index 2");
myList.removeAt(2);
log.methodEffects(myList);

// reverse()
log.methodDescription(".reverse(): reverse order of a linked list", myList);
myList.reverse();
log.methodEffects(myList);
