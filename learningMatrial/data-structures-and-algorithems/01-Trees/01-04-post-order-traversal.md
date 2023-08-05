# Post-order Traversal

Post-order traversal is a method of visiting all the nodes of a binary tree in a specific order. The order for post-order traversal is:

1. Visit all nodes in the left subtree.
2. Visit all nodes in the right subtree.
3. Visit the root node.

![post-order traversal](./assets/postOrder.png)

This process is applied to each subtree within the tree, treating each subtree's root as if it were the root of the tree.

Here is a simple representation of a binary tree:

```markdown
    A
   / \
  B   C
 / \   \
D   E   F
```

In the context of this tree, a post-order traversal would visit the nodes in the following order: D, E, B, F, C, A.

This is because for each subtree:

1. It first visits all nodes in the left subtree. For the root node A, this means it first visits the subtree rooted at B.
2. It then visits all nodes in the right subtree. For the root node A, this means it visits the subtree rooted at C.
3. Finally, it visits the root node of the subtree. After visiting all nodes in the subtrees rooted at B and C, it visits A.

This process is applied recursively to each subtree. For example, for the subtree rooted at B, it first visits D and E (the left and right subtrees), and then B itself.

Post-order traversal is particularly useful when delete or free operations are involved, as you can delete or free the child nodes prior to the parent node. It is also used in mathematical expression trees, postfix expression evaluation, and solving certain types of problems where all children nodes must be fully processed before the parent node.

As just mentioned, post-order is widely used in mathematical expressions. It is easier to write a program to parse a post-order expression. Here is an example:

![mathematical expression](./assets/mathematical_expression.png)

## Implementation

Here's how we can implement post-order traversal in JavaScript using recursion:

```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function postOrder(node) {
  if (node !== null) return

  postOrder(node.left);  // Recursively visit the left subtree
  postOrder(node.right);  // Recursively visit the right subtree
  console.log(node.value);  // Process the current node
}

let root = new Node('A');
root.left = new Node('B');
root.right = new Node('C');
root.left.left = new Node('D');
root.left.right = new Node('E');
root.right.right = new Node('F');

postOrder(root);  // Output: 'D', 'E', 'B', 'F', 'C', 'A'
```

Implementing post-order traversal iteratively is a bit more complex than the recursive approach. We can use two stacks to achieve this. Here's how you can do it in JavaScript:

```js
// Define a class for the nodes of the binary tree
class Node {
  constructor(value) {
    this.value = value;  // The value stored in the node
    this.left = null;    // The left child of the node
    this.right = null;   // The right child of the node
  }
}

// Define the post-order traversal function
function postOrder(root) {
    let result = [];  // Array to store the values of visited nodes
    if (root === null) {  // If the tree is empty, return the empty result array
        return result;
    }

    let stack1 = [];  // First stack to keep track of nodes to be visited
    let stack2 = [];  // Second stack to reverse the order of nodes
    stack1.push(root);  // Start with the root node

    // Continue as long as there are unvisited nodes
    while (stack1.length > 0) {
        let node = stack1.pop();  // Remove the node from the top of the first stack
        stack2.push(node);  // Push the node onto the second stack

        // If the node has a left child, add it to the first stack
        if (node.left !== null) {
            stack1.push(node.left);
        }
        // If the node has a right child, add it to the first stack
        if (node.right !== null) {
            stack1.push(node.right);
        }
    }

    // Pop all nodes from the second stack to reverse the order and add their values to the result array
    while (stack2.length > 0) {
        let node = stack2.pop();
        result.push(node.value);
    }

    return result;  // Return the result array
}

// Create a binary tree
let root = new Node('A');
root.left = new Node('B');
root.right = new Node('C');
root.left.left = new Node('D');
root.left.right = new Node('E');
root.right.right = new Node('F');

// Perform a post-order traversal of the tree and log the output
console.log(postOrder(root));  // Output: ['D', 'E', 'B', 'F', 'C', 'A']
```

In this function, we use two stacks. The first stack is used to get the post-order traversal in reverse, by pushing the root node first, then its left child, and finally its right child. We repeat this process for all nodes in the tree. The second stack is used to reverse the order of the nodes to get the correct post-order traversal.

Let's break down:

```plaintext
    A
   / \
  B   C
 / \   \
D   E   F
```

The post-order traversal order for this tree is: D, E, B, F, C, A.

Here's how the algorithm works:

1. We start with the root node 'A' and push it onto `stack1`.

2. We enter the while loop. The top node of `stack1` is 'A', which we pop and push onto `stack2`. Then we push 'A's left child 'B' and right child 'C' onto `stack1`. At this point, `stack1` contains ['B', 'C'] (with 'C' at the top), and `stack2` contains ['A'].

3. In the next iteration of the while loop, we pop 'C' from `stack1` and push it onto `stack2`. 'C' has a right child 'F', which we push onto `stack1`. Now, `stack1` contains ['B', 'F'], and `stack2` contains ['A', 'C'].

4. In the next iteration, we pop 'F' from `stack1` and push it onto `stack2`. 'F' has no children, so `stack1` remains ['B'], and `stack2` becomes ['A', 'C', 'F'].

5. Next, we pop 'B' from `stack1` and push it onto `stack2`. We then push 'B's left child 'D' and right child 'E' onto `stack1`. Now, `stack1` contains ['D', 'E'], and `stack2` contains ['A', 'C', 'F', 'B'].

6. We continue this process until `stack1` is empty. At this point, `stack2` contains ['A', 'C', 'F', 'B', 'E', 'D'].

7. Finally, we pop all nodes from `stack2` and add their values to the `result` array. The order of nodes popped from `stack2` is 'D', 'E', 'B', 'F', 'C', 'A', which is the correct post-order traversal order.

So, the `result` array after the algorithm finishes is ['D', 'E', 'B', 'F', 'C', 'A'], which matches the expected post-order traversal order.

This algorithm works by using `stack1` to traverse the tree in a modified pre-order manner (root -> right -> left) and `stack2` to reverse the order of nodes, resulting in the correct post-order traversal order (left -> right -> root).

Here's a step-by-step breakdown of the algorithm using a table. Each row represents one iteration of the while loop in the post-order traversal function:

| Step | stack1 (top at right) | stack2 (top at right)          | Action                                                             |
| ---- | --------------------- | ------------------------------ | ------------------------------------------------------------------ |
| 1    | ['A']                 | []                             | Push root 'A' to stack1                                            |
| 2    | ['B', 'C']            | ['A']                          | Pop 'A' from stack1 and push to stack2, push 'B' and 'C' to stack1 |
| 3    | ['B', 'F']            | ['A', 'C']                     | Pop 'C' from stack1 and push to stack2, push 'F' to stack1         |
| 4    | ['B']                 | ['A', 'C', 'F']                | Pop 'F' from stack1 and push to stack2                             |
| 5    | ['D', 'E']            | ['A', 'C', 'F', 'B']           | Pop 'B' from stack1 and push to stack2, push 'D' and 'E' to stack1 |
| 6    | ['D']                 | ['A', 'C', 'F', 'B', 'E']      | Pop 'E' from stack1 and push to stack2                             |
| 7    | []                    | ['A', 'C', 'F', 'B', 'E', 'D'] | Pop 'D' from stack1 and push to stack2                             |
| 8    | []                    | ['A', 'C', 'F', 'B', 'E', 'D'] | stack1 is empty, start popping from stack2 to form result          |
