
# Trees - Introduction

A tree is a widely used **abstract data type (ADT)** that simulates a hierarchical tree structure with a set of linked nodes. Each `node` of the tree will have a `root` value and a list of references to other nodes which are called `child` nodes. From graph view, a tree can also be defined as a **Directed Acyclic Graph(DAG)** which has `N nodes` and `N-1 edges`.
It is a non-linear data structure compared to arrays, linked lists, stack and queues, etc.

Here are some key concepts related to trees:

1. **Node**: Each element in a tree is called a node. A node is a part where data is stored. It also contains a link to the sub-nodes.

2. **Root**: The node at the top of the tree is called the root. There is only one root node in a tree.

3. **Edge**: The connection between one node and another is called an edge.

4. **Parent and Child**: In a tree, nodes are related with each other. The node which is a preceding node is a parent and nodes which follow are children.

5. **Leaf**: The nodes which do not have any child node are called the leaf nodes.

6. **Subtree**: Subtree represents the descendants of a node.

7. **Degree of a Node**: The total number of children of a node.

8. **Depth of a Node**: The number of edges from the root to the node.

9. **Height of a Node**: The number of edges from the node to the deepest leaf.

10. **Height of a Tree**: The height of a tree is the height of the root.

Trees are used in many areas of computer science, including operating systems, graphics, database systems, and computer networking. Tree data structures allow us to write efficient algorithms for different types of searches.

There are several specialized types of trees, including binary trees, binary search trees, AVL trees, B-trees, red-black trees, and others. Each of these has its own unique properties and use-cases.

For example, a binary tree is a tree-type non-linear data structure with a maximum of two children for each parent. The binary tree is the basis for many data structures and algorithms.

Binary Search Trees (BSTs) are used to quickly check whether an element is present in a set or not. AVL trees and Red-Black trees are self-balancing binary search trees, where the height of the tree is always logarithmic in the number of elements. This property makes these data structures efficient for dictionary operations (insert, delete, find, min, max, etc.).

B-trees are used in databases and file systems. They can contain hundreds or thousands of children and are optimized for systems that read and write large blocks of data.

!!! note
    - If a tree has N vertices(nodes) than the number of edges is always one less than the number of nodes(vertices) i.e N-1. If it has more than N-1 edges it is called a graph not a tree.
