//  Node: building blocks of a linked list
const LinkedListIterative = require("./linked-lists-iterative");
const LinkedListRecursive = require("./linked-lists-iterative");
const log = require("./logging");
//
// Test Data
//

console.log("odin project assignment #14\nlinked lists [bmilcs]\n");

const myIterativeList = new LinkedListIterative();

// append()
log.methodDescription(
  ".append(): add node to the end of a linked list",
  myIterativeList
);
myIterativeList.append("A");
myIterativeList.append("B");
myIterativeList.append("C");
myIterativeList.append("D");
log.methodEffects(myIterativeList);

// prepend()
log.methodDescription(
  ".prepend(): add node to the beginning of a linked list",
  myIterativeList
);
myIterativeList.prepend("0");
log.methodEffects(myIterativeList);

// size()
log.methodDescription(
  ".size(): return total size of linked list (length)",
  myIterativeList
);
log.methodReturnVal("size", myIterativeList.size());

// tail()
log.methodDescription(
  ".tail(): return last node of a linked list",
  myIterativeList
);
log.methodReturnVal("tail", myIterativeList.tail().value);

// at()
log.methodDescription(".at(): return node at given index", myIterativeList);
log.methodReturnVal("[2]", myIterativeList.at(2).value);

// pop()
log.methodDescription(
  ".pop(): remove the last node in a linked list",
  myIterativeList
);
myIterativeList.pop();
log.methodEffects(myIterativeList);

// contains()
log.methodDescription(
  ".contains(): return true if linked list contains a value",
  myIterativeList
);
log.methodReturnVal("contains B", myIterativeList.contains("B"));
log.methodReturnVal("contains G", myIterativeList.contains("G"));

// find()
log.methodDescription(
  ".find(): find a value in a linked list & return the index",
  myIterativeList
);
log.methodReturnVal("find A", myIterativeList.find("A"));
log.methodReturnVal("find T", myIterativeList.find("T"));

// insertAt()
log.methodDescription(
  ".insertAt(): insert new node at a given index",
  myIterativeList
);
console.log("- insert HI at index 2");
myIterativeList.insertAt("HI", 2);
log.methodEffects(myIterativeList);

// removeAt()
log.methodDescription(
  ".removeAt(): remove node at a given index",
  myIterativeList
);
console.log("- remove index 2");
myIterativeList.removeAt(2);
log.methodEffects(myIterativeList);

// reverse()
log.methodDescription(
  ".reverse(): reverse order of a linked list",
  myIterativeList
);
myIterativeList.reverse();
log.methodEffects(myIterativeList);

//
// recursive linked lists
//

const myRecursiveList = new LinkedListRecursive();

// append()
log.methodDescription(
  ".append(): add node to the end of a linked list",
  myRecursiveList
);
myRecursiveList.append("A");
myRecursiveList.append("B");
myRecursiveList.append("C");
myRecursiveList.append("D");
log.methodEffects(myRecursiveList);

// prepend()
log.methodDescription(
  ".prepend(): add node to the beginning of a linked list",
  myRecursiveList
);
myRecursiveList.prepend("0");
log.methodEffects(myRecursiveList);

// size()
log.methodDescription(
  ".size(): return total size of linked list (length)",
  myRecursiveList
);
log.methodReturnVal("size", myRecursiveList.size());

// tail()
log.methodDescription(
  ".tail(): return last node of a linked list",
  myRecursiveList
);
log.methodReturnVal("tail", myRecursiveList.tail().value);

// at()
log.methodDescription(".at(): return node at given index", myRecursiveList);
log.methodReturnVal("[2]", myRecursiveList.at(2).value);

// pop()
log.methodDescription(
  ".pop(): remove the last node in a linked list",
  myRecursiveList
);
myRecursiveList.pop();
log.methodEffects(myRecursiveList);

// contains()
log.methodDescription(
  ".contains(): return true if linked list contains a value",
  myRecursiveList
);
log.methodReturnVal("contains B", myRecursiveList.contains("B"));
log.methodReturnVal("contains G", myRecursiveList.contains("G"));

// find()
log.methodDescription(
  ".find(): find a value in a linked list & return the index",
  myRecursiveList
);
log.methodReturnVal("find A", myRecursiveList.find("A"));
log.methodReturnVal("find T", myRecursiveList.find("T"));
