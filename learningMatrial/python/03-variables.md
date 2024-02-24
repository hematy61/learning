# Variables in Python

## Declaring a variable

To declare a variable in python, you need to use the `=` operator. For example:

```python
my_variable = "hello world"
population = 1_000_000 # 1_000_000 is the same as 1000000
```

!!! - Variable re-declaration
Variable re-declaration is allowed in python. For example:

```python
my_variable = "hello world"
my_variable = "hello world 2"
```

Therefore, the value of `my_variable` will be `"hello world 2"`.

## Naming rules

1. Variable names in python must start with a letter or an underscore.
2. Variable names can only contain alpha-numeric characters and
   underscores (A-z, 0-9, and _ ).
3. Variable names are case-sensitive (age, Age and AGE are three
   different variables).
4. Variable names cannot start with a number.
5. Variable names cannot be one of the python keywords.

Here are some examples of good and bad variable names:

```python
# Good variable names

name = "John"
age = 30
average_score = 85.5
is_student = True

# Bad variable names

1name = "John" # starts with a number
name! = "John" # contains a special character
```

## Naming conventions

in python, there are some variable naming conventions that you should follow:

1. Variable names should be in `snake_case`.
   for example: `my_variable`, `my_variable_2`.
2. Constants should be in `UPPER_CASE`.
   for example: `MY_CONSTANT = 1000`
3. Private variables should start with an underscore `_`.
   for example: `_my_variable`
4. Protected variables should start with two underscores `__`. For example:

```python {cmd="python3"}
class Car:
    def __init__(self, model, price):
        self.model = model   #public variable
        self.__price = price #private variable
        
    def display_info(self):
        print("Model:", self.model)
        print("Price:", self.__price)

car1 = Car("Tesla", 50000)
car1.display_info()

# this will work as `model` is a public variable.
print(car1.model)

# this will throw an error as __price is a private variable.
print(car1.__price) 

```

## Assignment

**Assign a value to multiple variables**
You can assign the same value to multiple variables in one line:

```python
student1 = student2 = student3 = "John"
```

**Multiple assignment**
You can assign multiple variables in one line:

```python
name, age, average_score = "John", 30, 85.5
```

## Delete a variable

To delete a variable, you can use the `del` keyword:

```python
my_variable = "hello world"
del my_variable

# this will throw a NameError as my_variable is deleted.
print(my_variable)
```
