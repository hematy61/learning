# Object Oriented Programming (OOP)

OOP or Object-Oriented Programming is a programming paradigm based on the concept of objects, which can contain data and code methods that operate on that data.

In OOP, data and functions that operate on that data are organized into classes and objects. The key components of OOP are classes, objects, attributes, and methods.

A class is a blueprint or template for creating objects, while an object is an instance of a class. A class defines the properties and methods that an object will have. Properties are the attributes of an object, while methods are the functions that an object can perform.

The four main principles of OOP are:

- **Encapsulation** - This refers to the practice of hiding internal data and methods of an object from the outside world. This is achieved by setting up access modifiers such as private, protected, and public.

- **Inheritance** - This allows a class to inherit properties and methods from another class. The inherited class is called a subclass or child class or derived class. The class that is inherited from is called the parent class or base class or superclass.

- **Polymorphism** - This refers to the ability of objects to take on multiple forms. It allows a subclass to implement a method that is already defined in its superclass but with different functionality. For example, in Python, the `+` operator can be used to add two numbers or concatenate two strings. Therefore, the `+` operator is polymorphic because it can be used to perform different operations depending on the type of operands.

- **Abstraction** - This means that a class only shows necessary details to the client and hides complex implementation details. Python does not have built-in support for abstraction, but uses inheritance to achieve it.

Python is a multi-paradigm programming language that supports object-oriented, imperative, and functional programming or procedural programming styles. It is also a dynamically typed language, which means that you don't have to declare the type of a variable when you define it.

## Modularity

One of the main benefits of OOP is modularity. Modularity means dividing a large system into smaller, more manageable modules or objects. This promotes the separation of concerns and reduces coupling between different parts of the system. Modularity is achieved in OOP through the use of classes and objects.

The four pillars of OOP, inheritance, encapsulation, abstraction, and polymorphism, are fundamental concepts to OOP and are used to create modular, reusable code.
While modularity is a design principle that can be applied to any programming paradigm, the four pillars of OOP are specific to OOP and are used to create modular, reusable code in an object-oriented way.

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

### Behaviors

In OOP, behaviors are the actions that an object can perform. Behaviors are defined as methods in a class, which are functions that are associated with an object. Methods can be used to modify the state of an object, perform calculations, or interact with other objects.

For example, let's consider a simple `class Person`:

```python {cmd}
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greeting(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")
```

The `greeting` method is a behavior of the `Person` class. It takes in the `self` parameter, which refers to the instance of the object. It then prints out a greeting message using the object's properties.

## Objects

An object is an instance of a class that encapsulates data and behavior. An object is created from a class and has a unique identity, state, and behavior that is defined by the class.

Let's take an example of a class Car to understand objects in detail:

```python {cmd}
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.speed = 0
    
    def accelerate(self):
        self.speed += 10
    
    def brake(self):
        self.speed -= 10
    
    def get_speed(self):
        return self.speed
    
    def get_make(self):
        return self.make
    
    def get_model(self):
        return self.model
    
    def get_year(self):
        return self.year

toyota_camry = Car("Toyota", "Camry", 2018)
honda_accord = Car("Honda", "Accord", 2019)
```

In this class, we define the properties and methods of a car object. The properties include `make`, `model`, `year`, `speed` which represent a car's make, model, year of manufacture, and current speed respectively. The methods include `accelerate`, `brake`, `get_speed`, `get_make`, `get_model`, and `get_year` which perform actions like increasing or reducing the car's speed, and retrieving the car's details.
we created two objects `toyota_camry` and `honda_accord`, which are instances of `car` by calling its constructor and passing in values for `make`, `model`, and `year`.

We can then use this object to call its methods and modify its properties. For example:

```python {cmd}
my_car.accelerate()   # increase speed by 10
my_car.accelerate()   # increase speed by another 10
my_car.brake()        # reduce speed by 10
print(my_car.get_speed())   # output: 10
print(my_car.get_make())    # output: Honda
```

## Other OOP Concepts

There are several other concepts that are important to understand when learning about OOP. These include:

