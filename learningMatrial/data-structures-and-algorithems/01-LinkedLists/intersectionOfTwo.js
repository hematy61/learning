// @te-check

/*
 * read more here: https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1215/
 * Given the heads of two singly linked-lists headA and headB, return the node at which the two lists
 * intersect. If the two linked lists have no intersection at all, return null.
 *
 */
import { MyLinkedList, Node } from "./prototype.js";

/**
 * making a linked list of an array of numbers
 * @type {MyLinkedList}
 */
const firstLinkedList = new MyLinkedList();
[1, 3, 2, 4, 5, 10, 8, 12, 13].forEach((element) => {
  firstLinkedList.addAtTail(element);
});

/**
 * making a linked list of an array of numbers
 *
 * @type {MyLinkedList}
 */
const secondLinkedList = new MyLinkedList();
[10, 3, 23].forEach((element) => {
  secondLinkedList.addAtTail(element);
});

/**
 * connecting the tail of the second Linked List to a node of the first linked list
 *
 * 1 ---> 3 ---> 2 ---> 4 ---> 5 ---> 10 ---> 8 ---> 12 ---> 13
 *               ▲
 *               |
 * 1 ---> 3 ---> 2
 *
 */
secondLinkedList.tail.next = firstLinkedList.head.next.next;

/**
 * First approach
 * using has map to store the nodes of the first linked list and then iterate over the
 * the second linked list and check its nodes with those in the hash map. The first match
 * is the node that intersection will happen.
 *
 * This method required O(n) additional space and is not very efficient if one list is large.
 *
 * @param {Node} headA
 * @param {Node} headB
 * @return {Node}
 */
function getIntersectionNode(headA, headB) {
  /**
   * @type {Map}
   */
  const ref = new Map();
  let node = headA;
  while (node) {
    ref.set(node);
    node = node.next;
  }
  node = headB;
  while (node) {
    if (ref.has(node)) return node;
    node = node.next;
  }

  return null;
}

const res = getIntersectionNode(firstLinkedList.head, secondLinkedList.head);
console.log(res);

/**
 * Second Approach: using 2-pointer technique
 *
 * ALength = The total number of nodes in the first list
 * BIntersectionDistanceFromHead = distance of the head of the second list from the intersection point
 * BLength = The total number of nodes in the second list
 * AIntersectionDistanceFromHead = distance of the head of the first list from the intersection point
 *
 *  ALength + BIntersectionDistanceFromHead = BLength + AIntersectionDistanceFromHead
 *
 * The idea is to take two pointers, x and y, initially pointing to the head of the first and
 * second lists. Then advance both pointers at the same pace until they meet at a common node.
 * When x reaches its end, redirect it to the head of the second list. When y reaches its end,
 * turn it to the head of the first list. The node where x meets y is the intersection node.
 *
 * Time complexity : O( m + n )
 * Auxiliary Space:  O(1)
 *
 * @param {Node} headA
 * @param {Node} headB
 * @return {Node}
 */
function getIntersectionNode2(headA, headB) {
  let p1 = headA;
  let p2 = headB;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;

    if (!p1) p1 = headB;
    if (!p2) p2 = headA;
  }

  return p1;
}

const res2 = getIntersectionNode2(firstLinkedList.head, secondLinkedList.head);
console.log("res2: ", res2);
