# Tuples

A tuple is a collection of ordered, immutable and heterogeneous data items enclosed in parentheses ().

!!! note
    **Ordered**: Data items are stored in a specific order and referred to by their position (index) within the tuple.
    **Immutable**: Tuples are immutable i.e., their size and contents cannot be altered after they are created.
    **Heterogeneous**: A tuple may contain elements belonging to different data types like strings, integers, floats, etc.

Even though tuples are immutable, you can access the individual elements and copy them to a mutable list for modification. However, modifying a tuple directly is impossible.

## Creating a tuple

Tuples are created by placing all the items (elements) inside parentheses `()`, separated by commas.

```python
tourist = ("John", "USA", 21, "New York", True)
```

Parentheses are optional, however, it is a good practice to use them.

```python
tourist = "John", "USA", 21, "New York", True
```

## Accessing tuple elements

You can access tuple elements by referring to the index number, inside square brackets.

```python {cmd="python3"}
tourist = ("John", "USA", 21, "New York", True)
print(tourist[0]) # John
print(tourist[1]) # USA
print(tourist[2]) # 21
```

You can also use negative indexing to access elements from the end of the tuple.

```python {cmd="python3"}
tourist = ("John", "USA", 21, "New York", True)
print(tourist[-1]) # True
print(tourist[-2]) # New York
print(tourist[-3]) # 21
```

## Slicing a tuple

You can return a range of items by using the slice syntax.

Specify the start index and the end index, separated by a colon, to return a part of the tuple.

```python {cmd="python3"}
tourist = ("John", "USA", 21, "New York", True)
print(tourist[1:3]) # ('USA', 21)
```

## concatenating tuples

You can concatenate two or more tuples to create a new one.

```python {cmd="python3"}
letters = ("a", "b", "c")
numbers = (1, 2, 3)
new_tuple = letters + numbers
print(new_tuple) # ('a', 'b', 'c', 1, 2, 3)
```

## `del` keyword

You can delete a tuple completely by using the `del` keyword.

```python {cmd="python3"}
tourist = ("John", "USA", 21, "New York", True)
del tourist
print(tourist) # NameError: name 'tourist' is not defined
```

you can't delete individual elements of a tuple.

## Membership test

You can test if an item exists in a tuple or not, using the keyword `in` or `not in`.

### `in`

```python {cmd="python3"}
tourist = ("John", "USA", 21, "New York", True)
if "John" in tourist:
    print("John is a tourist") # John is a tourist
```

### `not in`

```python {cmd="python3"}
tourist = ("John", "USA", 21, "New York", True)
if "John" not in tourist:
    print("John is not a tourist")
else:
    print("John is a tourist") # John is a tourist
```

## The `*` operator

The `*` operator can be used to repeat the elements in a tuple for a given number of times.

### Repeating

```python {cmd="python3"}
permissions = ("read", "write")
print(permissions * 2) # ('read', 'write', 'read', 'write')
```

### Unpacking

The `*` operator can also be used for unpacking tuples. By adding an asterisk `*` before the variable name, the values in the tuple are unpacked into the variable as a new list.

```python {cmd="python3"}
tourist = ("John", "USA", 21, "New York", True)
name, country, *rest = tourist
print(name) # John
print(country) # USA
print(rest) # [21, 'New York', True] the * operator unpacks the rest of the tuple into a list
```

## Iterating through a tuple

To iterate through the elements of a tuple, you can use a `for` loop.

```python {cmd="python3"}
tourist = ("John", "USA", 21, "New York", True)
for item in tourist:
    print(item)
# John
# USA
# 21
# New York
# True
```

## Tuple Methods

### `count()`

The `count()` method returns the number of times a specified value occurs in a tuple.

```python {cmd="python3"}
fruits = ("apple", "banana", "cherry", "apple", "cherry")
x = fruits.count("apple")
print(x) # 2
```

### `index()`

The `index()` method finds the first occurrence of the specified value.

```python {cmd="python3"}
fruits = ("apple", "banana", "cherry")
x = fruits.index("cherry")
print(x) # 2
```

## Tuples comparison

You can compare tuples using the comparison operators. The comparison is done based on the lexicographical order of the elements. Lexicographical order is the order in which words appear in a dictionary. For example, the word "apple" comes before the word "banana" in the dictionary or the word "car" comes before the word "cat" in the dictionary as the letter "r" comes before the letter "t".

### `==`, `!=`

When comparing two tuples using the `==` operator, the comparison starts with the first element of each tuple. If the first elements are equal, the second elements are compared, and so on. If all the elements are equal, the tuples are considered equal.

```python {cmd="python3"}
tuple1 = (1, 2, 3)
tuple2 = (1, 2, 3)
print(tuple1 == tuple2) # True

tuple1 = (1, 2, 3)
tuple2 = (1, 2, 4)
print(tuple1 == tuple2) # False

# tuples with different lengths are not equal
tuple1 = (1, 2, 3)
tuple2 = (1, 2)
print(tuple1 == tuple2) # False

tuple1 = (1, 2, 3)
tuple2 = (1, 2, 3, 4)
print(tuple1 != tuple2) # True 
```

### `>`, `<`, `>=`, `<=`

When comparing two tuples using the `>` operator, the comparison starts with the first element of each tuple. If the first element of the first tuple is greater than the first element of the second tuple, the first tuple is considered greater, no matter what the other elements are. If the first elements are equal, the second elements are compared, and so on.

```python {cmd="python3"}
tuple1 = (1, 2, 3)
tuple2 = (1, 2, 4)
print(tuple1 > tuple2) # False

tuple1 = (1, 2, 4)
tuple2 = (1, 2, 3)
print(tuple1 > tuple2) # True

tuple1 = (1, 2, 3)
tuple2 = (1, 2, 3)
print(tuple1 > tuple2) # False
print(tuple1 >= tuple2) # True

# the tuple with the most elements is considered greater, if all the elements of the shorter tuple are equal to the corresponding elements of the longer tuple
tuple1 = (1, 2, 3)
tuple2 = (1, 2)
print(tuple1 > tuple2) # True
print(tuple1 >= tuple2) # True
```
