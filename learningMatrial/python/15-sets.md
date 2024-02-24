# Sets

A set is a collection of unique and unordered elements. It is an implementation of the mathematical concept of sets, which means that it can perform operations such as union, intersection, difference, and symmetric difference.

## Creating a set

In Python, sets are defined using curly braces `{}` or by using the built-in `set()` function.

!!!
    To define an empty set, use `set()` instead of `{}` because `{}` creates an empty dictionary.

    ```python {cmd="python3"}
    empty_dict = {} # creates an empty dictionary
    empty_set = set() # creates an empty set
    ```

Here are some examples of how to create a set:

```python {cmd="python3"}
# using curly braces
fruits = {"apple", "banana", "cherry"}
print(fruits) # {'cherry', 'banana', 'apple'}

# using the set() function
fruits = set(("apple", "banana", "cherry"))
print(fruits) # {'cherry', 'banana', 'apple'}

fruits = set(["apple", "banana", "cherry"])
print(fruits) # {'cherry', 'banana', 'apple'}
```

!!! warning
    Set elements must be immutable. Hence, you cannot have a mutable object like lists as set elements.

    ```python {cmd="python3"}
    fruits = {"apple", "banana", "cherry", ["pineapple", "mango"]}
    # TypeError: unhashable type: 'list'
    ```

!!! warning
    Since sets are unordered, accessing elements using their index is not possible.

    ```python {cmd="python3"}
    fruits = {"apple", "banana", "cherry"}
    print(fruits[0]) # TypeError: 'set' object is not subscriptable
    ```

!!! warning Slicing a set
    You cannot slice a set because sets are unordered.

    ```python {cmd="python3"}
    fruits = {"apple", "banana", "cherry"}
    print(fruits[1:3]) # TypeError: 'set' object is not subscriptable
    ```

!!! warning Concatenating sets
    You cannot concatenate sets because sets are unordered with + operator. However, you can use the `union()` method to concatenate two sets.

    ```python {cmd="python3"}
    fruits = {"apple", "banana", "cherry"}
    vegetables = {"tomato", "potato", "cucumber"}
    new_set = fruits + vegetables
    print(new_set) # {'cucumber', 'cherry', 'banana', 'apple', 'tomato', 'potato'}
    ```

## `del` keyword

You can delete a set using the `del` keyword.

```python {cmd="python3"}
fruits = {"apple", "banana", "cherry"}
del fruits
print(fruits) # NameError: name 'fruits' is not defined
```

!!! warning Deleting individual elements
    You cannot delete individual elements of a set.

    ```python {cmd="python3"}
    fruits = {"apple", "banana", "cherry"}
    del fruits["apple"]
    print(fruits) # TypeError: 'set' object does not support item deletion
    ```

## Membership test

You can test if an item exists in a set or not, using the keyword `in` or `not in`.

### `in`

```python {cmd="python3"}
fruits = {"apple", "banana", "cherry"}
if "apple" in fruits:
    print("Yes, 'apple' is in the fruits set") # Yes, 'apple' is in the fruits set
```

### `not in`

```python {cmd="python3"}
fruits = {"apple", "banana", "cherry"}
if "pineapple" not in fruits:
    print("No, 'pineapple' is not in the fruits set") # No, 'pineapple' is not in the fruits set
```

## Iterating through a set

You can iterate through the elements of a set using a `for` loop.

```python {cmd="python3"}
fruits = {"apple", "banana", "cherry"}
for x in fruits:
    print(x) 

# as sets are unordered, the order of the elements may vary each time you run the program
# cherry
# banana
# apple
```

## unpacking a set

You can unpack a set into variables using the `*` operator. However, as sets are unordered, you cannot know which item goes to which variable.

```python {cmd="python3"}
fruits = {"apple", "banana", "cherry"}
a, b, c = fruits
print(a) # cherry
print(b) # banana
print(c) # apple

d, *f = fruits
print(d) # cherry
print(f) # ['banana', 'apple']
```

## Set Methods

Python has a set of built-in methods that you can use on sets.

### Adding elements to a set

#### `add()`

Adds an element to the set.

```python {cmd="python3"}
fruits = {"apple", "banana", "cherry"}
fruits.add("orange")
print(fruits) # {'cherry', 'orange', 'banana', 'apple'}
```

#### `update()`

Adds multiple elements to the set.

```python {cmd="python3"}
cars = {"Ford", "Volvo", "BMW"}
cars.update(["Toyota", "Honda"])
print(cars) # {'Volvo', 'Toyota', 'BMW', 'Honda', 'Ford'}
```

### Removing elements from a set

#### `remove()`

Removes the specified element from the set.

```python {cmd="python3"}
fruits = {"apple", "banana", "cherry"}
fruits.remove("banana")
print(fruits) # {'cherry', 'apple'}
```

#### `discard()`

Removes the specified element from the set.