- Message Passing
- Composition
- Aggregation
- Association
- Encapsulation
- Polymorphism
- Abstraction
- Inheritance
- Overloading
- Overriding
- Static Binding
- Dynamic Binding
- Constructors
- Destructors
- Access Modifiers
- Interfaces
- Abstract Classes
- Concrete Classes
- Method Signatures
- Inheritance Hierarchies

### Message Passing

Message passing is commonly used in object-oriented programming (OOP) to communicate between different objects. In OOP, objects are instances of classes that represent real-world entities or concepts. These objects interact with each other by sending messages or invoking methods.

For example, let's say we have a 'Person' class that represents a person, and a 'BankAccount' class that represents a bank account. A person can have multiple bank accounts, so we can create a method in the 'Person' class called 'add_bank_account' that takes a 'BankAccount' object as a parameter:

```python {cmd}
class BankAccount:
    def __init__(self, account_number, balance):
        self.account_number = account_number
        self.balance = balance

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.bank_accounts = []

    def add_bank_account(self, bank_account):
        self.bank_accounts.append(bank_account)
```

Now, we can create instances of these classes and use message passing to add a bank account to a person:

```python {cmd}
person1 = Person('John', 30)
bank_account1 = BankAccount(123456, 1000)
person1.add_bank_account(bank_account1)
```

In this example, we created a 'Person' object called 'person1' and a 'BankAccount' object called 'bank_account1'. We then used message passing to add the 'bank_account1' object to the 'person1' object by calling the 'add_bank_account' method and passing in the 'bank_account1' object as a parameter.

### Composition

Composition is a way of combining simple objects or data types into more complex ones. It is a form of aggregation that allows objects to be composed of other objects. For example, a car can be composed of an engine, wheels, and a chassis.
It involves creating a new object by embedding other objects within it, forming a hierarchy of objects. The objects are linked together by an association, which specifies how they interact with each other.

It is common to represent real-world objects as classes. For example, a car can be represented as a class `Car`. Now, a car has several components, such as an engine, wheels, seats, etc. We can represent each of these components as separate classes, such as `Engine`, `Wheel`, `Seat`, etc.

Now, when we say a car "has an engine", it means that the engine is a part of the car. In OOP terms, this relationship is called a **"has-a"** relationship, and it can be modeled using composition.

So, the `Car` class can have an attribute called `engine`, which is an object of the `Engine` class. Similarly, the `House` class can have an attribute called `rooms`, which is a list of objects of the `Room` class. The `Computer` class can have an attribute called `keyboard`, which is an object of the `Keyboard` class.

In this way, composition allows us to model complex relationships between objects by combining simpler objects. It enables us to reuse existing classes and promote modular design.

Let's take an example of a car and an engine. The car class will have an object of the engine class as an attribute. Here's how it would look in Python code:

```python {cmd}
class Engine:
    def __init__(self, fuel_type):
        self.fuel_type = fuel_type

class Car:
    def __init__(self, engine_type):
        self.engine = Engine(engine_type)
```

In the above code, the Engine class has an attribute fuel_type. The Car class has an attribute engine, which is an object of the Engine class. The engine object is created by passing the engine_type argument to the Engine constructor.

Now let's say we want to add a new attribute to the Car class, such as the number of wheels. We can do this without affecting the Engine class or any other class that uses it. Here's how:

```python {cmd}
class Car:
    def __init__(self, engine_type, num_wheels):
        self.engine = Engine(engine_type)
        self.num_wheels = num_wheels
```

Composition is a powerful technique that allows for the creation of complex objects with ease. It enables the reuse of existing classes and promotes modular design.

### Aggregation

Aggregation is a type of association relationship in Object-Oriented Programming (OOP) where one object is composed of or contains other objects. It is a **"HAS-A"** relationship and can be thought of as a part-whole relationship.

In aggregation, the contained objects can exist independently of the container object, meaning they can be shared between multiple container objects or can exist on their own. This is different from composition, where the contained objects are exclusive to the container object and cannot exist without it.

Let's take an example of a Library class that contains multiple Book objects:

```python {cmd}
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

class Library:
    def __init__(self, books=[]):
        self.books = books
```

In this example, the Library class contains a list of Book objects. The Book objects can exist outside of the Library and can be shared between multiple Library objects. Therefore, this is an example of aggregation.

