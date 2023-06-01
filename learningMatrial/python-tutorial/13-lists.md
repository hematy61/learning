# Lists

In python lists are used to store multiple items in a single variable. Lists are one of 4 built-in data types in Python used to store collections of data. Lists are created using square brackets.

```python {cmd}
# a list of strings
fruits = ["apple", "banana", "cherry"]
# a list of numbers
numbers = [1, 2, 3, 4, 5]
# a list of different data types
mixed = ["apple", 1, True]
# a nested list
nested = ["apple", [1, 2, 3], True]
```

## The star operator `*`

The star operator, denoted by an asterisk (*) in Python, has various uses in the language, depending on the context.

### Repetition

The star operator can be used to repeat a list, a certain number of times.

```python {cmd}
fruits = ["apple", "banana"]
fruits = fruits * 2
print(fruits) # ['apple', 'banana', 'apple', 'banana']
```

### Unpacking

The star operator can be used to unpack values from iterables like lists, tuples, and dictionaries.

```python {cmd}
fruits = ["apple", "banana", "cherry"]
apple, *rest = fruits

print(apple) # apple
print(rest) # ['banana', 'cherry']
print(*rest) # banana cherry
```

## convert other iterables to lists

The star operator can be used to convert other iterables to lists.

### Tuples to lists

```python {cmd}
fruits = ("apple", "banana", "cherry")
fruits = [*fruits]
print(fruits) # ['apple', 'banana', 'cherry']

# unpacking a tuple and converting it to a list
cars = ("Ford", "Volvo", "BMW")
ford, *rest_of_cars = cars
print(ford) # Ford
print(rest_of_cars) # ['Volvo', 'BMW']
```

### Strings to lists

```python {cmd}
fruit = "apple"
fruit_letters = [*fruit]
print(fruit_letters) # ['a', 'p', 'p', 'l', 'e']
```

### Dictionaries to lists

Dictionaries cannot be converted directly to lists using the * operator, but we can use methods like `keys()`, `values()`, or `items()` to extract the relevant information into a list.

```python {cmd}
car = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
}
car_keys = [*car] # the same as [*car.keys()]
print(car_keys) # ['brand', 'model', 'year']

car_values = [*car.values()]
print(car_values) # ['Ford', 'Mustang', 1964]

car_items = [*car.items()]
print(car_items) # [('brand', 'Ford'), ('model', 'Mustang'), ('year', 1964)]
```

### Sets to lists

```python {cmd}
fruits = {"apple", "banana", "cherry"}
fruits = [*fruits]
print(fruits) # ['apple', 'banana', 'cherry']
```

### Convert lists to strings

```python {cmd}
fruits = ["apple", "banana", "cherry"]
fruits = " ".join(fruits)
print(fruits) # apple banana cherry
```

## Iterate through a list

To iterate through a list, we can use a `for` loop.

```python {cmd}
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
# apple
# banana
# cherry
```

## List Methods

### Append and Insertion

#### `append()`

The `append()` method adds an element to the end of the list.

```python {cmd}
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits) # ['apple', 'banana', 'cherry', 'orange']
```

#### `insert()`

The `insert()` method inserts an element at the specified position.
The syntax for the `insert()` method is:

```python {cmd}
list.insert(index, element)
```

index - the index at which the element has to be inserted
element - the element to be inserted

```python {cmd}
numbers = [1, 2, 3]
numbers.insert(1, 100)
print(numbers) # [1, 100, 2, 3]

# insert at the beginning
numbers.insert(0, 200)
print(numbers) # [200, 1, 100, 2, 3]

# insert at the end (same as append)
numbers.insert(len(numbers), 300)
print(numbers) # [200, 1, 100, 2, 3, 300]
```

#### `extend()`

The `extend()` method adds all the elements of an iterable (list, tuple, string etc.) to the end of the list.

```python {cmd}
numbers = [1, 2, 3]
numbers.extend([4, 5, 6])
print(numbers) # [1, 2, 3, 4, 5, 6]

# extend using a tuple
letters = ["a", "b", "c"]
letters.extend(("d", "e", "f"))
print(letters) # ['a', 'b', 'c', 'd', 'e', 'f']

# extend using a string
colors = ["red", "green", "blue"]
colors.extend("yellow")
print(colors) # ['red', 'green', 'blue', 'y', 'e', 'l', 'l', 'o', 'w']

# extend using a dictionary
# this will add the keys of the dictionary
visits = [1, 2, 3]
visits.extend({"a": 1, "b": 2, "c": 3})
print(visits) # [1, 2, 3, 'a', 'b', 'c']

# this will add the values of the dictionary
visits = [1, 2, 3]
visits.extend({"a": 1, "b": 2, "c": 3}.values())
print(visits) # [1, 2, 3, 1, 2, 3]

# extend using a set
random_numbers = [100, 200, 300]
random_numbers.extend({1, 2, 3})
print(random_numbers) # [100, 200, 300, 1, 2, 3]
```

### Removal Methods

#### `pop()`

