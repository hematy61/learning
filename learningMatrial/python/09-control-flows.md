# Control Flows

In Python, Control flows are the fundamental structures that allow you to control the way in which your code executes. It can be used to perform different actions based on different conditions.

There are two types of control flows in Python:

Name | Description
-----------------------|------------
conditional statements | Executes a block of code only if a condition is `True`
looping statements | Executes a block of code repeatedly until a condition is `False`
Control transfers | Transfers the control of the program to another part of the program

## Conditional Statements

Conditional Statements: These statements are used to execute a particular piece of code only if a condition is true, otherwise not. The conditional statements are represented by if..elif..else statements. Match statements are also available in Python 3.10.

### `if` statement

The `if` statement is used to execute a block of code only if a condition is `True`.

```python {cmd="python3"}
x = 10

if x > 0:
    print("x is positive")
```

### `if..else` statement

The `if..else` statement is used to execute a block of code if a condition is `True`, otherwise execute another block of code.

```python {cmd="python3"}
x = 10

if x > 0:
    print("x is positive")
else:
    print("x is negative")
```

### `if..elif..else` statement

The `if..elif..else` statement is used to execute a block of code if a condition is `True`, otherwise execute another block of code if another condition is `True`, and so on. If none of the conditions are `True`, then the `else` block of code is executed.

```python {cmd="python3"}
x = 5

if x > 0:
    print("x is positive")
elif x == 0:
    print("x is zero")
else:
    print("x is negative")
```

### Match statement

Match statement is a new feature introduced in Python 3.10 that makes it easier to write multiple if-else statements that compare a value against a series of patterns. It allows for more readable code, improves safety, and helps prevent bugs related to incorrect pattern matching.

The syntax of the match statement is as follows:

```python {cmd="python3"}
match expression:
    case pattern_1:
        block_1
    case pattern_2:
        block_2
    ...
    case pattern_n:
        block_n
    case _: # default case
        block_n+1
```

Here is an example of a match statement:

```python {cmd="python3"}
x = 5

match x:
    case 0:
        print("x is zero")
    case 1:
        print("x is one")
    case 2:
        print("x is two")
    case _:
        print("x is greater than two")
```

## Looping Statements

Loops: Loops allow a specific piece of code to be repeated iteratively until a certain condition is met. There are two types of loops:

Name | Description
-----------------------|------------
`for` loop | Executes a block of code repeatedly for a given number of times
`while` loop | Executes a block of code repeatedly until a condition is `False`

### `for` loop

The `for` loop is used to execute a block of code repeatedly for a given number of times.

```python {cmd="python3"}
for i in range(5):
    print(i) 
# 0
# 1
# 2
# 3
# 4
```

In for loops there is no index variable to keep track of the current iteration. To keep track of the current iteration, you can use the `enumerate()` function.

```python {cmd="python3"}
fruits = ["apple", "banana", "cherry"]

for index, fruit in enumerate(fruits):
    print(index, fruit)
# 0 apple
# 1 banana
# 2 cherry
```

The `enumerate()` function is used to obtain both the index position and corresponding value of each element in the list. The first variable within the loop (in this case, index) will store the current index of the fruit, while the second variable (fruit) will store the fruit itself.

### `while` loop

The `while` loop is used to execute a block of code repeatedly until a condition is `False`.

```python {cmd="python3"}
i = 0
while i < 5:
    print(i)
    i += 1
# 0
# 1
# 2
# 3
# 4
```

## Control Transfers

These statements allow you to transfer control to another part of your program. Some examples of these statements are:

Name | Description
-----------------------|------------
`break` | Terminates the loop
`continue` | Skips the current iteration of the loop
`pass` | Does nothing

### `break` statement

The `break` statement is used to terminate the loop.

```python {cmd="python3"}
for i in range(5):
    if i == 3:
        break
    print(i)
# 0
# 1
# 2
```

### `continue` statement

The `continue` statement is used to skip the current iteration of the loop.

```python {cmd="python3"}
for i in range(5):
    if i == 3:
        continue
    print(i)
# 0
# 1
# 2
# 4
```

### `pass` statement

The `pass` statement is used to do nothing. It is used as a placeholder when a statement is required syntactically but you do not want any command or code to execute.

```python {cmd="python3"}
for i in range(5):
    if i == 3:
        pass
    print(i)
# 0
# 1
# 2
# 3
# 4
```

### `else` clause

Loop statements may have an else clause; it is executed when the loop terminates through exhaustion of the list (with for) or when the condition becomes false (with while), but not when the loop is terminated by a `break` statement.

```python {cmd="python3"}
for i in range(5):
    if i == 3:
        break
    print(i)
else:
    print("Loop terminated")

# 0
# 1
# 2

for i in range(3):
    print(i)
else:
    print("Loop terminated")

# 0
# 1
# 2
# Loop terminated
```
