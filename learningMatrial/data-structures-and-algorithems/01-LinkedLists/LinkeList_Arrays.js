// @ts-check

/**
 * This is a linked list using javascript Array
 *
 * @class MyLinkedList
 */
class MyLinkedList {
  constructor(linkedList = []) {
    this.linkedList = linkedList;
  }
  get(index) {
    if (this.linkedList[index] === undefined) return -1;
    return this.linkedList[index];
  }
  addAtHead(val) {
    this.linkedList.unshift(val);
  }
  addAtTail(val) {
    this.linkedList.push(val);
  }
  addAtIndex(index, val) {
    if (this.linkedList.length < index) {
      for (let i = 0; i < index; i++) {
        this.linkedList[i] = undefined;
      }
    }
    this.linkedList.splice(index, 0, val);
  }
  deleteAtIndex(index) {
    this.linkedList.splice(index, 1);
  }
}