Let’s take an example of a car object that contains multiple wheel objects:

```python {cmd}
class Wheel:
    def __init__(self, size):
        self.size = size

class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model
        self.wheel1 = Wheel(15)
        self.wheel2 = Wheel(15)
        self.wheel3 = Wheel(15)
        self.wheel4 = Wheel(15)
```

In this example, the `Car` class is composed of four `Wheel` objects. These `Wheel` objects cannot exist without the `Car` object and are exclusive to it. Therefore, this is an example of composition.

### Association

In Object-Oriented Programming (OOP), association is a relationship between two or more objects that describes how they are related to each other. It is a way for objects to communicate with each other, sharing information and resources.

Association is a crucial concept in OOP as it allows developers to create complex and dynamic systems by breaking them down into smaller, more manageable components. In this relationship, the associated objects can interact with each other, exchanging information and carrying out tasks.

Note that, aggregation is a type of association in which one object is the owner of another object, but the subordinate object continues to exist even if the owner object is destroyed. It is a "part-of" relationship, where the subordinate object is a part of the owning object, but it can exist independently.

There are different types of association, including:

One-to-One: This type of association occurs when one object has a single relationship with another object. For example, a Person object can have a Passport object, which is associated with only one person.

One-to-Many: In this type of association, one object is associated with many other objects. For example, a Teacher object can be associated with multiple Student objects.

Many-to-Many: In this type of association, many objects are associated with many other objects. For example, a Student object can be associated with multiple Course objects, and a Course object can be associated with many Student objects.

Below are some examples to illustrate association in OOP:

Example 1: One-to-One Association

Let's consider the example of a `Person` and a `Passport` object. Every person has only one passport, and every passport belongs to only one person. Therefore, there is a one-to-one association between the `Person` and `Passport` objects.

```python {cmd}
class Person:
    def __init__(self, name, passport):
        self.name = name
        self.passport = passport
        
class Passport:
    def __init__(self, number, expiry_date):
        self.number = number
        self.expiry_date = expiry_date
        
person_1 = Person("John", Passport("123456789", "01/01/2025"))
print(person_1.name)
print(person_1.passport.number)
```

Example 2: One-to-Many Association

Consider the relationship between a university and its departments. A university can have many departments, but each department is associated with only one university. Therefore, there is a one-to-many association between the University and Department objects.

```python {cmd}
class University:
    def __init__(self, name):
        self.name = name
        self.departments = []
        
    def add_department(self, department):
        self.departments.append(department)
        
class Department:
    def __init__(self, name, university):
        self.name = name
        self.university = university
        university.add_department(self)

university_1 = University("Harvard University")
department_1 = Department("Computer Science", university_1)
department_2 = Department("Biology", university_1)

print(university_1.name)
for department in university_1.departments:
    print(department.name)
```

<!--
TODO: Add Many-to-Many Association example
TODO: Add Aggregation example
TODO: Add Composition example
TODO: Add Dependency example
... 
-->

### Encapsulation

Encapsulation is an Object-Oriented Programming (OOP) concept that involves hiding the implementation details of a class and exposing only the necessary information to the user.

 Encapsulation helps in reducing the complexity of the code, making it more manageable and maintainable.

 Encapsulation is implemented in Python through the use of access modifiers such as public, protected, and private. These access modifiers determine the scope and visibility of the class attributes and methods.

In Python, to make an attribute or method public, we simply define it without any access modifiers. For example, `self.balance` is a public attribute, and `self.deposit()` is a public method.

To make an attribute or method protected, we prefix it with a single underscore (`_`). For example, `self_balance` is a protected attribute, and `self_deposit()` is a protected method.

To make an attribute or method private, we prefix it with two underscores (`__`). For example, `self__balance` is a private attribute, and `self__deposit()` is a private method.

```python {cmd}
class Employee:
    def __init__(self, name, salary):
        self.name = name  # public attribute
        self._salary = salary  # protected attribute
        self.__bonus = 1000  # private attribute

    def get_bonus(self):
        return self.__bonus  # private method
```

 Let's take an example of a class called `BankAccount` to illustrate how encapsulation can be implemented in Python.