```python {cmd="python3"}
fruits = {"apple", "banana", "cherry"}
fruits.discard("banana")
print(fruits) # {'cherry', 'apple'}
```

!!! note - `remove()` vs `discard()`
The `remove()` method raises an error if the specified element does not exist in the set. The `discard()` method does not raise an error if the specified element does not exist in the set.

```python {cmd="python3"}
fruits = {"apple", "banana", "cherry"}
fruits.discard("pineapple")
# no error

fruits = {"apple", "banana", "cherry"}
fruits.remove("pineapple")
# KeyError: 'pineapple'
```

#### `pop()`

Removes an element from the set.

```python {cmd="python3"}
fruits = {"apple", "banana", "cherry"}
x = fruits.pop()
print(x) # cherry
# The order of the elements may vary each time you run the program because sets are unordered.
print(fruits) # {'banana', 'apple'}
```

#### `clear()`

Removes all the elements from the set.

```python {cmd="python3"}
fruits = {"apple", "banana", "cherry"}
fruits.clear()
print(fruits) # set()
```

### union()

`set.union()` method in Python, returns a new set that contains all the unique elements from both the given set caller and another iterable passed as an argument to the method.

The union of two sets is defined as a set containing all the elements present in both sets.

syntax:

```python
setA.union(iterableA, iterableB, ...)
```

- SetA: a set for which intersection needs to be done with an iterable.

- iterable: the other collection or set element/s that need to perform a union operation.

!!! note
    We can also use the `|` operator instead of the `union()` method, like `SetA | iterable_A` is equivalent to `SetA.union(iterable_A)`.

    ```python {cmd="python3"}
    setA = {1, 2, 3, 4, 5}
    setB = {2, 3, 4, 5, 6}

    print(setA | setB) # {1, 2, 3, 4, 5, 6}
    ```

here, iterable can be a list, tuple, set, dictionary, etc.

```python {cmd="python3"}
setA = {1, 2, 3, 4, 5}
setB = {4, 5, 6, 7, 8}
setC = {8, 9, 10, 11, 12}
setD = {12, 13, 14, 15, 16}

# union of setA and setB
print(setA.union(setB)) # {1, 2, 3, 4, 5, 6, 7, 8}

# union of setA, setB and setC
print(setA.union(setB, setC)) # {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}

# union of setA, setB, setC and setD
print(setA.union(setB, setC, setD)) # {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16}
```

Examples with other iterables:

```python {cmd="python3"}
setA = {1, 2, 3, 4, 5}
listA = [4, 5, 6, 7, 8]
tupleA = (8, 9, 10, 11, 12)
dictA = {12: 'a', 13: 'b', 14: 'c', 15: 'd', 16: 'e'}

# union of setA and listA
print(setA.union(listA)) # {1, 2, 3, 4, 5, 6, 7, 8}

# union of setA, listA and tupleA
print(setA.union(listA, tupleA)) # {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}

# union of setA, listA, tupleA and dictA
print(setA.union(listA, tupleA, dictA)) # {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16}
```

### intersection()

In Python, the intersection() method is a built-in set operation used to return the intersection of two or more sets. It returns the elements that are common to all sets provided in the input.

Here's the syntax for using intersection():

```python
setA.intersection(iterableA, iterableB, ...)
```

!!! note
    We can also use the `&` operator instead of the `intersection()` method, like `SetA & iterable_A` is equivalent to `SetA.intersection(iterable_A)`.

    ```python {cmd="python3"}
    setA = {1, 2, 3, 4, 5}
    setB = {2, 3, 4, 5, 6}

    print(setA & setB) # {2, 3, 4, 5}
    ```

here are some examples of using intersection():

```python {cmd="python3"}
setA = {1, 2, 3, 4, 5}
setB = {4, 5, 6, 7, 8}
setC = {4, 5, 8, 9, 10}
setD = {12, 13, 14, 15}

# intersection of setA and setB
print(setA.intersection(setB)) # {4, 5}

# intersection of setA, setB and setC
print(setA.intersection(setB, setC)) # {4, 5}

# intersection of setA, setB, setC and setD
print(setA.intersection(setB, setC, setD)) # set()
```

Examples with other iterables:

```python {cmd="python3"}
setA = {1, 2, 3, 4, 5}
listA = [4, 5, 6, 7, 8]
tupleA = (4, 5, 8, 9, 10)
dictA = {12: 'a', 13: 'b', 14: 'c', 15: 'd', 16: 'e'}

# intersection of setA and listA
print(setA.intersection(listA)) # {4, 5}

# intersection of setA, listA and tupleA
print(setA.intersection(listA, tupleA)) # {4, 5}

# intersection of setA, listA, tupleA and dictA
print(setA.intersection(listA, tupleA, dictA)) # set()
```

### difference()

`difference()` is a built-in function in Python that returns the difference between two sets, meaning it returns all elements from the first set that are not in the second set. The result is also a set.

Here is the syntax for using difference():

```python
setA.difference(iterableA, iterableB, ...)
```