The `pop()` method removes the element at the specified position.
The syntax for the `pop()` method is:

```python {cmd}
list.pop(index)
```

index - the index of the element to be removed. If no index is specified, the last element is removed.

```python {cmd}
numbers = [1, 2, 3]
numbers.pop(1)
print(numbers) # [1, 3]

# remove the last element
colors = ["red", "green", "blue"]
colors.pop()
print(colors) # ['red', 'green']
```

#### `remove()`

The `remove()` method removes the first occurrence of the element with the specified value.
The syntax for the `remove()` method is:

```python {cmd}
list.remove(element)
```

element - the element to be removed

```python {cmd}
numbers = [1, 2, 3, 4, 5]
numbers.remove(3)
print(numbers) # [1, 2, 4, 5]

# remove the first occurrence of 3 and the remaining occurrences will remain in the list
numbers = [1, 2, 3, 4, 5, 3, 3]
numbers.remove(3)
print(numbers) # [1, 2, 4, 5, 3, 3]
```

#### `clear()`

The `clear()` method removes all the elements from the list.

```python {cmd}
numbers = [1, 2, 3, 4, 5]
numbers.clear()
print(numbers) # []
```

### Accessor Methods

#### `index()`

The `index()` method returns the index of the first element with the specified value.
The syntax for the `index()` method is:

```python {cmd}
list.index(element)
```

element - the element to search for

```python {cmd}
numbers = [1, 2, 3, 4, 5]
print(numbers.index(3)) # 2

# if the element is not found, an error is raised
numbers = [1, 2, 3, 4, 5]
print(numbers.index(6)) # ValueError: 6 is not in list
```

#### `count()`

The `count()` method returns the number of elements with the specified value.
The syntax for the `count()` method is:

```python
list.count(element)
```

element - the element to be counted

```python {cmd}
numbers = [1, 2, 3, 4, 5, 3, 3]
print(numbers.count(3)) # 3
```

#### `sort()`

The `sort()` method sorts the list ascending by default.
The syntax for the `sort()` method is:

```python
list.sort(reverse=False, key=myFunc)
```

reverse - If True, the list is sorted in descending order
key - A function to specify the sorting criteria. The elements are sorted based on the return value of the function.

```python {cmd}
numbers = [4, 2, 1, 3, 5]
numbers.sort()
print(numbers) # [1, 2, 3, 4, 5]

# sort in descending order
numbers = [4, 2, 1, 3, 5]
numbers.sort(reverse=True)
print(numbers) # [5, 4, 3, 2, 1]

# sort using a custom function
def myFunc(n):
    return abs(n - 3)

numbers = [4, 2, 1, 3, 5]
# sorts based on the return value of the function myFunc
# which is [1, 1, 2, 0, 2]. The sort function will sort the returned
# list [0, 1, 1, 2, 2] and the original list will be sorted based on
# the returned list [3, 2, 4, 1, 5].
numbers.sort(key=myFunc)
print(numbers) # [3, 4, 2, 1, 5]

# sorting a list of strings
colors = ["red", "green", "blue"]
colors.sort()
print(colors) # ['blue', 'green', 'red']

# sorting a list of dictionaries
cars = [
    {"model": "Audi", "year": 2018},
    {"model": "BMW", "year": 2016},
    {"model": "Ford", "year": 2014}
]
cars.sort(key=lambda car: car["year"])
print(cars)
# [
#    {'model': 'Ford', 'year': 2014},
#    {'model': 'BMW', 'year': 2016},
#    {'model': 'Audi', 'year': 2018}
# ]
```

#### `reverse()`

The `reverse()` method reverses the elements of the list.

```python {cmd}
numbers = [1, 20, 3, 4, 501]
numbers.reverse()
print(numbers) # [501, 4, 3, 20, 1]
```

### Copying Methods

!!!
    For small lists, any method should work fine. For larger lists or nested lists, it may be more efficient to use the copy module (`copy.copy()`) which creates a shallow copy that references the original objects rather than copying them. However, if you need to create a deep copy (i.e. copy all nested objects), you should use the deepcopy method from the copy module.

#### `copy()`

The `copy()` method returns a shallow copy of the list. If you just assign the list to another variable, the new variable will be a reference to the original list, and changes made in one list will be reflected in the other. To avoid this, use the `copy()` method.

```python {cmd}
numbers = [1, 2, 3, 4, 5]
numbers_copy = numbers.copy()
numbers_copy[0] = 10
print(numbers) # [1, 2, 3, 4, 5]
print(numbers_copy) # [10, 2, 3, 4, 5]
```

!!! note
    If the list contains dictionaries, a copy of the dictionary will not be created. It will still be a reference to the original dictionary. Therefore, if you change the value of a property of a dictionary in the copied list, it will also change the original dictionary inside that list.
    For example:

    ```python {cmd}
    cars = [
        {"model": "Audi", "year": 2018},
        {"model": "BMW", "year": 2016},
        {"model": "Ford", "year": 2014}
    ]
    cars_copy = cars.copy()
    cars_copy[0]["year"] = 2020
    print(cars) # [{'model': 'Audi', 'year': 2020}, {'model': 'BMW', 'year': 2016}, {'model': 'Ford', 'year': 2014}]
    print(cars_copy) # [{'model': 'Audi', 'year': 2020}, {'model': 'BMW', 'year': 2016}, {'model': 'Ford', 'year': 2014}]
    ```

