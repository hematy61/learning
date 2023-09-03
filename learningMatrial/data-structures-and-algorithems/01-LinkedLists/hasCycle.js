// @ts-check

/**
 * you can read more here: https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1212/
 */

/**
 * Linked list Node
 * @param {any} value
 */
function Node(value) {
  this.value = value;
  this.next = null;
}

/**
 * Linked list object
 *
 * @param {Node | null} node
 */
function LinkedList(node = null) {
  this.head = node;
  this.tail = node;
  this.length = 0;
}

/**
 * Appends a new node to the linked list
 * @param {number} value
 * @return {LinkedList}
 */
LinkedList.prototype.append = function (value) {
  if (!value) return this;

  const newNode = new Node(value);

  if (!this.head || !this.tail) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    // for description check prototype.js addAtTail method.
    this.tail.next = newNode;
    this.tail = newNode;
  }

  this.length++;
  return this;
};

/**
 * making a linked list of an array of numbers
 * @type {LinkedList}
 */
const myLinkedList = new LinkedList();
[1, 3, 2, 4, 5, 10, 8].forEach((element) => {
  myLinkedList.append(element);
});

// making a cycle at position 1 of the linked list.
/**
 * 1 ---> 3 ---> 2 ---> 4 ---> 5 ---> 10 ---> 8
 *        ^                                   |
 *        |                                   |
 *        ------------------------------------
 */
if (myLinkedList.tail) {
  myLinkedList.tail.next = myLinkedList.head?.next;
}

/**
 * The first solution that uses two pointer technique (slow pointer, fast pointer)
 * @param {Node} head
 * @return {boolean} true means that there is a loop, and false means that there is no loop in
 * the linked list
 */
function hasCycle(head) {
  // if the linked list has only one node, we return an early false
  if (!head?.next) return false;

  /**
   * slowPointer moves one node at a time
   * @type {Node}
   */
  let slowPointer = head;

  /**
   * fastPointer movers 2 nodes at a time
   * @type {Node}
   */
  let fastPointer = head?.next?.next;

  // if there are only 2 pointers with no loop(the second node does not point to the first one), then it's
  // next property will ne null, therefore fastPointer will be null and we return an early false
  if (!fastPointer) return false;

  while (slowPointer && fastPointer) {
    // referential equality
    if (slowPointer === fastPointer) return true;
    slowPointer = slowPointer?.next;
    fastPointer = fastPointer?.next?.next;
  }
  return false;
}

/**
 * same solution as hasCycle with different implementation
 * @param {Node} head
 * @return {boolean}
 */
function hasCycle2(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) return true;
  }
  return false;
}

// @ts-ignore
const res = hasCycle(myLinkedList.head);
console.log("res: ", res);
// @ts-ignore
const res2 = hasCycle2(myLinkedList.head);
console.log("res2: ", res2);

/**
 * Another solution that uses the length of the linked list.
 * if the counter (the number of node iterations) is larger than the length of
 * the linked list, the we must have loop.
 * @param {LinkedList} linkedList
 * @return {boolean}
 */
function hasCycle3(linkedList) {
  let counter = 0;
  let nextNode = linkedList.head;
  while (nextNode) {
    if (counter > linkedList.length) return true;
    nextNode = nextNode.next;
    counter++;
  }
  return false;
}

const res3 = hasCycle3(myLinkedList);
console.log("res3: ", res3);

module.exports = {};
