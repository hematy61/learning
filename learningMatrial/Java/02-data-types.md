# Data Types

Java is a statically-typed language, which means that all variables must first be declared before they can be used. This involves stating the variable's type and name. Java offers a variety of data types to cater to different needs. These data types can be broadly categorized into two groups: primitive data types and reference data types.

## 1. Primitive Data Types

Primitive data types are the basic built-in data types that hold pure, simple values of a kind.

### A. Integral Types

- **byte**: 8-bit signed integer. Range: -128 to 127.
- **short**: 16-bit signed integer. Range: -32,768 to 32,767.
- **int**: 32-bit signed integer. Range: -2^31 to 2^31 - 1.
- **long**: 64-bit signed integer. Range: -2^63 to 2^63 - 1.

| Type  | Size (bits) | Range (inclusive) | Example |
| ----- | ----------- | ----------------- | ------- |
| byte  | 8           | -128 to 127       | 0       |
| short | 16          | -32,768 to 32,767 | 0       |
| int   | 32          | -2^31 to 2^31 - 1 | 0       |
| long  | 64          | -2^63 to 2^63 - 1 | 0L      |

### B. Floating-Point Types

- **float**: 32-bit floating-point number. Can represent fractional values.
- **double**: 64-bit floating-point number. Has more precision than `float`.

| Type   | Size (bits) | Range (inclusive) | Example |
| ------ | ----------- | ----------------- | ------- |
| float  | 32          | -2^31 to 2^31 - 1 | 0.0f    |
| double | 64          | -2^63 to 2^63 - 1 | 0.0d    |

### C. Character Type

- **char**: 16-bit Unicode character. Represents a single character.

| Type | Size (bits) | Range (inclusive) | Example  |
| ---- | ----------- | ----------------- | -------- |
| char | 16          | \u0000 to \uffff  | '\u0000' |

### D. Boolean Type

- **boolean**: Represents a true or false value.

| Type    | Size (bits) | Range (inclusive) | Example |
| ------- | ----------- | ----------------- | ------- |
| boolean | 1           | true or false     | false   |

## 2. Reference Data Types

Reference data types are used to store references (memory addresses) to objects. They can be used to store any object and have a default value of `null`.

### A. Classes

Any object created from a class is a reference data type. This includes built-in classes like `String` and user-defined classes.

### B. Interfaces

Interfaces in Java are reference types that can be implemented by classes.

### C. Arrays

Arrays in Java are also reference data types. They can store multiple values of the same type, be it primitive types or objects.

### D. Enums

Enumerations (enums) are a special type of class in Java that represents a group of named constants.

## Special Mention: `String`

While `String` is technically a class and thus a reference data type, it's worth mentioning separately due to its ubiquity in Java programming. A `String` represents a sequence of characters. Unlike other reference types, strings in Java are immutable, meaning their values cannot be changed after they are created.
