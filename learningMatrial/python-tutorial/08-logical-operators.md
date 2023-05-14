# Logical Operators

In Python, the logical operators are used to combine conditional statements. There are three logical operators in Python:

Operator | Name | Example
---------|------|--------
`and` | Logical AND | `x and y`
`or` | Logical OR | `x or y`
`not` | Logical NOT | `not x`

## Logical AND

The `and` operator returns `True` if both statements are `True`. Otherwise, it returns `False`.

```python {cmd}
# Return True if both statements are true
print(1 == 1 and 2 == 2) # True

# Return False if one of the statements is false
print(1 == 1 and 2 == 3) # False
```

## Logical OR

The `or` operator returns `True` if one of the statements is `True`. Otherwise, it returns `False`.

```python {cmd}
# Return True if one of the statements is true
print(1 == 1 or 2 == 3) # True

# Return False if both statements are false
print(1 == 2 or 2 == 3) # False
```

## Logical NOT

The `not` operator returns `True` if the operand is false, and it returns `False` if the operand is true.

```python {cmd}
# Return True if the statement is false
print(not 1 == 2) # True

# Return False if the statement is true
print(not 1 == 1) # False

# not on different data types
print("not 1: ", not 1) # False
print("not 0: ", not 0) # True
print("not True: ", not True) # False
print("not False: ", not False) # True
print("not None: ", not None) # True
print("not []: ", not []) # True
print("not {}: ", not {}) # True
print("not '': ", not '') # True
print("not ' ': ", not ' ') # False
print("not '0': ", not '0') # False
print("not 0.0: ", not 0.0) # True
print("not 0.1: ", not 0.1) # False
print("not 0j: ", not 0j) # True
print("not 1j: ", not 1j) # False
print("not 0+0j: ", not 0+0j) # True
print("not 0+1j: ", not 0+1j) # False
print("not 1+0j: ", not 1+0j) # False
print("not 1+1j: ", not 1+1j) # False
print("not 0.0+0.0j: ", not 0.0+0.0j) # True
print("not 0.0+1.0j: ", not 0.0+1.0j) # False
print("not 1.0+0.0j: ", not 1.0+0.0j) # False
print("not 1.0+1.0j: ", not 1.0+1.0j) # False
print("not 0.0+0j: ", not 0.0+0j) # True
print("not 0.0+1j: ", not 0.0+1j) # False
print("not 1.0+0j: ", not 1.0+0j) # False
print("not 1.0+1j: ", not 1.0+1j) # False
print("not 0+0.0j: ", not 0+0.0j) # True
print("not 0+1.0j: ", not 0+1.0j) # False
print("not 1+0.0j: ", not 1+0.0j) # False
print("not 1+1.0j: ", not 1+1.0j) # False
```
