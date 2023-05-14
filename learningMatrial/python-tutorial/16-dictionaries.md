# Dictionaries

A dictionary is a collection of key-value pairs, where each key is unique. A dictionary is defined using curly braces `{}` with key-value pairs separated by a colon `:`. The keys should be unique and of immutable data types such as `string`, `integer`, or `float`, while the values can be of any type.

!!!
    As of Python version 3.7, dictionaries are **ordered**. In Python 3.6 and earlier, dictionaries are unordered.

## Creating a Dictionary

Here's how you can create a dictionary in python:

```python {cmd}
# create an empty dictionary
my_dict = {}

# create a dictionary with initial values
my_dict = {'apple': 3, 'banana': 2, 'orange': 1, 11: 'eleven', 2.5: 'two and a half'}

print(my_dict)
# Output: {'apple': 3, 'banana': 2, 'orange': 1, 11: 'eleven', 2.5: 'two and a half'}
```

### `dict()`

You can also create a dictionary using the built-in dict() function:

```python {cmd}
# create an empty dictionary
my_dict = dict()

# create a dictionary with initial values
my_dict = dict(apple=3, banana=2, orange=1)
```

### `fromkeys()`

The fromkeys() method creates a new dictionary with the specified keys and values (if provided).

syntax:

```python
dict.fromkeys(sequence, value)
```

- **sequence**: Required. A sequence of keys to be used as the dictionary keys.
- **value**: Optional. The default value to set for each key in the dictionary (defaults to None if not specified).

```python {cmd}
keys = ['apple', 'banana', 'orange']


# create a new dictionary from the keys and default value of 0 for values
my_dict = dict.fromkeys(keys, 0)
print(my_dict) # Output: {'apple': 0, 'banana': 0, 'orange': 0}

# create a new dictionary from the keys and default value of None for values
my_dict = dict.fromkeys(keys)
print(my_dict) # Output: {'apple': None, 'banana': None, 'orange': None}
```

another example:

```python {cmd}
keys = ['apple', 'banana', 'orange']
values = [3, 2, 1]

my_dict = dict.fromkeys(keys)

# update the default values with the values from the other list
for i, key in enumerate(keys):
    my_dict[key] = values[i]

print(my_dict)
# Output: {'apple': 3, 'banana': 2, 'orange': 1}
```

However, there is a more concise way to create a dictionary from two separate lists using `dict()` constructor passing a `zip` of the keys and values, as follows:

```python {cmd}
keys = ['apple', 'banana', 'orange']
values = [3, 2, 1]

my_dict = dict(zip(keys, values))

print(my_dict)
# Output: {'apple': 3, 'banana': 2, 'orange': 1}
```

## Accessing Values

To access the value associated with a particular key in the dictionary, you can use the square bracket notation `[ ]` and provide the key:

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# access the value associated with the key 'apple'
print(my_dict['apple']) # Output: 3
```

You can also use the `get()` method to retrieve the value for a specific key. The advantage of using `get()` is that if the key does not exist, it returns `None` instead of raising a KeyError exception.

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# access the value associated with the key 'apple'
print(my_dict.get('apple')) # Output: 3

# access the value associated with the key 'grape'
print(my_dict.get('grape')) # Output: None
```

## Adding and Updating Values

To change the value associated with a specific key in the dictionary, you can use the square bracket notation `[ ]` to assign a new value to the key.

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# update the value associated with the key 'apple'
my_dict['apple'] = 4

print(my_dict) # Output: {'apple': 4, 'banana': 2, 'orange': 1}
```

To add a new key-value pair to the dictionary, you can simply use the square bracket notation with a new key and assign it to the value.

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# add a new key-value pair
my_dict['grape'] = 5

print(my_dict) 
# Output: {'apple': 3, 'banana': 2, 'orange': 1, 'grape': 5}
```

### `update()`

The update() method updates the dictionary with the key-value pairs from another dictionary or an iterable of key-value pairs.

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}
new_dict = {'grape': 5, 'mango': 4}

# update the dictionary with the key-value pairs from new_dict
my_dict.update(new_dict)

print(my_dict)
# Output: {'apple': 3, 'banana': 2, 'orange': 1, 'grape': 5, 'mango': 4}

# update the dictionary with an iterable of key-value pair tuples
my_dict.update([('pineapple', 6), ('cherry', 7)])

