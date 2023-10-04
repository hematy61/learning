# Type casting in Python

Type casting is a way to convert one data type to another data type. This is also called type conversion. We can convert one data type to another by using built-in functions like int(), float(), str() etc.  There are two types of type conversions available in Python:

- implicit type conversion
- explicit type conversion.

## Implicit type casting

The Implicit type conversion or coercion is an automatic type conversion that occurs during the execution of the program. This happens when Python automatically converts one data type to another data type without any user intervention. In other words, we don't need to specify the conversion explicitly as it happens automatically.

A typical example of implicit type conversion in Python is when we perform mathematical operations between different data types like integers and floating-point numbers. When we perform arithmetic operations between two different data types, Python automatically converts the smaller data type to the larger data type to maintain the precision of the result.

For example, if we add an integer and a floating-point number, the integer will be converted to a floating-point number.

```python {cmd="python3"}
# 10 is an integer and 3.14 is a floating-point number and python automatically converts the integer 10 to a floating-point number.
x = 10 + 3.14
print(x) # 13.14
```

Another example is when we perform division between two integers. The result will be a floating-point number.

```python {cmd="python3"}
x = 10 / 3
print(x) # 3.3333333333333335
```

One more example is when we perform division between an integer and a floating-point number. The result will be a floating-point number.

```python {cmd="python3"}
x = 10 / 3.0
print(x) # 3.3333333333333335
```

## Explicit type casting

Explicit type casting or type conversion refers to the process of converting data from one data type to another. Explicit type casting is required when a programmer wants to convert a data type that is not compatible with another data type.

Python provides several built-in functions to perform explicit type casting, like `int()`, `float()`, `str()`, `bool()`, `list()`, `tuple()`, `set()`, `dict()`, `complex()`, `bytes()` etc. These functions can be used to convert one data type to another.

For example, if you have a floating-point number and you want to print it, the print function will raise an error because it can only print strings. In this case, we can use the `str()` function to convert the floating-point number to a string.

```python {cmd="python3"}
x = 10.5
# This will raise an error because print() can only print strings
# TypeError: can only concatenate str (not "float") to str
print(x)

# To fix this, we can use the str() function to convert the floating-point number to a string
print(str(x)) # 10.5
```

Here is a list of all the built-in functions that can be used to explicitly convert one data type to another.

- `int()`: Used to convert a number or string containing digits into an integer.

- `float()`: Used to convert a number or string into a floating-point number.

- `str()`: Used to convert any object into string data type.

- `bool()`: Used to convert any object into a Boolean (True or False) value.

- `list()`: Used to convert any iterable object into a list.

- `tuple()`: Used to convert any iterable object into a tuple.

- `set()`: Used to convert any iterable object into a set.

- `dict()`: Used to create a dictionary object from a sequence of key-value pairs.

- `complex()`: Used to create a complex number from a string or two numbers.

- `bytes()`: Used to create a bytes object from a string or iterable.

### `int()`

The `int()` function is used to convert a number or string containing digits into an integer.

syntax:

```python
int(x=0, base=10)
```

Where x is the value that needs to be converted to the integer, and base denotes the number system we want our output to be in.

- If the argument is a floating-point number, it will be truncated to the integer part and round it down.

```python {cmd="python3"}
x = int(3.14) 
print(x) # 3

y = int(-3.14)
print(y) # -3

z = int(3.99) # rounds down to nearest integer which is 3
print(z) # 3
```

- If the argument is a string, it will be converted to an integer if the string contains only digits.

```python {cmd="python3"}
x = int('123') 
print(x) # 123
```

- If the string contains any other character, it will raise a `ValueError` exception.

```python {cmd="python3"}
x = int('123.45')
print(x)
# ValueError: invalid literal for int() with base 10: '123.45'
```

```python {cmd="python3"}
y = int('123abc')
print(y)
# ValueError: invalid literal for int() with base 10: '123abc'
```

- If the argument is a boolean, it will return 1 if the argument is `True`, and 0 if the argument is `False`.

```python {cmd="python3"}
x = int(True)
print(x) # 1

y = int(False)
print(y) # 0
```

- If the argument is binary, octal, or hexadecimal, it will be converted to an integer. The base is needed to be specified in the second argument, otherwise it will raise a `ValueError` exception. The reason for this is that the base's default value is 10, and binary, octal, and hexadecimal are not in base 10.

```python {cmd="python3"}
x = int('0b1010', 2) # 0b is used to denote binary
print(x) # 10

y = int('0o123', 8) # 0o is used to denote octal
print(y) # 83

z = int('0x123', 16) # 0x is used to denote hexadecimal
print(z) # 291
```

