# Integers

Integers are represented using several primitive data types and a few classes that provide more functionality. Let's delve into the details:

## Primitive Data Types

Java provides four integer primitive data types:

- **byte**:
  - Size: 8 bits
  - Range: -128 to 127

- **short**:
  - Size: 16 bits
  - Range: -32,768 to 32,767

- **int**:
  - Size: 32 bits
  - Range: -2,147,483,648 to 2,147,483,647
  - This is the most commonly used integer type.

- **long**:
  - Size: 64 bits
  - Range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
  - When assigning a value to a `long` variable, you can use the `L` suffix, for example:

```java {cmd run_on_save}
class Main {
    public static void main(String[] args) {
        // byte 
        byte myByte = 100;
        System.out.println(myByte);

        // short
        short myShort = 5000;
        System.out.println(myShort);

        // int
        int myInt = 1000000;
        System.out.println(myInt);

        // long
        long myLong = 15000000000L;
        System.out.println(myLong);
    }
}

```

The `L` suffix is not always required when assigning a value to a `long` variable. However, it's necessary in situations where the value exceeds the range of an `int` or when you want to explicitly indicate that the literal is of type `long`.

By default, any whole number without a decimal point is treated as an `int` in Java. If the number is within the range of `int` (-2,147,483,648 to 2,147,483,647), you can assign it to a `long` variable without the `L` suffix:

```java {cmd run_on_save}
class Main {
    public static void main(String[] args) {
        long smallValue = 100;  // This is fine because 100 is within the range of int
        System.out.println(smallValue);
    }
}
```

However, if the number exceeds the range of `int`, you must use the `L` suffix:

```java {cmd run_on_save}
class Main {
    public static void main(String[] args) {
        long largeValue = 2147483648L;  // Using L because the value exceeds int range
        System.out.println(largeValue);
    }
}
```

Without the `L` suffix in the above example, you'd get a compilation error because the number would be treated as an `int`, and it's out of the `int` range.

It's a good practice to use the `L` suffix for `long` literals to make the code more readable and to avoid potential errors, especially when dealing with numbers close to the boundaries of the `int` range.

## Literals in Different Bases

In Java, you can represent integer literals in different bases:

- **Decimal**: `int decVal = 26;` (no prefix)
- **Binary**: `int binVal = 0b11010;` (prefix `0b` or `0B`)
- **Octal**: `int octVal = 032;` (prefix `0`)
- **Hexadecimal**: `int hexVal = 0x1A;` (prefix `0x` or `0X`)

For `byte`, `short`, and `long`, the representation is the same, but you need to ensure the value fits within the range of the type. For long literals, you can also append an `L` or `l` at the end, regardless of the base.

```java {cmd run_on_save}
class Main {
    public static void main(String[] args) {

        long longBinary = 0b1010101010101010101010101010101010101010101010101010101010101010L;
        System.out.println(longBinary);
    }
}

```

## Underscores in Numeric Literals

From Java 7 onwards, you can use underscores in numeric literals to make them more readable:

| Data Type | Example with Underscores | Value              |
| --------- | ------------------------ | ------------------ |
| `short`   | `32_767`                 | 32,767             |
| `int`     | `1_000_000`              | 1,000,000          |
| `long`    | `1234_5678_9012_3456L`   | 1234567890123456   |

The use of underscores in numeric literals in Java is purely for improving readability, and there's no strict rule on where they should be placed. You can use them wherever you think they make the number more readable, however, there are a few rules that you should be aware of.

**Rules and Restrictions:**

- You cannot place underscores at the beginning or end of a number.
- You cannot place underscores adjacent to a decimal point in a floating-point literal.
- You cannot place underscores prior to an L suffix in a long literal.
- You cannot place underscores in positions where a string of digits is expected.

```java

// Invalid: cannot place underscores at the beginning or end of a number
float pi1 = _3.1415F;
float pi2 = 3.1415F_;

// Invalid: cannot place underscores adjacent to a decimal point in a floating-point literal
float pi3 = 3_.1415F;
float pi4 = 3._1415F;

// Invalid: cannot place underscores prior to an L suffix in a long literal
long creditCardNumber = 1234_5678_9012_3456_L;

// Invalid: cannot place underscores in positions where a string of digits is expected
int x1 = 0b_1010_1010;
```

## Operations on Integers

Operations on integers in Java can be broadly categorized into arithmetic, bitwise, relational, and assignment operations. Let's delve into each category:

### Arithmetic Operations

