//  Node: building blocks of a linked list
module.exports = class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
};
