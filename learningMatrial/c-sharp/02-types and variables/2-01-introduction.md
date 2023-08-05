# Introduction to Types and Variables in C\#

In C#, as in many other programming languages, data is stored in variables. Each variable has a specific type, which determines the size and layout of the variable's memory, the range of values that can be stored within that memory, and the set of operations that can be applied to the variable.

## Types

C# is a statically-typed language, which means that the type of a variable is checked at compile-time. The type system in C# is rich and comprehensive, allowing for a wide range of data to be represented and manipulated.

C# types can be broadly classified into two categories: Value Types and Reference Types.

- **Value Types:** These include simple numeric types (like `int`, `double`, `bool`, `char`), `struct` types, and `enum` types. Value types are stored directly in the memory allocated for the variable, and when you assign a value type variable to another, a copy of the value is made.

- **Reference Types:** These include class types, interface types, array types, and delegate types. Reference types are stored in the heap, and the variable holds a reference (or pointer) to the location in memory. When you assign a reference type variable to another, both variables refer to the same object in memory.

Here are the types in C#

- **Value types**
  - Simple types
    - Signed integral: `sbyte`, `short`, `int`, `long`
    - Unsigned integral: `byte`, `ushort`, `uint`, `ulong`
    - Unicode characters: `char`, which represents a UTF-16 code unit
    - IEEE binary floating-point: `float`, `double`
    - High-precision decimal floating-point: `decimal`
    - Boolean: `bool`, which represents Boolean values—values that are either `true` or `false`
  - Enum types
    - User-defined types of the form `enum E {...}`. An `enum` type is a distinct type with named constants. Every `enum` type has an underlying type, which must be one of the eight integral types. The set of values of an `enum` type is the same as the set of values of the underlying type.
  - Struct types
    - User-defined types of the form `struct S {...}`
  - Nullable value types
    - Extensions of all other value types with a `null` value
  - Tuple value types
    - User-defined types of the form `(T1, T2, ...)`

- **Reference types**
  - Class types
    - Ultimate base class of all other types: `object`
    - Unicode strings: `string`, which represents a sequence of UTF-16 code units
    - User-defined types of the form `class C {...}`
  - Interface types
    - User-defined types of the form `interface I {...}`
  - Array types
    - Single-dimensional, multi-dimensional, and jagged. For example: `int[]`, `int[,]`, and `int[][]`
  - Delegate types
    - User-defined types of the form `delegate int D(...)`

## Variables

A variable in C# is a storage location, with a specific type and an associated name. When you declare a variable, you're telling the compiler to reserve some memory that can store a value of a particular type.

Here's how you might declare some variables in C#:

```csharp
int myInt = 10;
double myDouble = 20.5;
bool myBool = true;
char myChar = 'a';
string myString = "Hello, World!";
```

In each of these lines, the variable is being declared with a specific type (`int`, `double`, `bool`, `char`, `string`), a name (`myInt`, `myDouble`, `myBool`, `myChar`, `myString`), and an initial value.

## Integral types

In C#, integral types are a category of simple types that includes both signed and unsigned integers of varying lengths. They are used to hold whole numbers. 

There are eight integral types in C#:

1. **Signed Integral**: These can hold both negative and positive numbers.
   - `sbyte`: 8-bit signed integer
   - `short`: 16-bit signed integer
   - `int`: 32-bit signed integer
   - `long`: 64-bit signed integer

2. **Unsigned Integral**: These can hold only non-negative numbers.
   - `byte`: 8-bit unsigned integer
   - `ushort`: 16-bit unsigned integer
   - `uint`: 32-bit unsigned integer
   - `ulong`: 64-bit unsigned integer

Each of these types uses a different amount of memory and has a different range of possible values. For example, an `int` uses 32 bits and can store values from -2,147,483,648 to 2,147,483,647, while a `byte` uses 8 bits and can store values from 0 to 255.

## Distinct types

A distinct type, also known as a user-defined type, is a type that is defined by the programmer, not by the language itself. In C#, you can create distinct types by defining classes, structs, enums, interfaces, delegates and tuples.

A distinct type has its own unique set of values and operations. For example, you might define a `Person` class with properties for `Name` and `Age`, and methods for `Speak` and `Walk`. Instances of the `Person` class would then have their own distinct set of values (the name and age of the person) and operations (the ability to speak and walk).

`enum` is an example of a distinct type. An `enum` is a distinct type that has a set of named constants. Every `enum` type has an underlying type, which must be one of the eight integral types. The set of values of an `enum` type is the same as the set of values of the underlying type.

## Boxing and unboxing

In C#, both value types and reference types are derived from the ultimate base class `System.Object`. This means that a value of a value type can be treated as an object. This is done through a process called boxing and unboxing.

!!! note
    Every type in C# directly or indirectly derives from the object class type, and object is the ultimate base class of all types.

**Boxing** is the process of converting a value of a value type into a value of the corresponding reference type. In other words, boxing is the process of converting a value type to an object type. This is done implicitly by the .NET runtime.

Here's an example of boxing:

```csharp
int i = 123;  // A value type
object o = i; // Boxing
```

In this example, the integer `i` is boxed into an object `o`.

**Unboxing** is the reverse process of boxing. It's the process of converting a value of a reference type (previously boxed) into a value of a value type. Unboxing is an explicit operation, and the programmer must cast the object back to the original value type.

Here's an example of unboxing:

```csharp
object o = 123; // Boxing
int i = (int)o; // Unboxing
```

In this example, the object `o` is unboxed back into an integer `i`.
