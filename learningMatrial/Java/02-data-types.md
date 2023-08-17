# Data Types

Data types are fundamental in programming as they define the type of data that can be stored and manipulated within a program. Here's an overview of data types in Java:

## 1. Primitive Data Types

In Java, primitive data types are the built-in data types that are not objects. They have a predefined size and directly contain values.

Examples of Primitive Data Types in Java:

| Type    | Size (bits) | Range (inclusive) | Example  |
| ------- | ----------- | ----------------- | -------- |
| byte    | 8           | -128 to 127       | 0        |
| short   | 16          | -32,768 to 32,767 | 0        |
| int     | 32          | -2^31 to 2^31 - 1 | 0        |
| long    | 64          | -2^63 to 2^63 - 1 | 0L       |
| float   | 32          | -2^31 to 2^31 - 1 | 0.0f     |
| double  | 64          | -2^63 to 2^63 - 1 | 0.0d     |
| char    | 16          | \u0000 to \uffff  | '\u0000' |
| boolean | 1           | true or false     | false    |

## 2. Reference Data Types

Reference data types are used to store references (memory addresses) to objects. They can be used to store any object and have a default value of `null`.

Examples of Reference Data Types:

- **Arrays**: A collection of elements, all of the same type.
- **Classes**: User-defined data types that can contain data members and methods.
- **Interfaces**: Abstract data types that can contain abstract methods.
- **Enums**: A special data type that enables a variable to be a set of predefined constants.
- **Strings**: A sequence of characters.

## 3. Derived Data Types

Derived data types are built using the primitive and reference data types. They are not native to the language but are constructed using the fundamental data types.

Examples:

- **Arrays**: As mentioned above, arrays are collections of elements of the same type.
- **Structures**: Collections of variables of different data types.
- **Unions**: Variables that may hold data of different types, but only one type at a time.

## 4. Abstract Data Types (ADT)

ADTs are high-level data types that define a set of operations but not their implementation. They are theoretical concepts and are implemented using one of the concrete data structures.

Examples:

- **List**: An ordered collection of items.
- **Stack**: A collection with LIFO (Last In First Out) property.
- **Queue**: A collection with FIFO (First In First Out) property.
- **Tree**: A hierarchical data structure.
- **Graph**: A collection of nodes and edges.