### `float()`

It converts a number or a string containing a floating-point number to a floating-point type.

syntax:

```python
float(x)
```

Where x is the value that needs to be converted to the floating-point number.

- If the argument is an integer, it will be converted to a floating-point number.

```python {cmd="python3"}
x = float(10)
print(x) # 10.0
```

- If the argument is a string, it will be converted to a floating-point number if the string contains only digits.

```python {cmd="python3"}
x = float('123.45')
print(x) # 123.45

y = float('123')
print(y) # 123.0
```

- If the string contains any other character, it will raise a `ValueError` exception.

```python {cmd="python3"}
x = float('123.45abc')
print(x)
# ValueError: could not convert string to float: '123.45abc'

y = float('0b1010')
print(y)
# ValueError: could not convert string to float: '0b1010'

z = float('0o123')
print(z)
# ValueError: could not convert string to float: '0o123'

```

- If the argument is a boolean, it will return 1.0 if the argument is `True`, and 0.0 if the argument is `False`.

```python {cmd="python3"}
x = float(True)
print(x) # 1.0
```

!!! Note Rounding a floating-point number
    To round a floating-point number to a certain number of decimal places, we can use the `round()` function or the `format()` method.

    ```python {cmd="python3"}
    x = round(3.1415926535, 2)
    print(x) # 3.14
    # or we can use the format() method. The first argument is the number to be rounded, and the second argument is the number of decimal places to round to. `.2f` means 2 decimal places and the f stands for float.
    print(format(x, '.2f')) # 3.14
    ```
    ```

### `str()`

It converts an object to its string representation. It can convert several data types to strings such as integers, floats, lists, tuples, dictionaries, and more.

syntax:

```python
str(object)
```

Where object is the value that needs to be converted to the string.

```python {cmd="python3"}
# integer to string
x = str(10)
print(x) # '10'

# float to string
y = str(3.14)
print(y) # '3.14'

# boolean to string
z = str(True)
print(z) # 'True'

# list to string
a = str([1, 2, 3])
print(a) # '[1, 2, 3]'

# tuple to string
b = str((1, 2, 3))
print(b) # '(1, 2, 3)'

# dictionary to string
c = str({'name': 'John', 'age': 30})
print(c) # "{'name': 'John', 'age': 30}"

# set to string
d = str({1, 2, 3})
print(d) # '{1, 2, 3}'

# range to string
e = str(range(5))
print(e) # 'range(0, 5)'

# complex number to string
f = str(1 + 2j)
print(f) # '(1+2j)'

# bytes to string
g = str(b'Hello')
print(g) # "b'Hello'"
```

### `bool()`

It converts any object to a Boolean value. It returns `True` if the object is not empty, and `False` if the object is empty.

syntax:

```python
bool(object)
```

Where object is the value that needs to be converted to the Boolean value.

```python {cmd="python3"}
# integer to boolean - any non-zero integer is True
a = bool(10)
print("bool(10) = ", a) # bool(10) =  True
b = bool(0)
print("bool(0) = ", b) # bool(0) =  False

c = bool(-10) 
print("bool(-10) = ", c) # bool(-10) =  True

# float to boolean - any non-zero float is True
d = bool(3.14)
print("bool(3.14) = ", d)  # bool(3.14) =  True

e = bool(0.0)
print("bool(0.0) = ", e) # bool(0.0) =  False

f = bool(-3.14) 
print("bool(-3.14) = ", f) # bool(-3.14) =  True

# string to boolean - any non-empty string is True
g = bool('Hello')
print("bool('Hello') = ", g) # bool('Hello') =  True

h = bool('')
print("bool('') = ", h) # bool('') =  False

i = bool(' ')
print("bool(' ') = ", i) # bool(' ') =  True

j = bool('0')
print("bool('0') = ", j) # bool('0') =  True

k = bool('False')
print("bool('False') = ", k) # bool('False') =  True

# list to boolean - any non-empty list is True
l = bool([1, 2, 3])
print("bool([1, 2, 3]) = ", l) # bool([1, 2, 3]) =  True

m = bool([])
print("bool([]) = ", m) # bool([]) =  False

# tuple to boolean - any non-empty tuple is True
n = bool((1, 2, 3))
print("bool((1, 2, 3)) = ", n) # bool((1, 2, 3)) =  True

o = bool(())
print("bool(()) = ", o) # bool(()) =  False

# dictionary to boolean - any non-empty dictionary is True
p = bool({'name': 'John', 'age': 30})
print("bool({'name': 'John', 'age': 30}) = ", p) # bool({'name': 'John', 'age': 30}) =  True

