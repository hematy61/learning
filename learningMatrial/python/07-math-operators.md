# Math Operators

Python includes a set of built-in mathematical operators that you can use to perform basic arithmetic operations. Here's a list of all the available math operators in Python:

Operator | Name | Example
---------|------|--------
`+` | Addition | `x + y`
`-` | Subtraction | `x - y`
`*` | Multiplication | `x * y`
`/` | Division | `x / y`
`%` | Modulus | `x % y`
`**` | Exponentiation | `x ** y`
`//` | Floor division | `x // y`

## Addition

The addition operator (`+`) adds two operands together. For example:

```python {cmd="python3"}
# Add two integers together
print(2 + 2) # 4

# Add two floats together
print(2.0 + 2.0) # 4.0

# Add an integer and a float together
print(2 + 2.0) # 4.0
```

## Subtraction

The subtraction operator (`-`) subtracts the second operand from the first. For example:

```python {cmd="python3"}
# Subtract two integers
print(2 - 2) # 0

# Subtract two floats
print(2.0 - 2.0) # 0.0

# Subtract an integer and a float
print(2 - 2.0) # 0.0
```

## Multiplication

The multiplication operator (`*`) multiplies two operands together. For example:

```python {cmd="python3"}
# Multiply two integers
print(2 * 2) # 4

# Multiply two floats
print(2.0 * 2.0) # 4.0

# Multiply an integer and a float
print(2 * 2.0) # 4.0
```

## Division

The division operator (`/`) divides the first operand by the second. For example:

```python {cmd="python3"}
# Divide two integers
print(2 / 2) # 1.0

# Divide two floats
print(2.0 / 2.0) # 1.0

# Divide an integer and a float
print(2 / 2.0) # 1.0
```

## Modulus

The modulus operator (`%`) returns the remainder of the division of the first operand by the second.

!!!
    In math when you divide one number by another, the result is the *quotient* and the *remainder*.
    For example, when you divide 5 by 2,
    - 5 is the *dividend*
    - 2 is the *divisor*
    - the *quotient* is 2
    - the *remainder* is 1.
    The *quotient* is the number of times the divisor goes into the dividend.

For example:

```python {cmd="python3"}
# Divide 5 by 2
print(5 / 2) # 2.5

# Get the remainder of 5 divided by 2
print(5 % 2) # 1
```

## Exponentiation

The exponent operator (`**`) raises the first operand to the power of the second operand. For example:

```python {cmd="python3"}
# Raise 2 to the power of 2
print(2 ** 2) # 4

# Raise 2 to the power of 3
print(2 ** 3) # 8

# Raise 5 to the power of 4
print(5 ** 4) # 625
```

## Floor Division

The floor division operator (`//`) divides the first operand by the second and returns the integer part of the quotient. For example:

```python {cmd="python3"}
# Divide 5 by 2
print(5 / 2) # 2.5

# Get the integer part of 5 divided by 2
print(5 // 2) # 2
```

## The precedence of math operators

The precedence or order of operations in Python follows the standard mathematical rules known as **PEMDAS**, which stands for Parentheses, Exponents, Multiplication and Division (from left to right), Addition and Subtraction (from left to right).

In other words:

Parentheses are evaluated first
The next step is to perform all multiplications and divisions from left to right
Finally, additions and subtractions are performed from left to right
Here's an example:

```python {cmd="python3"}
# 2 + 2 * 2 = 6
print(2 + 2 * 2) # 6

# (2 + 2) * 2 = 8
print((2 + 2) * 2) # 8

# 2 + 2 * 2 ** 2 = 10
print(2 + 2 * 2 ** 2) # 10


a = 4 + 3 * 8 / 2 - 1  
# first division and multiplication (from left to right)
# 3 * 8 = 24 and 24 / 2 = 12.0
# then addition and subtraction (from left to right)
# 4 + 12.0 - 1 = 15.0
print(a) # 15.0
```