```python {cmd}
class BankAccount:
    def __init__(self):
        self.balance = 0  # public attribute

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
        else:
            print("Insufficient balance")

    def get_balance(self):
        return self.balance

account_1 = BankAccount()
account_1.deposit(100)
print(account_1.balance) # 100
```

In the above code, we have defined a class called `BankAccount` that has three methods: `deposit`, `withdraw`, and `get_balance`. The attribute `balance` is a public attribute, which means it can be accessed and modified from outside the class.

However, if we want to make the `balance` attribute private, we can prefix it with two underscores (`__balance`). This makes the attribute inaccessible from outside the class.

```python {cmd}
class BankAccount:
    def __init__(self):
        self.__balance = 0  # private attribute

    def deposit(self, amount):
        self.__balance += amount

    def withdraw(self, amount):
        if self.__balance >= amount:
            self.__balance -= amount
        else:
            print("Insufficient balance")

    def get_balance(self):
        return self.__balance

account_1 = BankAccount()
account_1.deposit(100)
print(account_1.__balance) # AttributeError: 'BankAccount' object has no attribute '__balance'
```

Now, the `balance` attribute is made private, and it can only be accessed and modified from within the class methods.

#### Name mangling

In Python, name mangling is a mechanism used to modify the names of attributes of a class that start with a double underscore "`__`" but do not end with another double underscore. This is done to avoid naming conflicts and to prevent the accidental overwriting of attributes.

For example, suppose we have a class named `Person` with an attribute named `__age`. Here's what the class definition might look like:

```python {cmd}
class Person:
    def __init__(self, name, age):
        self.name = name
        self.__age = age
```

In this case, the `__age` attribute has been "mangled" to `_Person__age` by the Python interpreter. This means that we cannot access the `__age` attribute directly from outside the class using its original name. Instead, we have to use its mangled name:

```python {cmd}
class Person:
        def __init__(self, name, email, age):
            self.name = name
            self._email = email
            self.__age = age

p = Person("Alice", "alice_morgan@test.ca", 25)
print(p._Person__age)  # Output: 25
```

Note that the mangled name still includes the original name and the name of the class, separated by a single underscore. This is why we need to use the mangled name instead of the original name.

It's worth noting that name mangling is not intended to provide security, as the mangled names can still be accessed if you know what they are. Rather, it is simply a way to ensure that attribute names with double underscores do not clash with names in subclasses or in other parts of the program.

It's also worth noting that name mangling only applies to names with double underscores at the beginning of the name and without double underscores at the end. Names with a single leading underscore or a double leading and trailing underscore are not mangled.

!!!
    `dir()` function can be used to get the list of all the attributes of an object, including the mangled attributes.

    ```python {cmd}
    class Person:
        def __init__(self, name, email, age):
            self.name = name
            self._email = email
            self.__age = age

    p = Person("Alice", "alice_morgan@test.ca", 25)
    print(dir(p))  # Output: ['_Person__age', '__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'name']


    ```

### Polymorphism

Polymorphism is the ability of an object to take on many forms. In Python, polymorphism is achieved through method overriding and method overloading. Method overriding is when a subclass provides a different implementation of a method that is already defined in its superclass. Method overloading is when a class has multiple methods with the same name but different parameters.

### Method overriding

Method overriding is a concept in Python (and many Object-Oriented Programming languages) that allows derived classes to define a method with the same name as a method in the base class.

When a method in the derived class has the same name as a method in the base class, the derived class's method will be executed instead of the base class's method. This is called method overriding.

To override a method in Python, you simply define a method in your derived class with the same name as the method in the base class. The method signature (i.e. the method name and parameters) must be the same in both the base and derived classes.

Here's an example:

```python {cmd}
class Animal:
    def make_sound(self):
        print("Generic animal sound")

# Dog class inherits from Animal class
class Cat(Animal):
    def make_sound(self):
        print("Meow")

a = Animal()
a.make_sound()  # prints "Generic animal sound"

c = Cat()
c.make_sound()  # prints "Meow"
```