q = bool({})
print("bool({}) = ", q) # bool({}) =  False
```

### `list()`

It allows us to create a list data type. The `list()` function can take an iterable as an argument (e.g., another `list`, `tuple`, `string`) and return a new list object with the elements from the iterable.

Here's some examples of how we can use the list() function:

```python {cmd="python3"}
# create an empty list
x = list()
print(x) # []

# create a list from a string
y = list('Hello')
print(y) # ['H', 'e', 'l', 'l', 'o']

# create a list from a tuple
z = list((1, 2, 3))
print(z) # [1, 2, 3]

# create a list from a range
a = list(range(5))
print(a) # [0, 1, 2, 3, 4]

# create a list from a set
b = list({1, 2, 3})
print(b) # [1, 2, 3]

# create a list from a dictionary
c = list({'name': 'John', 'age': 30})
print(c) # ['name', 'age']

# create a list from a dictionary values
d = list({'name': 'John', 'age': 30}.values())
print(d) # ['John', 30]
```

### `tuple()`

It creates a tuple object. A tuple is an ordered, immutable collection of values enclosed within parentheses (). Tuples are similar to lists, but unlike lists, tuples cannot be modified once they are created.

The tuple() function can also be used to convert other iterable objects into a tuple. When you pass an iterable such as a list or a string to the `tuple()` function, it returns a tuple with the same elements. Here's an example:

```python {cmd="python3"}
# create an empty tuple
x = tuple()
print(x) # ()

# create a tuple from a string
y = tuple('Hello')
print(y) # ('H', 'e', 'l', 'l', 'o')

# create a tuple from a list
z = tuple([1, 2, 3])
print(z) # (1, 2, 3)

# create a tuple from a range
a = tuple(range(5))
print(a) # (0, 1, 2, 3, 4)

# create a tuple from a set
b = tuple({1, 2, 3})
print(b) # (1, 2, 3)

# create a tuple from a dictionary
c = tuple({'name': 'John', 'age': 30})
print(c) # ('name', 'age')

# create a tuple from a dictionary values
d = tuple({'name': 'John', 'age': 30}.values())
print(d) # ('John', 30)
```

### `set()`

It creates a new empty set object. A set is an unordered, mutable collection of unique elements that support operations like union, intersection, and difference.

Here's an example of how to use the set() function:

```python {cmd="python3"}
# create an empty set
x = set()
print(x) # set()

# create a set from a string
y = set('Hello')
print(y) # {'o', 'e', 'l', 'H'} - note that the order is random and the duplicates are removed automatically.

# create a set from a list
z = set([1, 2, 3])
print(z) # {1, 2, 3}

# create a set from a tuple
a = set((1, 2, 3))
print(a) # {1, 2, 3}

# create a set from a range
b = set(range(5))
print(b) # {0, 1, 2, 3, 4}

# create a set from a dictionary
c = set({'name': 'John', 'age': 30})
print(c) # {'name', 'age'}

# create a set from a dictionary values
d = set({'name': 'John', 'age': 30}.values())
print(d) # {'John', 30}
```

### `dict()`

In Python, a dictionary is an unordered collection of key-value pairs where each key must be unique. The dict() function creates a new dictionary object which can hold zero or more items.

Here's an example of how to use the dict() function:

```python {cmd="python3"}
# create an empty dictionary
x = dict()
print(x) # {}

# create a dictionary from a list of tuples
y = dict([('name', 'John'), ('age', 30)])
print(y) # {'name': 'John', 'age': 30}

# create a dictionary from a list of lists
z = dict([['name', 'John'], ['age', 30]])
print(z) # {'name': 'John', 'age': 30}

# create a dictionary from a list of dictionaries
a = dict([{'name': 'John'}, {'age': 30}])
print(a) # {'name': 'John', 'age': 30}

# Creating a new dictionary with some initial values
b = dict(name='John', age=30)
print(b) # {'name': 'John', 'age': 30}
```

### `complex()`

It returns a complex number. It accepts two arguments real and imaginary where real represents the real part of the complex number and imaginary represents the imaginary part of the number.

Here's how you can use the complex() function:

```python {cmd="python3"}
# create a complex number
x = complex(1, 2)
print(x) # (1+2j)

# create a complex number from a string
y = complex('1+2j')
print(y) # (1+2j)
```

### `bytes()`

It creates a byte object. Bytes are immutable objects that represent a sequence of bytes.

For example, we can create a bytes object from a string and specify the encoding format:

```python {cmd="python3"}
# create a bytes object from a string
x = bytes('Hello', 'utf-8')
print(x) # b'Hello'
```
