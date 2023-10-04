# Modules

## What is a module?

In Python, a module is a file that contains Python definitions and statements. The file name is the module name with the suffix `.py` appended.

Modules provide a way to organize and reuse code. They can define functions, classes, and variables that can be used in other Python scripts. By importing a module, you can access the functionality it provides.

## Create a module

To create a module, simply create a new file with a `.py` extension and define your functions and variables in it. For example, you can define `my_module.py` with the following code:

```python
# my_module.py
def say_hello():
    print("Hello, World!")
    
PI = 3.14159
```

To use the `say_hello()` function and `PI variable in another Python script, you would simply import the my_module module and use dot notation to access its contents, like so:

```python
# main.py
import my_module

my_module.say_hello()
print(my_module.PI)
```

## Import a module

Python modules are imported using the `import` statement, which can be used in different ways to import a module, its variable, functions, and classes, depending on what we need. The basic syntax for importing modules is:

```python
import module_name
```

For example, to import the `math` module, which contains many standard mathematical functions, we can do:

```python
import math
```

This statement imports the built-in `math` module in Python, and we can use the functions and constants defined in this module using the dot notation, like this:

```python {cmd="python3"}
import math

x = math.sqrt(25)
print(x) # 5.0
```

### Name Import

We can also import a specific function or a variable from a module directly, rather than importing the entire module. The syntax for this is:

```python
from module_name import function_name
```

For example, to import the `sqrt()` function from the `math` module, we can do:

```python
from math import sqrt

x = sqrt(25)
print(x) # 5.0
```

!!! note
    **When you import a module for the first time, Python will execute all the code in the module.** Even if you use the `from` statement to import only specific functions or variables, all the code in the module will still be executed. However, if you import the same module again in another part of your code, Python will not execute the code in the module again but will instead reuse the already loaded module from memory.
    So, if you have already executed the `import math` statement in your code before, the `from math import sqrt` statement will not execute the code in the math module again. It will instead import only the `sqrt` function from the already loaded `math` module.
    In short, the `from` statement will not prevent the execution of a module's code when you import it for the first time. It only allows you to selectively import specific functions or variables from the module.

### Multiple Imports

We can import multiple functions or variables from a module by separating them with a comma:

```python
from module_name import function_name1, function_name2, variable_name1
```

For example, to import the `sqrt()` and `pow()` functions from the `math` module, we can do:

```python
from math import sqrt, pow

x = sqrt(25)
y = pow(2, 3)
print(x) # 5.0
print(y) # 8.0
```

### Import with an Alias

We can import a module with an alias to avoid naming conflicts with other modules. The syntax for this is:

```python
import module_name as my_module
from module_name import function_name1 as fn1, function_name2 as fn2
```

For example, to import the `math` module with the alias `m`, and the `path` function from the `os` module with the alias `p`, we can do:

```python
import math as m
from os import path as p

x = m.sqrt(25)
y = p.abspath("script.py")
print(x) # 5.0
print(y) # /home/user/script.py
```

Here is an example of importing modules that have the same function names but different implementations and causing a naming conflict:

```python
from math import sqrt as m_sqrt
from numpy import sqrt as np_sqrt

print(m_sqrt(4)) # 2.0
print(np_sqrt(4)) # 2.0
```

### Import All

We can import all the functions and variables from a module using the `*` operator. The syntax for this is:

```python
from module_name import *
```

For example, to import all the functions and variables from the `math` module, we can do:

```python
from math import *

x = sqrt(25)
print(x) # 5.0
```

However, this is not recommended as it can cause naming conflicts if the module contains functions or variables with the same name.

### Import a Module from a Different Directory

When you import a module, Python searches for the module in the current directory, and then in the list of directories specified by the `PYTHONPATH` environment variable. If it doesn't find the module in any of these directories, it will throw an error.

#### Using sys Module

To import a module from a different directory, you need to add the directory path to the `PYTHONPATH` environment variable. You can do this by using the `sys.path.insert()` function, like so:

```python
import sys
sys.path.insert("absolute/path/to/directory")
```

Note that the path should be an absolute path to the directory containing the module and not a relative path.

For example, if you have a module named `my_module.py` in the `/home/user/` directory, you can import it in your Python script like this:

```python
import sys
sys.path.insert("/home/user/")
import my_module
```