In this example, we have a base class `Animal` with a method `make_sound`. The `Cat` class inherits from `Animal`, and overrides the `make_sound` method with its own implementation. When we create an instance of `Animal` and call `make_sound`, we get the generic animal sound. But when we create an instance of `Cat` and call `make_sound`, we get `Meow`, because the `make_sound` method in `Cat` overrides the method in `Animal`.

It's important to note that when overriding a method, you can still call the original implementation from the base class using the `super()` function. For example:

```python {cmd}
class Animal:
    def make_sound(self):
        print("Generic animal sound")

class Dog(Animal):
    def make_sound(self):
        super().make_sound()
        print("Woof")

d = Dog()
d.make_sound()  # prints "Generic animal sound\nWoof"
```

In this example, the `Dog` class overrides `make_sound`, but first calls the `make_sound` method from the base `Animal` class using `super().make_sound()`. Then it adds `Woof` to the end of the output, so the final output is `Generic animal sound\nWoof`. This is a useful technique for extending the functionality of a method in the base class while still preserving its original behavior.

### Method overloading

Method overloading is a feature in Object-Oriented Programming (OOP) where multiple functions can have the same name but different parameters. The proper function to execute is determined by the number, type, and order of the parameters passed during the function call.

In Python, method overloading is not possible because Python does not support method overloading natively. In Python, if we define multiple functions with the same name, only the last defined function with that name will be considered and the other functions will be overridden. The primary reason for this is Python's dynamic nature, where a function's parameters and return types can be changed during runtime.

For example:

```python {cmd}
class Calculator:
    def add(self, a, b):
        return a + b

    def add(self, a, b, c):
        return a + b + c

c = Calculator()
print(c.add(1, 2))  # TypeError: add() missing 1 required positional argument: 'c'
```

In this example, we have a class `Calculator` with two methods named `add`. The first method takes two parameters, `a` and `b`, and returns their sum. The second method takes three parameters, `a`, `b`, and `c`, and returns their sum. When we create an instance of `Calculator` and call the `add` method with two parameters, we get a `TypeError` because the second `add` method with three parameters overrides the first `add` method with two parameters. This is because Python does not support method overloading.

However, there are some workarounds to achieve method overloading in Python. They are as follows:

- Using default arguments
- Using variable arguments
- Using singledispatch

#### Using Default Arguments

By giving default values to the function parameters, we can simulate method overloading in Python. We can define a single function with a generic name, and have different default parameters for different function definitions. The appropriate function will be invoked based on the number and types of arguments passed in the function call. Here's an example:

```python {cmd}
def add(a, b=0, c=0):
    return a + b + c

print(add(5))          # returns 5
print(add(5, 10))      # returns 15
print(add(5, 10, 15))  # returns 30
```

#### Using Variable Arguments

Python provides the `*args` and `**kwargs` syntax to handle variable arguments in function definitions. We can use these to simulate method overloading by defining a single function with a generic name, and process the arguments differently based on their types. Here's an example:

```python {cmd}
def add(*args):
    for arg in args:
        if isinstance(arg, int):
            return sum(args)
        elif isinstance(arg, str):
            return "".join(args)

print(add(5))          # returns 5
print(add(5, 10))      # returns 15
print(add(5, 10, 15))  # returns 30
print(add("Hello", " ", "World"))  # returns "Hello World"
print(add("Hello", 12, "World", "!"))  # this will throw an error
# TypeError: sequence item 1: expected str instance, int found
```

#### Using `singledispatch`

`@singledispatch` is a decorator provided in the Python standard library functools module for Generic Function. It's an extremely helpful feature for dynamically overloading function behavior based on the type of input argument supplied.

A Generic Function is a function that behaves differently based on the type of input it receives. That means, we can write a single function that can take different types of arguments and processes them accordingly.

Here's an example:

```python {cmd}
from functools import singledispatch

@singledispatch
def add_numbers(value):
    raise NotImplementedError('Unsupported type')

@add_numbers.register(int)
def _(value):
    print(f"Adding integer numbers: {value+value}")

@add_numbers.register(float)
def _(value):
    print(f"Adding float numbers: {value+value}")

@add_numbers.register(str)
def _(value):
    print(f"Joining two strings: {value + '_' + value}")

add_numbers(10)  # Adding integer numbers: 20
add_numbers(10.5)  # Adding float numbers: 21.0
add_numbers("Hello")  # Joining two strings: Hello_Hello
add_numbers([1, 2, 3])  # NotImplementedError: Unsupported type
```

