// @te-check

/*
 * read more here: https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1214/
 */
import { MyLinkedList, Node } from "./prototype.js";

/**
 * making a linked list of an array of numbers
 * @type {LinkedList}
 */
const myLinkedList = new MyLinkedList();
[1, 3, 2, 4, 5, 10, 8, 12, 13].forEach((element) => {
  myLinkedList.addAtTail(element);
});

// making a cycle at position 1 of the linked list.
/**
 * 1 ---> 3 ---> 2 ---> 4 ---> 5 ---> 10 ---> 8 ---> 12 ---> 13
 *        ▲                                                   |
 *        |                                                   |
 *        -----------------------------------------------------
 */
if (myLinkedList.tail) {
  myLinkedList.tail.next = myLinkedList.head.next;
}

console.log(myLinkedList);

// 1) Similar to the previous method, we will find the loop node using Floyd Cycle detection Algorithm.
// 2) After finding the loop node, we will initialize the slow pointer to the head of the linked list
//    and the fast pointer will remain at its position.
// 3) Now we will start moving the fast and slow pointer one node at a time until they meet each other.
// 4) The node at which slow and fast meets will be the starting point or say the first node of the loop.

/**
 * Step 1 - find the loop node using Floyd Cycle detection (two pointer Technique)
 *
 * @param {Node} head
 * @return {Node | undefined}
 */
function findLoopNode(head) {
  let slowPointer = head;
  let fastPointer = head;
  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer?.next;
    fastPointer = fastPointer?.next?.next;
    if (fastPointer === slowPointer) return fastPointer;
  }
  return;
}

/**
 * Step 2: set slow pointer to head and faster pointer to loop node and
 * increase them one at a time till they reach the same node.
 *
 * @param {Node} head
 */
function detectFirstNodeInLoop(head) {
  const loopNode = findLoopNode(head);
  if (!loopNode) return "no cycle";

  let slowPointer = head;
  let fastPointer = loopNode;
  let position = 0;
  while (slowPointer !== fastPointer) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
    position++;
  }

  return position;
}

console.log(detectFirstNodeInLoop(myLinkedList.head));
