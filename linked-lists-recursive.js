// Node: building blocks of a linked list
const LinkedList = require("./linked-lists-iterative.js");
const Node = require("./node.js");

// Linked List: Recursive using Factories
function LinkedListRecursive(head = null) {
  this.head = head;
}

LinkedListRecursive.prototype.append = function (value, head = this.head) {
  if (this.head === null) {
    this.head = new Node(value);
    return;
  }
  if (head === null) return new Node(value);
  else head.nextNode = this.append(value, head.nextNode);
  return head;
};

LinkedListRecursive.prototype.prepend = function (value) {
  if (this.head === null) {
    this.head = new Node(value);
    return;
  }
  const newHead = new Node(value, this.head);
  this.head = newHead;
};

LinkedListRecursive.prototype.size = function (head = this.head, total = 0) {
  if (head === null) return total;
  return this.size(head.nextNode, ++total);
};

LinkedListRecursive.prototype.getHead = function () {
  return this.head;
};

LinkedListRecursive.prototype.tail = function (head = this.head) {
  if (head === null) return head;
  if (head.nextNode === null) return head;
  return this.tail(head.nextNode);
};

LinkedListRecursive.prototype.at = function (
  index,
  counter = 0,
  head = this.head
) {
  if (head === null) return;
  if (index === counter) return head;
  return this.at(index, counter + 1, head.nextNode);
};

LinkedListRecursive.prototype.pop = function (head = this.head, prev = null) {
  // no elements / empty
  if (head === null) return;
  // single node linked list
  if ((prev === null && head.nextNode) === null) {
    this.head = null;
    return;
  }
  // if at last node & previous isn't null,
  if (head.nextNode === null && prev !== null) prev.nextNode = null;
  return this.pop(head.nextNode, head);
};

LinkedListRecursive.prototype.contains = function (value, head = this.head) {
  if (head.value === value) return true;
  if (head.nextNode === null) return false;
  return this.contains(value, head.nextNode);
};

LinkedListRecursive.prototype.find = function (
  value,
  head = this.head,
  index = 0
) {
  if (head.value === value) return index;
  if (head.nextNode === null) return null;
  return this.find(value, head.nextNode, index + 1);
};

LinkedListRecursive.prototype.toString = function (head = this.head) {
  if (this.head === null) return null;
  if (head === null) return null;
  return `( ${head.value} ) -> ${this.toString(head.nextNode)}`;
};

module.exports = function () {
  return new LinkedListRecursive();
};
