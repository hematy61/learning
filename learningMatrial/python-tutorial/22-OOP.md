# Object Oriented Programming (OOP)

OOP or Object-Oriented Programming is a programming paradigm based on the concept of objects, which can contain data and code methods that operate on that data.

In OOP, data and functions that operate on that data are organized into classes and objects. A class is a blueprint or template for creating objects, while an object is an instance of a class. A class defines the properties and methods that an object will have. Properties are the attributes of an object, while methods are the functions that an object can perform.

The four main principles of OOP are:

- **Encapsulation** - This refers to the practice of hiding internal data and methods of an object from the outside world. This is achieved by setting up access modifiers such as private, protected, and public.

- **Inheritance** - This allows a class to inherit properties and methods from another class. The inherited class is called a subclass, while the base class is called the superclass or parent class.

- **Polymorphism** - This refers to the ability of objects to take on multiple forms. It allows a subclass to implement a method that is already defined in its superclass but with different functionality.

- **Abstraction** - This means that a class only shows necessary details to the client and hides complex implementation details.

Python is a multi-paradigm programming language that supports object-oriented, imperative, and functional programming or procedural programming styles. It is also a dynamically typed language, which means that you don't have to declare the type of a variable when you define it.

## Modularity

One of the main benefits of OOP is modularity. Modularity means dividing a large system into smaller, more manageable modules or objects. This promotes the separation of concerns and reduces coupling between different parts of the system. Modularity is achieved in OOP through the use of classes and objects.

In OOP, a class represents a module or object that has its own data and functions. These classes can be used to create objects that interact with each other. Each object can communicate with other objects by calling their methods and exchanging data.

This modularity allows for easier maintenance and development of the code. Changes to one module or object can be made without affecting others, making the codebase more resilient to changes. It also promotes code reuse, as modules or objects can be used across different projects.

Modular code also promotes team development, as different team members can work on different modules or objects simultaneously. This promotes parallelism and speeds up the development process.

## Classes

A class is a blueprint or template for creating objects that contain properties (attributes) and methods (functions). It is a code structure that defines the state and behavior of objects. Once defined, a class can be used to create any number of objects.
In Python, classes are defined using the `class` keyword, followed by the name of the class. Here is an example:

```python {cmd}
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greeting(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")

person1 = Person("Alice", 25)
person1.greeting()  # prints "Hello, my name is Alice and I am 25 years old."
```

This is a simple example of a `Person` class. It has two properties (`name` and `age`) and one method (`greeting`).

The `__init__` method is a special method that initializes the object's properties. It takes in the `self` parameter, which refers to the instance of the object. `self.name` and `self.age` are properties of the object that are set to the values passed in when the object is created.
The greeting method is a simple method that prints out a greeting message using the object's properties. It also uses `self` to access the object's properties.

Once the class is defined, an object can be created using the class name and passing in any required parameters. In this case, the `name` and `age` parameters are required. In this example, an object `person1` is created using the `Person` class.

The `greeting` method is then called on the object `person1`. It prints out a message using the object's properties.

### attributes

Attributes are characteristics that define the state or quality of an object. An attribute is a variable that is defined within a `class` and holds a value that represents some aspect of the object. In Python, attributes are accessed using dot notation.

For example, let's consider a simple `class Person`:

```python {cmd}
class Person:
    def __init__(self, name, age, height):
        self.name = name
        self.age = age
        self.height = height

person1 = Person("Alice", 25, 170)
```

In this example, we have defined a class Person with three attributes: `name`, `age`, and `height`. These attributes are defined in the class's constructor method `init()` with the `self` keyword, which refers to the object being created.

We can access the attributes of an object using the dot notation like this:

```python
print(person1.name)   # Output: Alice
print(person1.age)    # Output: 25
print(person1.height) # Output: 170
```

Attributes can also be modified or updated directly:

```python {cmd}
person1.age = 26
print(person1.age)    # Output: 26
```

Furthermore, attributes can be created dynamically in instance using the dot notation:

```python
person1.country = "USA"
print(person1.country)    # Output: USA
```
