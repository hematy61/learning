# Functions

To define a function in Python, use the def keyword followed by the function name and a set of parentheses containing any arguments, if required. The function body is indented below the function definition. The return keyword is used to return a value from the function.

Here is the syntax for defining a function:

```python
def function_name(arg1, arg2, ...):
    # function body
    return value
```

Here is an example of a function that adds two numbers:

```python {cmd}
def add(x,y):
    """This function adds two numbers"""
    return x + y

print(add(5, 6)) # 11
```

## Function arguments

A function can have any number of arguments. Arguments are specified after the function name, inside the parentheses. You can also define default values for arguments. If an argument with a default value is not provided when the function is called, its default value is used.

```python {cmd}
def get_api_url(base_url, endpoint, version="v1"):
    return f"{base_url}/{endpoint}/{version}"

print(get_api_url("https://api.example.com", "users")) 
# https://api.example.com/users/v1

print(get_api_url("https://api.example.com", "users", "v2"))
# https://api.example.com/users/v2
```

if you want to pass a list of arguments to a function, you can use the `*` operator to unpack the list into individual arguments.

```python {cmd}
def add(x, y):
    return x + y

numbers = [5, 6]
print(add(*numbers)) # 11
```

if you want your function to accept an arbitrary number of arguments, you can use the `*` operator to unpack the arguments into a tuple.

```python {cmd}
def add(*numbers):
    total = 0
    for number in numbers:
        total += number
    return total

print(add(5, 6)) # 11
print(add(5, 6, 7)) # 18
print(add(5, 6, 7, 8)) # 26
```

## Keyword arguments

In Python, keyword arguments, also known as kwargs, are a way to pass named arguments to a function. We use them when we want to provide values to specific parameters of a function in any order.

The syntax for keyword arguments is:

```python
function_name(arg1=value1, arg2=value2, ...)
# or
function_name(**kwargs)
```

**kwargs is a dictionary that maps the keyword names to the values that we pass alongside the function call. The order of the arguments does not matter. kwargs is a common name for this type of parameter, but you can call it whatever you like.

```python {cmd}
def print_person_info(name, age, profession):
    print(f"Name: {name}")
    print(f"Age: {age}")
    print(f"Profession: {profession}")

print_person_info(name="John", age=21, profession="Developer")
# Name: John
# Age: 21
# Profession: Developer

# the order of the arguments does not matter when using keyword arguments
print_person_info(age=21, profession="Developer", name="John")
# Name: John
# Age: 21
# Profession: Developer
```

Here is an example of a function that accepts an arbitrary number of keyword arguments:

```python {cmd}
def print_person_info(**person):
    print(f"Name: {person['name']}")
    print(f"Age: {person['age']}")
    print(f"Profession: {person['profession']}")

print_person_info(age=25, name="John", profession="Engineer")
# Name: John
# Age: 25
# Profession: Engineer

# if you don't pass one of the arguments, you will get a KeyError
print_person_info(age=25, name="John")
# KeyError: 'profession'
```

`**person` is a dictionary that maps the keyword argument names to the values and can be accessed using the `[]` operator.

## combining positional and keyword arguments

You can combine positional and keyword arguments in a function call. The positional arguments must come first, followed by the keyword arguments.

```python {cmd}
def print_person_info(name, age, profession):
    print(f"Name: {name}")
    print(f"Age: {age}")
    print(f"Profession: {profession}")

print_person_info("John", 21, profession="Developer")
# Name: John
# Age: 21
# Profession: Developer
```

Another example to use `*` and `**` operators to unpack a list and a dictionary into positional and keyword arguments:

```python {cmd}
def multiply_numbers(a, b):
    return a * b

def calculate_total(*args, **kwargs):
    total = 0
    for arg in args:
        total += arg
    if kwargs:
        total *= multiply_numbers(**kwargs)
    return total

print(calculate_total(1, 2, 3, a=4, b=5)) # Output: 120
```

In this example, the calculate_total() function receives some positional arguments using *args and keyword arguments using ** kwargs. It sums up all the positional arguments and then, if there are any keyword arguments, it uses the multiply_numbers() function to calculate the product of those numbers. The result is returned as the total.

## Function return values

A function can return a value using the return keyword. If no return value is specified, the function returns None.

```python {cmd}
def add(x, y):
    return x + y

print(add(5, 6)) # 11

def print_name(name):
    print(f"Name: {name}")
# print_name() does not return a value
print(print_name("John")) # None
```
