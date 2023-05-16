# Comprehensions

Comprehensions are a concise way to create a list, set, or dictionary in Python. It provides an alternative syntax to build collections from iterables, such as lists, tuples, or even strings.

In Python, there are Four types of comprehensions:

- List Comprehension
- Set Comprehension
- Dictionary Comprehension
- Generator Comprehension

Comprehensions are a powerful tool that allow you to create collections concisely and efficiently. However, it is important to use them with care, since overly complex or nested comprehensions can reduce code readability.

## List Comprehension

List comprehension is a concise way to create a new list by evaluating an expression for each item in an iterable. The syntax of list comprehension is as follows:

```python
new_list = [expression for item in iterable if condition]
```

Here, `expression` is the operation that you want to perform on each item of the iterable, `item` is the variable that represents the current element of the iterable, and `condition` is an optional parameter that filters out elements from the iterable.

```python {cmd}
# create a list of squares of numbers from 1 to 10
squares = [x ** 2 for x in range(1, 11)]
print(squares)
# Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

The above example is equivalent to the following for loop:

```python {cmd}
squares = []
for x in range(1, 11):
    squares.append(x ** 2)
print(squares)
# Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

Here is another example of list comprehension with a condition:

```python {cmd}
# create a list of odd numbers from 1 to 10
odd_numbers = [x for x in range(1, 11) if x % 2 == 1]
print(odd_numbers)
# Output: [1, 3, 5, 7, 9]
```

## Set Comprehension

Set comprehension is a way to create a new set by evaluating an expression for each item in an iterable. The syntax of set comprehension is similar to the list comprehension, except it uses curly braces instead of square brackets.

```python
new_set = {expression for item in iterable if condition}
```

Here is an example of set comprehension:

```python {cmd}
# create a set of squares of numbers from 1 to 10
squares_set = {x ** 2 for x in range(1, 11)}
print(squares_set)
# Output: {1, 4, 9, 16, 25, 36, 49, 64, 81, 100}
```

Note that the above example returns a set, which is unordered. So, the order of elements in the output may not be the same as the order of elements in the input iterable.

Another thing to note is that the set comprehension does not allow duplicate elements. So, if the iterable contains duplicate elements, the set comprehension will return a set with unique elements.

```python {cmd}
# a list of students with duplicate names
students = ['John', 'Jane', 'Jack', 'Janice', 'John']
# create a set of students that their names are less than 5 characters
students_set = {name for name in students if len(name) < 5}
print(students_set)
# Output: {'John', 'Jane', 'Jack'}
# As John is repeated twice in the students list, it is only added once to the set.
```

## Dictionary Comprehension

Dictionary comprehension is a way to create a new dictionary by evaluating an expression for each item in an iterable. The syntax of dictionary comprehension is as follows:

```python
new_dict = {key_expression:value_expression for item in iterable if condition}
```

Here, `key_expression` is the operation that produces the keys of the dictionary, `value_expression` is the operation that produces the values of the dictionary, `item` represents the current element of the iterable, and `condition` is an optional parameter that filters out elements from the iterable.

```python {cmd}
# create a dictionary of squares of numbers from 1 to 10
squares_dict = {x:x ** 2 for x in range(1, 11)}
print(squares_dict)
# Output: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81, 10: 100}
```

## Generator comprehension

Generator comprehension is a concise way to create a generator in Python. It is similar to list comprehension, but it returns an **iterator** instead of a list.

The syntax of generator comprehension is the same as list comprehension, except it uses parentheses instead of square brackets.

```python
new_generator = (expression for item in iterable if condition)
```

Here, `expression` is the operation that you want to perform on each item of the iterable, `item` is the variable that represents the current element of the `iterable`, and `condition` is an optional parameter that filters out elements from the iterable.

Example:

```python {cmd}
# create a generator of squares of numbers from 1 to 10
squares_gen = (x ** 2 for x in range(1, 11))
print(squares_gen)

# Output: <generator object <genexpr> at 0x7f1605d7b200>
```

In this example, squares_gen is created using generator comprehension. It yields the squares of numbers from 1 to 10 when iterated over.

One of the main advantages of using generator comprehension is that it does not create the entire list in memory at once. Instead, it generates each element on-the-fly as it is needed, making it more memory-efficient for large datasets.
You can iterate over a generator using a `for` loop or the `next()` function to retrieve each element one at a time. Once the generator is exhausted, it cannot be iterated over again.

```python {cmd}
squares_gen = (x ** 2 for x in range(1, 11))
# iterate over the generator using a for loop
for num in squares_gen:
    print(num)

# Output:
# 1
# 4
# 9
# 16
# 25
# 36
# 49
# 64
# 81
# 100
```

In conclusion, generator comprehension is a concise and memory-efficient way to create a generator in Python. It is particularly useful for large datasets and situations where you only need to iterate over the elements once.