!!! note
    We can also use the `-` operator instead of the `difference()` method, like `SetA - iterable_A` is equivalent to `SetA.difference(iterable_A)`.

    ```python {cmd="python3"}
    setA = {1, 2, 3, 4, 5}
    setB = {2, 3, 4, 5, 6}

    print(setA - setB) # {1}
    ```

Here are some examples of using difference():

```python {cmd="python3"}
setA = {1, 2, 3, 4, 5}
setB = {4, 5, 6, 7, 8}
setC = {4, 5, 8, 9, 10}
setD = {12, 13, 14, 15}

# difference of setA and setB
print(setA.difference(setB)) # {1, 2, 3}

# difference of setA, setB and setC
print(setA.difference(setB, setC)) # {1, 2, 3}

# difference of setA, setB, setC and setD
print(setA.difference(setB, setC, setD)) # {1, 2, 3}
```

Examples with other iterables:

```python {cmd="python3"}
setA = {1, 2, 3, 4, 5}
listA = [4, 5, 6, 7, 8]
tupleA = (4, 5, 8, 9, 10)
dictA = {12: 'a', 13: 'b', 14: 'c', 15: 'd', 16: 'e'}

# difference of setA and listA
print(setA.difference(listA)) # {1, 2, 3}

# difference of setA, listA and tupleA
print(setA.difference(listA, tupleA)) # {1, 2, 3}

# difference of setA, listA, tupleA and dictA
print(setA.difference(listA, tupleA, dictA)) # {1, 2, 3}
```

### symmetric_difference()

The symmetric_difference() method in Python is a set operation that returns a new set containing all items that are present in either of two given sets, but not in both. In other words, it finds the difference between two sets by excluding the elements which are common to both sets.

The syntax for using the symmetric_difference() method is as follows:

```python
setA.symmetric_difference(iterableA)
```

!!! note
    We can also use the `^` (caret) operator instead of the `symmetric_difference()` method, like `SetA ^ iterable_A` is equivalent to `SetA.symmetric_difference(iterable_A)`.

    ```python {cmd="python3"}
    setA = {1, 2, 3, 4, 5}
    setB = {2, 3, 4, 5, 6}

    print(setA ^ setB) # {1, 6}
    ```

Here are some examples of using symmetric_difference():

```python {cmd="python3"}
setA = {1, 2, 3, 4, 5}
setB = {4, 5, 6, 7, 8}
setC = {4, 5, 8, 9, 10}
setD = {12, 13, 14, 15}

# symmetric difference of setA and setB
print(setA.symmetric_difference(setB)) # {1, 2, 3, 6, 7, 8}
```

Examples with other iterables:

```python {cmd="python3"}
setA = {1, 2, 3, 4, 5}
listA = [4, 5, 6, 7, 8]
tupleA = (4, 5, 8, 9, 10)
dictA = {12: 'a', 13: 'b', 14: 'c', 15: 'd', 16: 'e'}

# symmetric difference of setA and listA
print(setA.symmetric_difference(listA)) # {1, 2, 3, 6, 7, 8}

# symmetric difference of setA, tupleA
print(setA.symmetric_difference(tupleA)) # {1, 2, 3, 8, 9, 10}

# symmetric difference of setA, dictA
print(setA.symmetric_difference(dictA)) # {1, 2, 3, 4, 5, 12, 13, 14, 15, 16}
```

### `copy()`

set.copy() is a method in Python that returns a shallow copy of the set. This means that it creates a new set that contains all the elements of the original set.

Here is an example of using copy():

```python {cmd="python3"}
setA = {1, 2, 3, 4, 5}
setB = setA.copy()

setB.add(6)

print(setA) # {1, 2, 3, 4, 5}
print(setB) # {1, 2, 3, 4, 5, 6}
```

As set is an unordered collection of immutable objects, we can not have lists, tuples, dictionaries, or sets as elements of a set.

### `isdisjoint()`

The `isdisjoint()` method in Python checks whether two sets have an intersection or not.

If the intersection is an empty set, the method returns True, else it returns False.

```python {cmd="python3"}
setA = {1, 2, 3, 4, 5}
setB = {4, 5, 6, 7, 8}
setC = {10, 11, 12, 13, 14}

print(setA.isdisjoint(setB)) # False
print(setA.isdisjoint(setC)) # True
```

### `issubset()`

`issubset()` is another Python set method that returns true if set A is a subset of set B. If all elements of set A are in set B, then set A is said to be a subset of Set B.

```python {cmd="python3"}
setA = {1, 2, 3, 4, 5}
setB = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

print(setA.issubset(setB)) # True
```

### `issuperset()`

`issuperset()` is a built-in function in Python that is used to check if a set is a superset of another set. It returns True if the set contains all the elements of another set and False otherwise.

```python {cmd="python3"}
setA = {1, 2, 3, 4, 5}
setB = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

print(setB.issuperset(setA)) # True
```