| Operator | Name           | Example             |
|----------|----------------|---------------------|
| `+`      | Addition       | `a + b`             |
| `-`      | Subtraction    | `a - b`             |
| `*`      | Multiplication | `a * b`             |
| `/`      | Division       | `a / b`             |
| `%`      | Modulus        | `a % b`             |
| `++`     | Increment      | `a++` or `++a`      |
| `--`     | Decrement      | `a--` or `--a`      |

The `++` and `--` operators can be used in both postfix (e.g., `a++`) and prefix (e.g., `++a`) forms, and their behavior can differ based on their usage in expressions. The difference between these two forms lies in the order of operations when they are used within larger expressions.

**Prefix Form (`++a` and `--a`)**

In the prefix form, the variable is incremented or decremented **before** its value is used in the expression.

```java {cmd run_on_save}
public class Main {
    public static void main(String[] args) {
        int a = 5;
        int b = ++a;  // First, 'a' is incremented to 6. Then, this new value is assigned to 'b'.
        System.out.println(a);  // Outputs: 6
        System.out.println(b);  // Outputs: 6
    }
}
```

**Postfix Form (`a++` and `a--`)**

In the postfix form, the variable's current value is used in the expression **before** it is incremented or decremented.

```java {cmd run_on_save}
public class Main {
    public static void main(String[] args) {
        int a = 5;
        int b = a++;  // First, the current value of 'a' (which is 5) is assigned to 'b'. Then, 'a' is incremented to 6.
        System.out.println(a);  // Outputs: 6
        System.out.println(b);  // Outputs: 5
    }
}
```

### Bitwise Operations

| Operator | Name                 | Example               |
| -------- | -------------------- | --------------------- |
| `&`      | Bitwise AND          | `int result = a & b;` |
| `|`      | Bitwise OR           | `result = a | b;`     |
| `^`      | Bitwise XOR          | `result = a ^ b;`     |
| `~`      | Bitwise complement   | `result = ~a;`        |
| `<<`     | Left shift           | `result = a << 1;`    |
| `>>`     | Right shift          | `result = a >> 1;`    |
| `>>>`    | Unsigned right shift | `result = a >>> 1;`   |

### Relational Operations

| Operator | Name                           | Example                          |
| -------- | ------------------------------ | -------------------------------- |
| `==`     | Equal to                       | `boolean isEqual = (a == b);`    |
| `!=`     | Not equal to                   | `boolean isNotEqual = (a != b);` |
| `>`      | Greater than                   | `boolean isGreater = (a > b);`   |
| `<`      | Less than                      | `boolean isLess = (a < b);`      |
| `>=`     | Greater than or equal to       | `boolean isGE = (a >= b);`       |
| `<=`     | Less than or equal to          | `boolean isLE = (a <= b);`       |

### Assignment Operations

| Operator | Name                           | Example      |
| -------- | ------------------------------ | ------------ |
| `=`      | Assignment                     | `int c = a;` |
| `+=`     | Addition assignment            | `c += a;`    |
| `-=`     | Subtraction assignment         | `c -= a;`    |
| `*=`     | Multiplication assignment      | `c *= a;`    |
| `/=`     | Division assignment            | `c /= a;`    |
| `%=`     | Modulus assignment             | `c %= a;`    |
| `<<=`    | Left shift assignment          | `c <<= 2;`   |
| `>>=`    | Right shift assignment         | `c >>= 2;`   |
| `>>>=`   | Unsigned right shift assignment| `c >>>= 2;`  |
| `&=`     | Bitwise AND assignment         | `c &= a;`    |
| `|=`     | Bitwise OR assignment          | `c |= a;`    |
| `^=`     | Bitwise XOR assignment         | `c ^= a;`    |

## Pitfalls

When working with arithmetic operations in Java (or most programming languages), there are several "gotchas" or pitfalls that developers should be aware of:

### Integer Overflow and Underflow

When performing arithmetic operations on integers, the result can exceed the maximum or minimum value that the data type can hold, leading to overflow or underflow. For instance, adding 1 to `Integer.MAX_VALUE` will result in `Integer.MIN_VALUE` due to overflow.
  
### Division by Zero

Dividing an integer by zero will throw an `ArithmeticException`. Remember that in floating-point arithmetic, dividing a non-zero number by zero results in infinity or negative infinity, depending on the sign of the dividend.

### Loss of Precision

When dividing two integers, the result is also an integer. This means that any fractional part is discarded, leading to a loss of precision. For example, `5 / 2` will result in `2`, not `2.5`.

```java {cmd run_on_save}
class Main {
    public static void main(String[] args) {
        int a = 5;
        int b = 2;
        int result = a / b;  // Result is 2, not 2.5
        System.out.println(result);
    }
}
```