print(my_dict)
# Output: {'apple': 3, 'banana': 2, 'orange': 1, 'grape': 5, 'mango': 4, 'pineapple': 6, 'cherry': 7}

# update the dictionary with an iterable of key-value pair lists
my_dict.update([['kiwi', 8], ['strawberry', 9]])

print(my_dict)
# Output: {'apple': 3, 'banana': 2, 'orange': 1, 'grape': 5, 'mango': 4, 'pineapple': 6, 'cherry': 7, 'kiwi': 8, 'strawberry': 9}

```

You can use zip() to create a list of tuples from two lists and then use the list as an argument to the update() method.

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# create a list of tuples from two lists
fruits = ['grape', 'mango', 'pineapple', 'cherry']
counts = [5, 4, 6, 7]

# update the dictionary with the key-value pairs from the list of tuples
my_dict.update(zip(fruits, counts))

print(my_dict)
# Output: {'apple': 3, 'banana': 2, 'orange': 1, 'grape': 5, 'mango': 4, 'pineapple': 6, 'cherry': 7}
```

## Merging dictionaries

### merging dictionaries using `|`

You can also use the `|` operator to merge two dictionaries. The `|` operator creates a new dictionary by combining the key-value pairs from the two dictionaries. If a key exists in both dictionaries, the value from the second dictionary will be used. `|` is also known as the union operator.

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}
new_dict = {'grape': 5, 'mango': 4}

# merge the two dictionaries
merged_dict = my_dict | new_dict

print(merged_dict)
# Output: {'apple': 3, 'banana': 2, 'orange': 1, 'grape': 5, 'mango': 4}
```

### merging dictionaries using `update()`

You can also use the `update()` method to merge two dictionaries. The `update()` method updates the dictionary with the key-value pairs from another dictionary or an iterable of key-value pairs.

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}
new_dict = {'grape': 5, 'mango': 4}

# merge the two dictionaries
my_dict.update(new_dict)

print(my_dict)
# Output: {'apple': 3, 'banana': 2, 'orange': 1, 'grape': 5, 'mango': 4}
```

### merging dictionaries using `**` operator

You can also use the `**` operator to merge two dictionaries. The `**` operator creates a new dictionary by combining the key-value pairs from the two dictionaries. If a key exists in both dictionaries, the value from the second dictionary will be used. `**` is also known as the exponentiation operator.

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}
new_dict = {'grape': 5, 'mango': 4}

# merge the two dictionaries
merged_dict = {**my_dict, **new_dict}

print(merged_dict)
# Output: {'apple': 3, 'banana': 2, 'orange': 1, 'grape': 5, 'mango': 4}
```

### merging dictionaries using `dict()`

You can also use the `dict()` function to merge two dictionaries. The `dict()` function creates a new dictionary by combining the key-value pairs from the two dictionaries. If a key exists in both dictionaries, the value from the second dictionary will be used.

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}
new_dict = {'grape': 5, 'mango': 4}

# merge the two dictionaries
merged_dict = dict(my_dict, **new_dict)

print(merged_dict)
# Output: {'apple': 3, 'banana': 2, 'orange': 1, 'grape': 5, 'mango': 4}
```

## Removing elements in a Dictionary

### `del`

To remove a key-value pair from the dictionary, you can use the `del` keyword.

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# remove the key-value pair associated with the key 'apple'
del my_dict['apple']
print(my_dict) # Output: {'banana': 2, 'orange': 1}
```

### `pop()`

You can also use the `pop()` method to remove and return the value for a specific key.

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# remove the key-value pair associated with the key 'apple'
# and return the value
value = my_dict.pop('apple')
print(value) # Output: 3

print(my_dict) # Output: {'banana': 2, 'orange': 1}
```

### `clear()`

If you want to remove all the elements from a dictionary, you can use the clear() method.

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# remove all the elements from the dictionary
my_dict.clear()
print(my_dict) # Output: {}
```

## Looping Through a Dictionary

To loop through a dictionary, you can use a for loop. The for loop will iterate through all the keys in the dictionary.

### for loop

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# loop through the dictionary
for key in my_dict:
    print(key, my_dict[key])
# Output:
# apple 3
# banana 2
# orange 1
```

### `values()`