#### slice `:` operator

Using the slice `:` operator, you can create a shallow copy of the list by not specifying the start and end index.

```python {cmd}
numbers = [1, 2, 3, 4, 5]
numbers_copy = numbers[:]
numbers_copy[0] = 10 # The original list remains unmodified
print(numbers) # [1, 2, 3, 4, 5]
print(numbers_copy) # [10, 2, 3, 4, 5]

cars = [
    {"model": "Audi", "year": 2018},
    {"model": "BMW", "year": 2016},
    {"model": "Ford", "year": 2014}
]
cars_copy = cars[:]
# The original list will be modified because it was not deep-copied, but a reference copy was created.
cars_copy[0]["year"] = 2020
print(cars) # [{'model': 'Audi', 'year': 2020}, {'model': 'BMW', 'year': 2016}, {'model': 'Ford', 'year': 2014}]
print(cars_copy) # [{'model': 'Audi', 'year': 2020}, {'model': 'BMW', 'year': 2016}, {'model': 'Ford', 'year': 2014}]
```

#### `list()` constructor

The `list()` constructor creates a shallow copy of the list.

```python {cmd}
numbers = [1, 2, 3, 4, 5]
numbers_copy = list(numbers)
numbers_copy[0] = 10
print(numbers) # [1, 2, 3, 4, 5]
print(numbers_copy) # [10, 2, 3, 4, 5]
```

#### List Comprehension

You can also create a shallow copy of the list using list comprehension.

```python {cmd}
numbers = [1, 2, 3, 4, 5]
numbers_copy = [x for x in numbers]
numbers_copy[0] = 10
print(numbers) # [1, 2, 3, 4, 5]
print(numbers_copy) # [10, 2, 3, 4, 5]
```

#### `copy.copy()`

The `copy` module provides the `copy()` method to create a shallow copy of the list. The `copy()` module is a built-in module, so you don't need to install it.

```python {cmd}
import copy

numbers = [1, 2, 3, 4, 5]
numbers_copy = copy.copy(numbers)
numbers_copy[0] = 10
print(numbers) # [1, 2, 3, 4, 5]
print(numbers_copy) # [10, 2, 3, 4, 5]
```

#### `copy.deepcopy()`

If you want to create a deep copy of the list, you can use the `copy.deepcopy()` method. This will create a copy of the list and all the elements inside it. copy module

```python {cmd}
import copy

numbers = [1, 2, 3, 4, 5]
numbers_copy = copy.deepcopy(numbers)
numbers_copy[0] = 10
print(numbers) # [1, 2, 3, 4, 5]
print(numbers_copy) # [10, 2, 3, 4, 5]

cars = [
    {"model": "Audi", "year": 2018},
    {"model": "BMW", "year": 2016},
    {"model": "Ford", "year": 2014}
]
cars_copy = copy.deepcopy(cars)
cars_copy[0]["year"] = 2020
print(cars) # [{'model': 'Audi', 'year': 2018}, {'model': 'BMW', 'year': 2016}, {'model': 'Ford', 'year': 2014}]
print(cars_copy) # [{'model': 'Audi', 'year': 2020}, {'model': 'BMW', 'year': 2016}, {'model': 'Ford', 'year': 2014}]
```

### Membership Testing

Membership testing is a technique used to check whether an item exists or not in a sequence. Python provides two operators for membership testing: `in and `not in`.

#### `in` operator

The `in` operator returns `True` if the item exists in the sequence, otherwise it returns `False`.

```python {cmd}
numbers = [1, 2, 3, 4, 5]
print(1 in numbers) # True
print(10 in numbers) # False
```

#### `not in` operator

The `not in` operator returns `True` if the item does not exist in the sequence, otherwise it returns `False`.

```python {cmd}
numbers = [1, 2, 3, 4, 5]
print(1 not in numbers) # False
print(10 not in numbers) # True
```

### `del`

The `del` keyword is used to delete an item or a range of items from a list. You can also delete the entire list using the `del` keyword.

```python {cmd}
numbers = [1, 2, 3, 4, 5]
del numbers[0]
print(numbers) # [2, 3, 4, 5]

# delete the last element
numbers = [1, 2, 3, 4, 5]
del numbers[-1]
print(numbers) # [1, 2, 3, 4]

# delete a range of elements
numbers = [1, 2, 3, 4, 5]
del numbers[0:2] # 0 is start index and 2 is end index
print(numbers) # [3, 4, 5]

# delete the entire list
numbers = [1, 2, 3, 4, 5]
del numbers
print(numbers) # NameError: name 'numbers' is not defined
```
