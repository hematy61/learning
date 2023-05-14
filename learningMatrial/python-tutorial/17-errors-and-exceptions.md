# Errors and Exceptions

In Python, both Errors and Exceptions are used to indicate that something has gone wrong. Errors are usually syntax errors, while exceptions are raised when the code is syntactically correct but the code could not be executed for some reason. Even though the terms "Error" and "Exception" are often used interchangeably, they are not exactly the same.

**Errors** are events that occur while running the code that may result in program failure. Some common examples of errors include Syntax Error or NameError which occur when there is an issue with a program's syntax or when a variable hasn't been defined properly.

**Exceptions**, on the other hand, are special objects that are raised whenever an error occurs during runtime execution of a program. Unlike Errors, exceptions can be handled within your programs by the use of Try-Except statements.

In short:

- Errors can be caused by syntax or human errors such as typos or misspelling, and can be easily fixed with the help of IDEs.
- Exceptions occur during code execution and need to be handled by the developer to prevent application failure.

Python includes default exception errors to help identify potential issues.

ZeroDivisionError is an example of a built-in exception error in Python. This error is raised when the second argument of a division or modulo operation is zero.

```python {cmd}
count = 10 / 0 # ZeroDivisionError: division by zero
```

## Handling Exceptions

Handling Exceptions in Python refers to the process of catching and managing exceptions that may occur during the execution of a program.

Any code that raises an exception can be handled using the try-except block in Python which provides a way to handle errors or unexpected events encountered during the execution of a program.

The general syntax for try-except in Python is as follows:

```python
try:
    #block of code that may raise an exception
except ExceptionType as alias:
    #code to handle the exception (or log it)
else:
    #code to execute if no exception was raised
finally:
    #Code will always execute whether an exception was raised or not
```

- ExceptionType is the type of exception that you want to handle. You can specify multiple exceptions in a single except block by separating them with commas.
- alias is an optional variable that stores the exception object for further processing.

## Built-in Exceptions

Python provides a wide range of built-in exceptions that can be raised and handled while a program is running. Here is a list of some commonly used exceptions in Python:

- **Exception**: Base class for all exceptions
- **AttributeError**: Raised when an attribute reference or assignment fails
- **EOFError**: Raised when the input() function hits end-of-file condition (EOF)
- **ImportError**: Raised when an import statement fails to find the module definition or a name in a module
- **IndexError**: Raised when an index of a sequence doesn't exist
- **KeyError**: Raised when a specified key is not found in the dictionary
- **KeyboardInterrupt**: Raised by ctrl-c keyboard interrupt signals
- **MemoryError**: Raised when an operation runs out of memory
- **NameError**: Raised when a local or global name is not found
- **NotImplementedError**: Raised when an abstract method hasn't been overridden
- **OSError**: Raised when a system error occurs
- **OverflowError**: Raised when the result of an arithmetic operation exceeds the limit of the implementable number type
- **RuntimeError**: Raised when an error occurs that doesn't belong to other categories
- **StopIteration**: Raised by next() method to indicate that there's no further item to be examined in iterable object
- **SyntaxError**: Raised when there's error in the code syntax
- **TypeError**: Raised when a function or operation is applied to an object of an unsuitable type
- **ValueError**: Raised when a function receives an argument of the correct type but with an inappropriate value
- **ZeroDivisionError**: Raised when the second argument of a division or modulo operation is zero
- **AssertionError**: Raised when an assert statement fails
- **FloatingPointError**: Raised when a floating point operation fails
- **FileNotFoundError**: Raised when a file or directory is requested but doesn't exist

Example 1: Printing a custom message when an exception is raised.

```python {cmd}
try:
    count = 10 / 0
except:
    print("An error occurred")
```

Example 2: If you need the exception information, you can use the as keyword to create an alias for the exception object.

```python {cmd}
try:
    count = 10 / 0
except Exception as e:
    print(e)
    # division by zero
```

Example 3: You can also narrow down the type of exception you want to handle by specifying the exception type.

```python {cmd}
try:
    count = 10 / 0
except ZeroDivisionError as e:
    print(e)
    # division by zero
```

In this case, if the exception raised is not a ZeroDivisionError, the except block will not be executed. For example, in below example, `total` is not defined and a NameError is raised. However, the except block will not be executed because the exception raised is not a ZeroDivisionError.

```python {cmd}
try:
    count = total / 2
except ZeroDivisionError as e:
    print(e)
```

Example 4: You can also use the else clause to execute code if no exception was raised.

```python {cmd}
try:
    count = 10 / 2
except Exception as e:
    print(e)
else:
    print("No exception was raised")
```

Example 5: The finally clause is used to execute code regardless of whether an exception was raised or not.

```python {cmd}
try:
    count = 10 / 0
except Exception as e:
    print(e)
finally:
    print("This will always execute")
```

Example 6: You can have multiple except blocks to handle different exceptions. However, it is important to note that the except blocks are checked in the order they are written. If you write the except block for the base Exception class first, it will catch all exceptions.

```python {cmd}
try:
    count = 10 / 0
except ZeroDivisionError as e:
    print('first except block: ', e)
except Exception as e:
    print('second except block: ', e)
```

Example 7: You can use a single except block to handle multiple exceptions.

```python {cmd}
try:
    count = 10 / 0
except (ZeroDivisionError, NameError) as e:
    print(e)
```

Example 8: You can provide the base `Exception` class to handle all exceptions and then using `type()` or `__class__` to get the exception type.

```python {cmd}
try:
    count = 10 / 0
except Exception as e:
    print(type(e))
    # <class 'ZeroDivisionError'>
    print(e.__class__)
    # <class 'ZeroDivisionError'>
    if e.__class__ == ZeroDivisionError:
        print("ZeroDivisionError")
    elif e.__class__ == NameError:
        print("NameError")
    elif e.__class__ == TypeError:
        print("TypeError")
    elif type(e) == ValueError:
        print("ValueError")
```

## Raising Exceptions

In Python, exceptions can be raised at any point in the code using the `raise` statement. The purpose of raising an exception is to report an error or exceptional event that occurs during program execution.

### Raising a built-in exception

Here's an example of how to raise a custom exception:

```python {cmd}
def divide_by_zero(num1, num2):
    if num2 == 0:
        raise ZeroDivisionError('Division by zero is undefined.')
    else:
        return num1 / num2

print(divide_by_zero(10, 2))
# 5.0
print(divide_by_zero(10, 0))
# ZeroDivisionError: Division by zero is undefined.
```

Note that here we are raising a ZeroDivisionError exception. However, you can raise any built-in exception or a custom exception.

### Raising a custom exception

You can also raise a custom exception by creating a new class that inherits from the Exception class.

```python {cmd}
class CustomError(Exception):
    def __init__(self, message):
        super().__init__(message)

def validate_age(age):
    if age < 18:
        raise CustomError('Invalid age. Must be over 18 years old.')
    else:
        print('Valid Age')

try:
    validate_age(18)
    validate_age(17)
    validate_age(20)
except CustomError as e:
    print(e)

# Output: 
# Valid age
# Invalid age. Must be over 18 years old.
```
