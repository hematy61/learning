# Traverse a Tree

Tree traversal is a process of visiting (checking or updating) each node in a tree data structure, exactly once. Unlike linear data structures, which have only one logical way to traverse them, trees can be traversed in many different ways. Let's discuss some of the most common ways to traverse trees.

1. **Depth First Search (DFS)**: DFS is a tree traversal method that dives deep into the tree as far as possible on each child before backing up. DFS can be further divided into three types:

   1. **In-Order Traversal**: In this traversal method, the left subtree is visited first, then the root and later the right subtree. The steps for in-order traversal are:
   - Traverse the left subtree in In-Order.
   - Visit the root.
   - Traverse the right subtree in In-Order.

   1. **Pre-Order Traversal**: In this traversal method, the root node is visited first, then the left subtree and finally the right subtree. The steps for pre-order traversal are:
      - Visit the root.
      - Traverse the left subtree in Pre-Order.
      - Traverse the right subtree in Pre-Order.

   2. **Post-Order Traversal**: In this traversal method, the root node is visited last. First we traverse the left subtree, then the right subtree and finally the root node. The steps for post-order traversal are:
   - Traverse the left subtree in Post-Order.
   - Traverse the right subtree in Post-Order.
   - Visit the root.

2. **Breadth-First Search (BFS) or Level Order Traversal**: In this method, all the nodes at the present depth are visited before going down to nodes at the next depth level. For each node, first, the node is visited and then its child nodes are put in a FIFO queue. Then again the first node is popped out and then its child nodes are put in a FIFO queue and repeat until the queue becomes empty.

3. **Boundary Traversal**: The Boundary Traversal of a Tree includes the left boundary (nodes on left excluding leaf nodes), leaves (consist of only the leaf nodes), and the right boundary (nodes on right excluding leaf nodes).

4. **Diagonal Traversal**: In the Diagonal Traversal of a Tree, all the nodes in a single diagonal will be printed one by one.

Each of these traversal methods has its own uses and applications. The choice of the traversal method depends largely on the problem you are trying to solve. For example,

- in-order traversal of a binary search tree will give you the nodes in ascending order.
- Pre-order traversal is used to create a copy of the tree.
- post-order traversal is used to delete the tree.
- Level-order traversal is used to print or get all nodes in a level by level fashion.

All DFS traversal methods can be used with binary trees. However, only pre-order and post-order traversals can be used with non-binary trees. This is because in-order traversal requires the nodes to be visited in a specific order (left, root, right), which is not possible in non-binary trees.

In a non-binary tree (a tree where nodes can have more than two children), post-order traversal is typically defined as visiting all of a node's children before visiting the node itself. This means that you would recursively visit each subtree rooted at the node's children, and then visit the node.

This generalization makes sense because the defining characteristic of post-order traversal is that a node is visited after all of its children, regardless of how many children it has. This is in contrast to in-order traversal, where the order of visiting the left child, the node itself, and the right child is crucial, which makes it less straightforward to generalize to non-binary trees.
