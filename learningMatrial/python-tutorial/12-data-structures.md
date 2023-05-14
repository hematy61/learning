# Data Structures

In Python, a data structure is a way to organize and store data. There are four built-in data structures in Python:

data structure | example
---------------|------------
List | `['a', 'b', 'c']`
Tuple | `('a', 'b', 'c')`
Set | `{'a', 'b', 'c'}`
Dictionary | `{'a': 1, 'b': 2, 'c': 3}`

These are all considered non-primitive data structures, meaning they are classed as objects.

Also, there are user defined data structures, which are created by the user. Like, Stack, Queue, Linked List, Tree, Graph, HashMap, etc.

## Lists

A list is a collection of elements that are ordered and mutable. Each element in the list has an assigned index based on its position. Lists are created by placing elements inside square brackets [], separated by commas.
Example:

```python {cmd}
fruits = ["apple", "banana", "cherry"]
```

## Tuples

A tuple is similar to a list but it is immutable (cannot be changed once it's created). It is created by placing elements inside parentheses (), separated by commas.
Example:

```python {cmd}
fruits = ("apple", "banana", "cherry")
```

## Sets

A set is an unordered collection of unique elements. It is created by placing elements inside curly braces {}, separated by commas. Since sets are unordered, they cannot be indexed like lists or tuples.
Example:

```python {cmd}
fruits = {"apple", "banana", "cherry"}
```

## Dictionaries

A dictionary is an unordered collection of key-value pairs. It is created using curly braces {}, with each key-value pair separated by a colon `:`. Dictionaries are useful for storing and retrieving data based on a specific key.
Example:

```python {cmd}
fruits = {"apple": 1, "banana": 2, "cherry": 3}
```
