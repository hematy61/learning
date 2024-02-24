# Data types in Python

Here is a list of data types in Python.

- Numeric types (`int`, `float`, `complex`)
- Sequence types (`list`, `tuple`, `range`)
- Text sequence type (`str`)
- Mapping type (`dict`)
- Boolean type (`bool`)
- Set types (`set`, `frozenset`)
- Binary types (`bytes`, `bytearray`, `memoryview`)
- None type (`None`)
- Iterator type
- Generator type

## Numeric types

Numeric types are used to store numbers. Python supports three different numeric types:

- `int` (signed integers) - `1`, `2`, `3`, `-10`
- `float` (floating point real values) - `1.0`, `-2.5`
- `complex` (complex numbers) - `1 + 2j`, `2 - j`, `3 + 5j`, `j`, `5j`

!!!
    Floating point numbers can be negative, positive or zero.

    ```python
    x = 1.0
    y = -2.5
    z = 0.0
    print(type(x))  # <class 'float'>
    ```

## Sequence types

Sequence types are used to store a sequence of values. Python supports three different sequence types:

- `list` - a mutable sequence of values

    ```python
    x = [1, 2, 3]
    x[0] = 10
    print(x)  # [10, 2, 3]
    print(type(x))  # <class 'list'>
    ```

- `tuple` - an immutable sequence of values

    ```python
    x = (1, 2, 3)
    x[0] = 10  # TypeError: 'tuple' object does not support item assignment
    print(type(x))  # <class 'tuple'>
    y = (1, 2, 3, 4, 5) # tuple with 5 elements
    ```

- `range` - a sequence of numbers

    ```python
    x = range(1, 10)
    print(x)  # range(1, 10)
    print(type(x))  # <class 'range'>
    # iterate over the range
    for i in x:
        print(i)
        # 1, 2, 3, 4, 5, 6, 7, 8, 9
    ```

## Text sequence type

The `str` type is used to store textual data. It is a sequence of Unicode code points.

```python
y = 'a string with single quotes'
x = "a string with double quotes"
print(x[0])  # a
print(x[1])  # space
print(x[2])  # s
print(type(x))  # <class 'str'>
```

## Mapping type

The `dict` type is used to store data values in key:value pairs.

```python
x = {
    "name": "John",
    "age": 36,
    "country": "Norway"
}
print(x["age"])  # 36
print(x.get("age"))  # 36
print(x.age)  # AttributeError: 'dict' object has no attribute 'age'
print(type(x))  # <class 'dict'>
```

## Boolean type

The `bool` type is used to store values `True` or `False`.

```python
x = True
print(x)  # True
print(type(x))  # <class 'bool'>
```

## Set types

Set types are used to store multiple items in a single variable and are not allowed to have duplicate values. Being an unordered collection, sets do not record element position or order of insertion. Accordingly, sets do not support indexing, slicing, or other sequence-like behavior. Python supports two different set types:

- `set` - a mutable set of values.

    ```python
    x = {"apple", "banana", "cherry"}
    x.add("orange")
    print(x)  # {'orange', 'apple', 'banana', 'cherry'}
    print(type(x))  # <class 'set'>
    ```

- `frozenset` - an immutable set of values

    ```python
    x = frozenset({"apple", "banana", "cherry"})
    x.add("orange")  # AttributeError: 'frozenset' object has no attribute 'add'
    print(type(x))  # <class 'frozenset'>
    ```

## Binary types

Binary types are used to store bytes of data, such as images or other non-textual data. Python supports three different binary types:

- `bytes` - a mutable sequence of integers in the range 0 <= x < 256

    ```python
    x = b"Hello"
    print(x)  # b'Hello'
    print(type(x))  # <class 'bytes'>
    ```

- `bytearray` - a mutable sequence of integers in the range 0 <= x < 256

    ```python
    x = bytearray(5)
    print(x)  # bytearray(b'\x00\x00\x00\x00\x00')
    print(type(x))  # <class 'bytearray'>
    ```

- `memoryview` - a memory view object

    ```python
    x = memoryview(bytes(5))
    print(x)  # <memory at 0x7f9b0c0b0e80>
    print(type(x))  # <class 'memoryview'>
    ```

## None type

The `None` type is used to define a null value. It is not the same as `0`, `False` or an empty string. `None` is a data type of its own (NoneType) and only has one value: `None`.

```python
x = None
print(x)  # None
print(type(x))  # <class 'NoneType'>
```

## Iterator type

The iterator type is used to iterate over a sequence. It is an object that contains a countable number of values.

```python
x = iter(["apple", "banana", "cherry"])
print(next(x))  # apple
print(next(x))  # banana
print(next(x))  # cherry
print(type(x))  # <class 'list_iterator'>
```

## Generator type

The generator type is used to create iterators. It is a function that returns an object (iterator) which we can iterate over (one value at a time).

```python
def generator_function():
    yield 1
    yield 2
    yield 3

x = generator_function()
print(next(x))  # 1
print(next(x))  # 2
print(next(x))  # 3
print(type(x))  # <class 'generator'>
```
