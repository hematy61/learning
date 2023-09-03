// @ts-check
// **************************************************
// STEP 1 - create the Node constructor
// **************************************************
/**
 * @param {string | number} data
 */
function Node(data) {
  this.data = data;
  /**
   * @type Node | null
   */
  this.nextNode = null;
}
// **************************************************
// STEP 2 - create the Linked List constructor
// **************************************************
/**
 * @param {Node | null} head
 */
function LinkedList(head = null) {
  this.head = head;
}

// **************************************************
// Step 3 - initiate Nodes and attach them together
// **************************************************
const firstNode = new Node(1);
const secondNode = new Node(2);
firstNode.nextNode = secondNode;

// **************************************************
// STEP 4 - initiate the Linked List
// **************************************************
const linkList = new LinkedList(firstNode);
console.log(linkList);
// {
//     "head": {
//         "data":1,
//         "nextNode": {
//             "data":2,
//             "nextNode":null
//         }
//     }
// }

module.exports = {};