In the above example, we have defined three implementations of the add_numbers function, one for each parameter type: `int`, `float`, and `str`.

The `@singledispatch` decorator is used to register the base function. The `@add_numbers.register` decorator is used to register the implementations of the base function for different parameter types.

When we call the `add_numbers` function with an integer, the implementation for `int` is called. When we call the `add_numbers` function with a float, the implementation for `float` is called. When we call the `add_numbers` function with a string, the implementation for `str` is called. When we call the `add_numbers` function with a list, we get a `NotImplementedError` because there is no implementation for `list`.

For classes, we can use the `@singledispatchmethod` decorator instead of the `@singledispatch` decorator.

`@singledispatchmethod` is a decorator available in Python 3.8 onwards. It is a method decorator, similar to `@staticmethod` or `@classmethod`, that allows you to create generic functions, which can have different implementations based on the type of the first argument passed.

The decorator turns a method into a `singledispatch` method, which then provides a mechanism to register specialized implementations depending on the type of the first argument to the method.

Here is an example of how to use @singledispatchmethod decorator in a more realistic scenario. Consider a scenario where a company wants to calculate the payroll of its employees. Each employee has a different position and receives a different compensation, so the payroll calculation varies based on the employee's position. We can use` @singledispatchmethod` to calculate the payroll based on the position.

```python {cmd}
from functools import singledispatchmethod

class Employee:
    def __init__(self, name, position):
        self.name = name
        self.position = position
    
    def calculate_payroll(self):
        pass
    
class HourlyEmployee(Employee):
    def __init__(self, name, position, hourly_rate, hours_worked):
        super().__init__(name, position)
        self.hourly_rate = hourly_rate
        self.hours_worked = hours_worked
        
    def calculate_payroll(self):
        return self.hourly_rate * self.hours_worked
        
class SalariedEmployee(Employee):
    def __init__(self, name, position, salary):
        super().__init__(name, position)
        self.salary = salary
        
    def calculate_payroll(self):
        return self.salary
        
class CommissionEmployee(Employee):
    def __init__(self, name, position, sales, commission_rate):
        super().__init__(name, position)
        self.sales = sales
        self.commission_rate = commission_rate
        
    def calculate_payroll(self):
        return self.sales * self.commission_rate

class PayrollSystem:
    @singledispatchmethod
    def calculate_payroll(self, employee):
        raise ValueError("Invalid Employee Type") 
    
    @calculate_payroll.register
    def _(self, employee: HourlyEmployee):
        return employee.calculate_payroll()
    
    @calculate_payroll.register
    def _(self, employee: SalariedEmployee):
        return employee.calculate_payroll()
    
    @calculate_payroll.register
    def _(self, employee: CommissionEmployee):
        return employee.calculate_payroll()


emp1 = HourlyEmployee("John", "Developer", 50, 160)
emp2 = SalariedEmployee("Jane", "Manager", 90000)
emp3 = CommissionEmployee("Mike", "Salesman", 100000, 0.2)

payroll_system = PayrollSystem()

print("Payroll of John - Hourly Employee:", payroll_system.calculate_payroll(emp1))
print("Payroll of Jane - Salaried Employee:", payroll_system.calculate_payroll(emp2))
print("Payroll of Mike - Commission Employee:", payroll_system.calculate_payroll(emp3))
```

In the above code, we define a Employee base class and several different types of employees, such as HourlyEmployee, SalariedEmployee, and CommissionEmployee. Each employee type has its own implementation of calculate_payroll() method.

The PayrollSystem class defines a calculate_payroll() method which uses @singledispatchmethod. The default implementation, decorated by @singledispatchmethod, raises a ValueError exception, which is thrown when an unknown type of employee is given as an argument.

Then, we register specialized implementations of the calculate_payroll() method for each type of employee, using the @calculate_payroll.register decorator. This way, we can calculate the payroll of each employee type based on its specialization.