// @te-check

/*
 * read more here: https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1296/
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 *
 */
import { MyLinkedList, Node } from "./prototype.js";

/**
 * making a linked list of an array of numbers
 * @type {MyLinkedList}
 */
const firstLinkedList = new MyLinkedList();

[1, 2, 3, 4, 5].forEach((element) => {
  firstLinkedList.addAtTail(element);
});

const secondLinkedList = new MyLinkedList();

[1].forEach((element) => {
  secondLinkedList.addAtTail(element);
});

const thirdLinkedList = new MyLinkedList();

[].forEach((element) => {
  thirdLinkedList.addAtTail(element);
});

/**
 *
 * @param {Node} head
 * @return {Node}
 */
function reverseList(head) {
  let reversedList = null;
  let currentNode = head;
  let nextNode = null;
  while (currentNode) {
    // recording the next node
    nextNode = currentNode.next;
    // The actual reversing happens here. It's like moving the current node to the head of
    // the reversed node.
    currentNode.next = reversedList;
    reversedList = currentNode;
    // now we need to move forward to the next node, by assigning it to the current node
    currentNode = nextNode;
  }
  return reversedList;
}

const res1 = reverseList(firstLinkedList.head);
console.log("res1: ", res1);

const res2 = reverseList(secondLinkedList.head);
console.log("res2: ", res2);

const res3 = reverseList(thirdLinkedList.head);
console.log("res3: ", res3);