If you want to iterate over the values of the dictionary, you can use the `values()` method:

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# loop through the dictionary values
for value in my_dict.values():
    print(value)

# Output:
# 3
# 2
# 1
```

### `keys()`

If you want to iterate over the keys of the dictionary, you can use the `keys()` method:

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# loop through the dictionary keys
for key in my_dict.keys():
    print(key)
# Output:
# apple
# banana
# orange
```

### `items()`

The `items()` method returns a view object of the key-value pairs in the dictionary as tuples, which can be used to iterate over them or convert them into a list.

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# loop through the dictionary items
for key, value in my_dict.items():
    print(key, value)
# Output:
# apple 3
# banana 2
# orange 1
```

## Copy a Dictionary

### `copy()`

The copy() method is used to create a shallow copy of a dictionary.
The syntax of the copy() method is:

```python
original_dict = {'key1': 'value1', 'key2': 'value2'}
new_dict = original_dict.copy()
```

Here is an example of how to use the copy() method:

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# create a shallow copy of the dictionary
new_dict = my_dict.copy()

print(my_dict)  # Output: {'apple': 3, 'banana': 2, 'orange': 1}
print(new_dict) # Output: {'apple': 3, 'banana': 2, 'orange': 1}

# change the value of the key 'apple' in the new dictionary
new_dict['apple'] = 5

print(my_dict)  # Output: {'apple': 3, 'banana': 2, 'orange': 1}
print(new_dict) # Output: {'apple': 5, 'banana': 2, 'orange': 1}
```

It's important to note that while the `copy()` method is sufficient for creating a new dictionary that has the same keys and values as the original dictionary, it does not create a deep copy. This means that if the values in the original dictionary are mutable (like lists or other dictionaries), those values will still reference the same objects in memory, so changes made to the values in one dictionary will be reflected in the other.
If you need to create a true copy of a dictionary (also known as a deep copy), you can use the deepcopy() function from Python's copy module.

### `deepcopy()`

The `deepcopy()` function is used to create a deep copy of a dictionary. The syntax of the `deepcopy()` function is:

```python
from copy import deepcopy

original_dict = {'key1': 'value1', 'key2': 'value2'}
new_dict = deepcopy(original_dict)
```

Here is an example of how to use the `deepcopy()` function:

```python {cmd}
from copy import deepcopy

my_dict = {'apple': [3, 4], 'banana': 2, 'orange': 1}

# create a deep copy of the dictionary
new_dict = deepcopy(my_dict)

print(my_dict)  # Output: {'apple': [3, 4], 'banana': 2, 'orange': 1}
print(new_dict) # Output: {'apple': [3, 4], 'banana': 2, 'orange': 1}

# change the value of the key 'apple' in the new dictionary
new_dict['apple'][0] = 5

print(my_dict)  # Output: {'apple': [3, 4], 'banana': 2, 'orange': 1}
print(new_dict) # Output: {'apple': [5, 4], 'banana': 2, 'orange': 1}
```

### `dict()` constructor

In Python, the built-in dict() function can be used to create a shallow copy of a dictionary.

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# create a shallow copy of the dictionary
new_dict = dict(my_dict)

print(my_dict)  # Output: {'apple': 3, 'banana': 2, 'orange': 1}
print(new_dict) # Output: {'apple': 3, 'banana': 2, 'orange': 1}

# change the value of the key 'apple' in the new dictionary
new_dict['apple'] = 5

print(my_dict)  # Output: {'apple': 3, 'banana': 2, 'orange': 1}
print(new_dict) # Output: {'apple': 5, 'banana': 2, 'orange': 1}
```

## Dictionary Methods

### `setdefault()`

The `setdefault()` method returns the value of the specified key. If the key does not exist, it inserts the key with the specified value.

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# get the value of the key 'apple'
value = my_dict.setdefault('apple')
print(value) # Output: 3

# get the value of the key 'grape'
# if the key does not exist, insert the key, with a value of 5
value = my_dict.setdefault('grape', 5)
print(value) # Output: 5

print(my_dict)
# Output: {'apple': 3, 'banana': 2, 'orange': 1, 'grape': 5}
```

### `popitem()`

`popitem()` is a Python dictionary method that removes and returns (as a tuple) the last key-value pair from the dictionary. It means that this method doesn't take any arguments. In python versions before 3.7, it randomly pops a key-value item rather than the last element.