### Implicit or Explicit Type Conversion

When performing operations between different data types, Java might implicitly convert one type to another, which can lead to unexpected results. For instance, when multiplying an `int` with a `float`, the `int` is implicitly converted to a `float` before the operation.

Implicit type conversion, also known as **type coercion** or **type promotion**, can lead to several issues if not handled with care:

**Loss of Precision:**
When a smaller data type is implicitly converted to a larger data type, especially from an integer to a floating-point, there might be a loss of precision. For example:

```java {cmd run_on_save}
class Main {
    public static void main(String[] args) {
        int intVal = 7;
        // An Implicit conversion from int to double occurs here
        double doubleVal = intVal / 4;  // Expected 1.75, but result is 1.0
        System.out.println(doubleVal);
    }
}
```

And here is another example:

```java {cmd run_on_save}
class Main {
    public static void main(String[] args) {
        int largeInt = 1234567890;
        System.out.println("LargeInt: " + largeInt);
        float floatVal = largeInt;  // Some precision might be lost due to the conversion
        System.out.println("FloatVal: " + floatVal);
        int intVal = (int) floatVal;  // Explicitly cast back to int
        System.out.println("IntVal: " + intVal);
    }
}
```

Here, the integer `largeInt` is implicitly converted to a floating-point number and assigned to the `float` variable `floatVal`. Since the `float` type can represent a wider range of values than `int`, this conversion is allowed. However, there might be a loss of precision because the `float` type has limited precision when representing large integers.

In the next assignment, the `floatVal` is explicitly cast back to an integer and assigned to the `int` variable `intVal`. Since the `int` type has a narrower range than `float`, this requires an explicit cast. The fractional part of the `float` value will be truncated.

### Overflow

If a larger value is converted to a smaller data type, it can cause overflow. For example:

```java {cmd run_on_save}
class Main {
    public static void main(String[] args) {
        long largeLong = 2147483648L;  // This value is 1 more than Integer.MAX_VALUE
        System.out.println("LargeLong: " + largeLong);
        
        int intVal = (int) largeLong;  // Explicitly cast the long to an int
        System.out.println("IntVal: " + intVal);  // This will print -2147483648 due to overflow
    }
}
```

In this example, we have a `long` value `largeLong` that is set to `2147483648L`, which is just one more than the maximum value an `int` can hold (`Integer.MAX_VALUE` is `2147483647`). When we try to cast this `long` value to an `int` with `(int) largeLong`, it causes an overflow because the value is too large for an `int` to hold. As a result, `intVal` wraps around to the minimum value an `int` can hold, which is `-2147483648`.

### Assignment Operators

Operators like `+=`, `-=`, `*=`, etc., modify the variable in place. It's essential to be aware that the variable's value is being changed. When using assignment operators with operands of different data types, implicit type conversion can occur, potentially leading to precision loss or unexpected results. For example:

```java {cmd run_on_save}
class Main {
    public static void main(String[] args) {
        int intVal = 7;
        double doubleVal = 1.5;
        intVal += doubleVal;  // intVal is now 8 instead of 8.5
        System.out.println(intVal);
    }
}
```

### Increment and Decrement Operators

The prefix (`++a`) and postfix (`a++`) forms of the increment and decrement operators can lead to confusion, especially when used in expressions. The prefix form modifies the variable before its current value is used in the expression, while the postfix form modifies it after. Here's an example that demonstrates the difference between prefix and postfix forms of the increment and decrement operators:

```java {cmd run_on_save}
class Main {
    public static void main(String[] args) {
        int a = 5;
        int b = 5;

        // Using the prefix form
        int result1 = ++a + 10;  // Increment 'a' before addition
        System.out.println("Using prefix increment: a = " + a + ", result1 = " + result1);
        // Using prefix increment: a = 6, result1 = 16

        // Using the postfix form
        int result2 = b++ + 10;  // Increment 'b' after addition
        System.out.println("Using postfix increment: b = " + b + ", result2 = " + result2);
        // Using postfix increment: b = 6, result2 = 15
    }
}
```

In this example:

1. We start with two integer variables `a` and `b`, both initialized to `5`.
2. For the prefix increment (`++a`), the value of `a` is incremented first, making it `6`, and then `10` is added to this incremented value, resulting in `result1` being `16`.
3. For the postfix increment (`b++`), the current value of `b` (which is `5`) is first added to `10`, resulting in `result2` being `15`. Only after this addition is `b` incremented, making its value `6`.

This example clearly demonstrates the difference in behavior between prefix and postfix forms of the increment operator. The same logic applies to the decrement operators (`--a` and `a--`).