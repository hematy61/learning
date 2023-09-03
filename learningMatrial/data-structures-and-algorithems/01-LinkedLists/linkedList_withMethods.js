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

  /**
   * Add a node to the beginning of the linked list.
   * As it only assigns to head, the runtime is constant O(1)
   * @param {string | number} data
   *
   */
  this.prepend = (data) => {
    const tempNode = new Node(data);
    tempNode.nextNode = this.head;
    this.head = tempNode;
  };
  /**
   * Checks the number of nodes in the linked list and returns
   * the size of the linked list. As it has to iterate over all
   * nodes, the runtime is linear O(n)
   * @returns {number} the number of the nodes
   */
  this.getLength = () => {
    let length = 0;
    let node = this.head;
    while (node !== null) {
      length++;
      node = node.nextNode;
    }
    return length;
  };
}

// **************************************************
// Step 3 - initiate Nodes and attach them together
// **************************************************
const firstNode = new Node(1);
const secondNode = new Node(2);
const thirdNode = new Node(3);
firstNode.nextNode = secondNode;
secondNode.nextNode = thirdNode;

// console.log(counter.times);
// **************************************************
// STEP 4 - initiate the Linked List
// **************************************************
const linkList = new LinkedList(firstNode);
console.log("linked list: ", JSON.parse(JSON.stringify(linkList)));
// {
//     "head": {
//         "data":1,
//         "nextNode": {
//             "data":2,
//             "nextNode":null
//         }
//     }
// }

linkList.prepend("new");
console.log("prepended: ", JSON.parse(JSON.stringify(linkList)));
console.log("prepended size: ", linkList.getLength());

module.exports = {};
