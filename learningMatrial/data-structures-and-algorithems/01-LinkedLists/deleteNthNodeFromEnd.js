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
[1, 2].forEach((element) => {
  firstLinkedList.addAtTail(element);
});

/**
 * Solution: Take two pointers; the first will point to the head of the linked list
 * and the second will point to the Nth node from the beginning. Now keep incrementing
 *  both the pointers by one at the same time until the second is pointing to
 * the last node of the linked list. After the operations from the previous step,
 * the first pointer should point to the Nth node from the end now. So, delete the node
 * the first pointer is pointing to.
 *
 * @param {Node} head
 * @param {number} n
 * @return {Node | null}
 */
function removeNthFromEnd(head, n) {
  let pointerA = head;
  let pointerB = head;
  let counter = 0;

  while (counter < n) {
    pointerB = pointerB?.next;
    counter++;
  }

  if (!pointerB) {
    head = head.next;
    return head;
  }

  while (pointerB.next) {
    pointerA = pointerA.next;
    pointerB = pointerB.next;
  }

  pointerA.next = pointerA?.next?.next ?? null;
  return head;
}

const res1 = removeNthFromEnd(firstLinkedList.head, 2);
console.log("res1: ", JSON.stringify(res1));

/**
 * making a linked list of an array of numbers
 * @type {MyLinkedList
 */
const secondLinkedList = new MyLinkedList();
[1, 2, 3].forEach((element) => {
  secondLinkedList.addAtTail(element);
});

/**
 * Second approach - using two pointer technique to delete the node from end in one loop
 * The strategy is to fix the first pointer to the head and the second pointer starts moving
 * n nodes. At this point the first and second pointers will increase one node at a time, till
 * the second node reaches to the end. Then first pointer has reached to the nth node from end,
 * and we start removing the node.
 * @param {*} head
 * @param {*} n
 * @returns
 */
function removeNthFromEnd2(head, n) {
  let pointerA = head;
  let pointerB = head;
  let pre = head;
  let counter = 0;

  if (!pointerB.next) {
    return null;
  }

  while (pointerB) {
    pointerB = pointerB.next;
    counter++;
    if (counter > n) {
      pre = pointerA;
      pointerA = pointerA.next;
    }
  }

  // if the node that is requested to be deleted is greater than the
  // length of the linked list, return the linked list without deleting
  // any node.
  if (n > counter) return head;

  // covering cases that n is equal to the length of the linked list. For example, if head only
  // has one node and the n is 1.
  if (pointerA === head) {
    head = head?.next ?? null;
    return head;
  }

  pre.next = pointerA?.next ?? null;
  return head;
}

const res2 = removeNthFromEnd2(secondLinkedList.head, 3);
console.log("res2: ", JSON.stringify(res2));