The popped item is returned as (key, value) tuple, and the dictionary is updated by removing the popped element. This method is useful when we don't care about which key is popped, as it provides us with an easy way to get and remove a single (key-value) pair in one go.

Here's an example that demonstrates how `popitem()` works:

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# pop an arbitrary key-value pair from the dictionary
item = my_dict.popitem()
print(item) # Output: ('orange', 1)

print(my_dict)
# Output: {'apple': 3, 'banana': 2}
```

### `len()`

The `len()` method returns the number of key-value pairs in the dictionary.

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# get the number of key-value pairs in the dictionary
print(len(my_dict)) # Output: 3
```

### `any()`

The `any()` function is a Python built-in function that returns `True` if at least one element of an iterable object is `True`. When used with dictionaries, the `any()` function will check for the truthiness of the dictionary's **keys**.

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# check if any of the keys are truthy
print(any(my_dict)) # Output: True

new_dict = {0: 3, 1: 2, 2: 1}

# check if any of the keys are truthy
print(any(new_dict)) # Output: True

new_dict = {0: 3, False: 2, None: 1}

# check if any of the keys are truthy
print(any(new_dict)) # Output: False - all keys are falsy

```

To check if any of the values are truthy, you can use the `any()` function with the `values()` method.

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# check if any of the values are truthy
print(any(my_dict.values())) # Output: True

new_dict = {0: 3, 1: 2, 2: 1}

# check if any of the values are truthy
print(any(new_dict.values())) # Output: True

new_dict = {'apple': 0, 'banana': False, 'orange': None, 'grape': '', 'pear': [], 'peach': (), 'cherry': {}, 'melon': set(), 'watermelon': 0.0, 'papaya': 0j, 'mango': b'', 'kiwi': bytearray(0), 'strawberry': range(0), 'blueberry': frozenset() }

# check if any of the values are truthy
print(any(new_dict.values())) # Output: False - all values are falsy
```

### `all()`

The `all()` function is a Python built-in function that returns `True` if all elements of an iterable object are `True`. When used with dictionaries, the `all()` function will check for the truthiness of the dictionary's **keys**.

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# check if all of the keys are truthy
print(all(my_dict)) # Output: True

new_dict = {0: 3, 1: 2, 2: 1}

# check if all of the keys are truthy
print(all(new_dict)) # Output: False - 0 is falsy

new_dict = {0: 3, False: 2, None: 1}

# check if all of the keys are truthy
print(all(new_dict)) # Output: False - 0, False, and None are falsy
```

To check if all of the values are truthy, you can use the `all()` function with the `values()` method.

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# check if all of the values are truthy
print(all(my_dict.values())) # Output: True

new_dict = {0: 3, 1: 2, 2: 1}

# check if all of the values are truthy
print(all(new_dict.values())) # Output: True

new_dict = {'apple': 0, 'banana': False, 'orange': None, 'grape': '', 'pear': [], 'peach': (), 'cherry': {}, 'melon': set(), 'watermelon': 0.0, 'papaya': 0j, 'mango': b'', 'kiwi': bytearray(0), 'strawberry': range(0), 'blueberry': frozenset() }

# check if all of the values are truthy
print(all(new_dict.values())) # Output: False - 0, False, None, '', [], (), {}, set(), 0.0, 0j, b'', bytearray(0), range(0), and frozenset() are falsy
```

### `sorted()`

`sorted()` is a Python built-in function that returns a new sorted list from the items in an iterable object. When it comes to sorting dictionaries, `sorted()` allows us to sort the dictionary based on its keys or values.

sorted syntax:

```python
sorted(iterable, key=None, reverse=False)
```

- **iterable**: the iterable object to be sorted
- **key**: a function that will be used to extract a comparison key from each list element. The default value is `None` (compare the elements directly).
- **reverse**: a boolean value. If set to `True`, then the list elements are sorted as if each comparison were reversed. The default value is `False`.

!!!
    - The `sorted()` function does not modify the original dictionary. It returns a new sorted list.
    - It returns a list.

#### Sorting Based on the keys

When you pass the dictionary to the `sorted()` function, it will return a new sorted list of the dictionary's keys.

