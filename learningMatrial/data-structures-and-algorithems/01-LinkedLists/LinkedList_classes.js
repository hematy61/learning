// @ts-check
// **************************************************
// STEP 1 - create the Node constructor
// **************************************************
class Node {
  /**
   *
   * @param {string | number} data
   */
  constructor(data) {
    this.data = data;
    /**
     * @type Node | null
     */
    this.nextNode = null;
  }
}
// **************************************************
// STEP 2 - create the Linked List constructor
// **************************************************
class LinkedList {
  /**
   *
   * @param {Node | null} head
   */
  constructor(head) {
    this.head = head ?? null;
  }

  getLength = function getLengthMethod() {
    let length = 0;
    let node = this.head;
    while (node.next !== null) {
      length++;
      node = node.next;
    }
    return length + 1;
  };
}
// **************************************************
// Step 3 - initiate Nodes and attach them together
// **************************************************
const firstNode = new Node("first");
const secondNode = new Node("second");
firstNode.nextNode = secondNode;

// **************************************************
// STEP 4 - initiate the Linked List
// **************************************************
const linkedList = new LinkedList(firstNode);
console.log(firstNode);
// {
//     data: "first",
//     nextNode: {
//         data: "second",
//         nextNode: null
//     }
// };

module.exports = {};
