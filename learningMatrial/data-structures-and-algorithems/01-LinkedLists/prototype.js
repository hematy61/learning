// @ts-check

export function Node(val) {
  this.val = val;
  this.next = null;
}

/**
 * Initialize your data structure here.
 */
export function MyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (this.length === 0 || index > this.length - 1 || index < 0) return -1;
  let cur = this.head;

  for (let i = 0; i < index; i++) {
    cur = cur.next;
  }
  return cur.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {MyLinkedList}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.length++;
  return this;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {MyLinkedList}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    // as we have one object (newNode) being assigned to both tail and head(actually the reference of the
    // of newNode is being assigned to tail and head), when updating tail.next,
    // the head's last linked list next will get updated(javascript object reference). Then in the next line,
    // the tail's reference gets changed to the newNode reference. In other words, this line is like
    // linking the newNode to the latest node of the linked list and the next line is just updating
    // the tail.
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;
  return this;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {MyLinkedList | undefined}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  const newNode = new Node(val);
  if (index > this.length) return;
  if (index <= 0) {
    return this.addAtHead(val);
  }
  if (index === this.length) {
    return this.addAtTail(val);
  }

  let cur = this.head;
  for (let i = 0; i < index - 1; i++) {
    cur = cur.next;
  }
  newNode.next = cur.next ? cur.next : null;
  cur.next = newNode;
  this.length++;
  return this;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {MyLinkedList | undefined}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.length || index < 0) return;
  if (index === 0) {
    this.head = this.head.next;
    this.length--;
    return this;
  }

  let cur = this.head;
  for (let i = 0; i < index - 1; i++) {
    cur = cur.next;
  }

  cur.next = cur.next.next ? cur.next.next : null;
  if (!cur.next) {
    this.tail = cur;
  }
  this.length--;
  return this;
};
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// module.exports = {
//   Node,
//   MyLinkedList,
// };