```python {cmd}
my_dict = {'maria': 3, 'john': 2, 'andrew': 1}

# sort the dictionary based on the keys and store the result in a new list
sorted_dict_keys = sorted(my_dict)
print(sorted_dict) # Output: ['andrew', 'john', 'maria']
# `sorted()` does not modify the original dictionary
print(my_dict) # Output: {'maria': 3, 'john': 2, 'andrew': 1}
```

To sort the dictionary based on the keys, we need to use the `key` parameter and pass in a function that will return the keu of each dictionary item.

```python {cmd}
my_dict = {'maria': 3, 'john': 2, 'andrew': 1}

def sort_by_key(item):
    return item[0] # item is a tuple (key, value), so we return the key

# sort the dictionary based on the keys and store the result in a new list of tuples
sorted_dict_tuples = sorted(my_dict.items(), key=sort_by_key)
print(sorted_dict_tuples)
 # Output: [('andrew', 1), ('john', 2), ('maria', 3)]

# now we can convert the list of tuples back to a dictionary
sorted_dict = dict(sorted_dict_tuples)
print(sorted_dict) 
# Output: {'andrew': 1, 'john': 2, 'maria': 3}

# we can combine all steps into one line
sorted_dict = dict(sorted(my_dict.items(), key=sort_by_key))

# we can also use a lambda function
sorted_dict = dict(sorted(my_dict.items(), key=lambda item: item[0]))
```

#### Sorting Based on the values

To sort the dictionary based on the values, we need to use the `key` parameter and pass in a function that will return the value of each dictionary item.

```python {cmd}
my_dict = {'maria': 3, 'john': 2, 'andrew': 1}

def sort_by_value(item):
    return item[1] # item is a tuple (key, value), so we return the value

# sort the dictionary based on the values and store the result in a new list of tuples
sorted_dict_tuples = sorted(my_dict.items(), key=sort_by_value)
print(sorted_dict_tuples)
# Output: [('andrew', 1), ('john', 2), ('maria', 3)]

# now we can convert the list of tuples back to a dictionary
sorted_dict = dict(sorted_dict_tuples)
print(sorted_dict)
# Output: {'andrew': 1, 'john': 2, 'maria': 3}

# we can combine all steps into one line
sorted_dict = dict(sorted(my_dict.items(), key=sort_by_value))

# we can also use a lambda function
sorted_dict = dict(sorted(my_dict.items(), key=lambda item: item[1]))
```

#### Sorting in Reverse Order

To sort the dictionary in reverse order, we need to use the `reverse` parameter and set it to `True`.

```python {cmd}
my_dict = {'maria': 3, 'john': 2, 'andrew': 1}

# sort the dictionary in reverse order based on the keys and store the result in a new list
sorted_dict_keys = sorted(my_dict.items(), key=lambda item: item[0], reverse=True)
print(sorted_dict_keys)
# Output: [('maria', 3), ('john', 2), ('andrew', 1)]

# now we can convert the list of tuples back to a dictionary
sorted_dict = dict(sorted_dict_keys)
print(sorted_dict)
# Output: {'maria': 3, 'john': 2, 'andrew': 1}
```

!!! note Practical Example

    Let's say we have a list of student dictionaries. Each dictionary contains the student's name and their grade. We want to sort the list of students based on their grades.

    ```python {cmd}
    students = [
        {'name': 'John', 'grade': 8},
        {'name': 'Maria', 'grade': 10},
        {'name': 'Andrew', 'grade': 7},
        {'name': 'Jane', 'grade': 9}
    ]

    # sort the list of students based on their grades
    sorted_students = sorted(students, key=lambda student: student['grade'])
    print(sorted_students)
    # Output:
    # [{'name': 'Andrew', 'grade': 7},
    #  {'name': 'John', 'grade': 8},
    #  {'name': 'Jane', 'grade': 9},
    #  {'name': 'Maria', 'grade': 10}]
    ```

## Membership Test

You can test if an item exists in a dictionary by using the `in` or `not in` keyword.

## `in`

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# check if the key 'apple' exists in the dictionary
print('apple' in my_dict) # Output: True
```

## `not in`

```python {cmd}
my_dict = {'apple': 3, 'banana': 2, 'orange': 1}

# check if the key 'grape' does not exist in the dictionary
print('grape' not in my_dict) # Output: True
```
