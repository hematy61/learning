# Variables Scope

In Python, the term scope refers to the region or area in a program where a particular variable is available, accessible and defined.
Python has four different types of scopes:

    1- Local Scope
    2- Enclosing Scope
    3- Global Scope
    4- Built-in Scope

In short, these four scopes are known as LEGB rule.

## LEGB Rule

LEGB is a acronym for the order in which Python looks for variables in its scope to determine its value. The letter L refers to Local, E refers to Enclosing, G to Global, and B to Built-in.

### Local Scope

A variable defined within a function or block is only accessible within that function or block where it is defined. This is known as the local scope of the variable.

```python {cmd}
def my_function():
    x = 10 # local variable 
    print(x)

my_function() # 10
print(x) # NameError: name 'x' is not defined
```

### Enclosing Scope

A variable defined in an enclosing function is accessible within the local scope of any function within the enclosing function. This is known as the enclosing scope of the variable.

```python {cmd}
def my_function():
    x = 10 # x is local variable to my_function() but it is also an enclosing variable to my_inner_function()
    def my_inner_function():
        print(x) # enclosing variable
    
    def my_inner_function_2():
        x = 20 # as x is already defined in the enclosing scope, this x is a local variable to my_inner_function_2() and it value is 20 not 10.
        print(x) # 20

    my_inner_function()
    my_inner_function_2()

    # x is still 10 here as it is a local variable to my_function()
    print(x) 

my_function() # 10
```

### Global Scope

A variable defined at the top level of a program or inside function with global keyword are global variables. These variables are accessible within the entire program. This is known as the global scope of the variable.

```python {cmd}
x = 10 # global variable
def my_function():
    print(x) # global variable

my_function() # 10
```

To define a global variable within a function, we can use the 'global' keyword followed by the variable name. Here's an example:

```python {cmd}
def my_function():
    global x
    x = 10 # global variable

my_function()
print(x) # 10
```

!!! warning
    If you have a global variable with the same name as a local variable, the local variable will take precedence.

    ```python {cmd}
    x = 10 # global variable

    def my_function():
        x = 20 # local variable
        print(x) # 20

    my_function()
    print(x) # 10
    ```

    In Python, the 'global' keyword is used to define a global variable within a function. Any changes made to that variable within the function will reflect the updated value globally. However, if there's already a global variable with the same name as the local variable made global, then the global value will be overwritten by the local value assigned within the function.

    ```python {cmd}
    x = 10 # global variable

    def my_function():
        global x
        x = 20 # global variable
        print(x) # 20

    my_function()
    print(x) # the x value is now 20 as it is overwritten by the local value assigned within the function
    ``` 

### Built-in Scope

Python has a set of built-in functions and variables that are always available to us. These are known as the built-in scope of the variable. For example, the print(), len(), input() functions are built-in functions.

```python {cmd}
print(len("Hello World")) # 11
```
