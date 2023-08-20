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

```java
long myLong = 123456789012345L;
```

The `L` suffix is not always required when assigning a value to a `long` variable. However, it's necessary in situations where the value exceeds the range of an `int` or when you want to explicitly indicate that the literal is of type `long`.

By default, any whole number without a decimal point is treated as an `int` in Java. If the number is within the range of `int` (-2,147,483,648 to 2,147,483,647), you can assign it to a `long` variable without the `L` suffix:

```java {cmd}
long smallValue = 100;  // This is fine because 100 is within the range of int
```

However, if the number exceeds the range of `int`, you must use the `L` suffix:

```java {cmd}
long largeValue = 2147483648L;  // Using L because the value exceeds int range
```

Without the `L` suffix in the above example, you'd get a compilation error because the number would be treated as an `int`, and it's out of the `int` range.

It's a good practice to use the `L` suffix for `long` literals to make the code more readable and to avoid potential errors, especially when dealing with numbers close to the boundaries of the `int` range.

Examples:

```java {cmd}
public class Main {
    public static void main(String[] args) {
        byte myByte = 100;
        short myShort = 5000;
        int myInt = 1000000;
        long myLong = 15000000000L;
        System.out.println(myByte);
        System.out.println(myShort);
        System.out.println(myInt);
        System.out.println(myLong);
    }
}
```

## Literals in Different Bases

In Java, you can represent integer literals in different bases:

- **Decimal**: `int decVal = 26;` (no prefix)
- **Binary**: `int binVal = 0b11010;` (prefix `0b` or `0B`)
- **Octal**: `int octVal = 032;` (prefix `0`)
- **Hexadecimal**: `int hexVal = 0x1A;` (prefix `0x` or `0X`)

## Underscores in Numeric Literals

From Java 7 onwards, you can use underscores in numeric literals to make them more readable:

```java {cmd run_on_save}
class Main {
    public static void main(String[] args) {
        float oneMillion = 1000.109f;
        System.out.println(oneMillion);
    }
}
```

| Data Type | Example with Underscores | Value              |
| --------- | ------------------------ | ------------------ |
| `short`   | `32_767`                 | 32,767             |
| `int`     | `1_000_000`              | 1,000,000          |
| `long`    | `1234_5678_9012_3456L`   | 1234567890123456   |
| `float`   | `3.141_5F`               | 3.1415             |
| `double`  | `6.022_140_76e23`        | 6.02214076 × 10^23 |

The use of underscores in numeric literals in Java is purely for improving readability, and there's no strict rule on where they should be placed. You can use them wherever you think they make the number more readable, however, there are a few rules that you should be aware of.

**Rules and Restrictions:**

- You cannot place underscores at the beginning or end of a number.
- You cannot place underscores adjacent to a decimal point in a floating-point literal.
- You cannot place underscores prior to an L suffix in a long literal.
- You cannot place underscores in positions where a string of digits is expected.

```java {cmd run_on_save}
class Main {
    public static void main(String[] args) {
        // Invalid: cannot place underscores at the beginning or end of a number
        // float pi1 = _3.1415F;
        // float pi2 = 3.1415F_;

        // Invalid: cannot place underscores adjacent to a decimal point in a floating-point literal
        // float pi3 = 3_.1415F;
        // float pi4 = 3._1415F;

        // Invalid: cannot place underscores prior to an L suffix in a long literal
        // long creditCardNumber = 1234_5678_9012_3456_L;

        // Invalid: cannot place underscores in positions where a string of digits is expected
        // int number = 123_456_;
    }
}
```

## Operations on Integers

Operations on integers in Java can be broadly categorized into arithmetic, bitwise, relational, and assignment operations. Let's delve into each category:
Of course! Here's a more structured representation with operators and their corresponding examples side by side:

### 1. Arithmetic Operations

| Operator | Example             |
| -------- | ------------------- |
| `+`      | `int sum = a + b;`  |
| `-`      | `int diff = a - b;` |
| `*`      | `int prod = a * b;` |
| `/`      | `int quot = a / b;` |
| `%`      | `int rem = a % b;`  |
| `++`     | `a++;` `++a;`       |
| `--`     | `b--;` `--b;`       |

### 2. Bitwise Operations

| Name                 | Operator | Example               |
| -------------------- | -------- | --------------------- |
| Bitwise AND          | `&`      | `int result = a & b;` |
| Bitwise OR           | `|`      | `result = a | b;`     |
| Bitwise XOR          | `^`      | `result = a ^ b;`     |
| Bitwise complement   | `~`      | `result = ~a;`        |
| Left shift           | `<<`     | `result = a << 1;`    |
| Right shift          | `>>`     | `result = a >> 1;`    |
| Unsigned right shift | `>>>`    | `result = a >>> 1;`   |

### 3. Relational Operations

| Operator | Example                          |
| -------- | -------------------------------- |
| `==`     | `boolean isEqual = (a == b);`    |
| `!=`     | `boolean isNotEqual = (a != b);` |
| `>`      | `boolean isGreater = (a > b);`   |
| `<`      | `boolean isLess = (a < b);`      |
| `>=`     | `boolean isGE = (a >= b);`       |
| `<=`     | `boolean isLE = (a <= b);`       |

### 4. Assignment Operations

| Operator | Example      |
| -------- | ------------ |
| `=`      | `int c = a;` |
| `+=`     | `c += a;`    |
| `-=`     | `c -= a;`    |
| `*=`     | `c *= a;`    |
| `/=`     | `c /= a;`    |
| `%=`     | `c %= a;`    |
| `<<=`    | `c <<= 2;`   |
| `>>=`    | `c >>= 2;`   |
| `&=`     | `c &= a;`    |
| `|=`     | `c |= a;`    |
| `^=`     | `c ^= a;`    |

## Pitfalls

### Arithmetic Operations

When working with arithmetic operations in Java (or most programming languages), there are several "gotchas" or pitfalls that developers should be aware of:

### 1. Integer Overflow and Underflow

When performing arithmetic operations on integers, the result can exceed the maximum or minimum value that the data type can hold, leading to overflow or underflow. For instance, adding 1 to `Integer.MAX_VALUE` will result in `Integer.MIN_VALUE` due to overflow.
  
### 2. Division by Zero

Dividing an integer by zero will throw an `ArithmeticException`.

### 3. Loss of Precision

When dividing two integers, the result is also an integer. This means that any fractional part is discarded, leading to a loss of precision. For example, `5 / 2` will result in `2`, not `2.5`.

### 4. Floating Point Arithmetic

Floating-point numbers (like `float` and `double`) have precision limitations. This can lead to unexpected results in calculations. For instance, `0.1 + 0.2` might not exactly equal `0.3` due to rounding errors.

```java {cmd run_on_save}
class Main {
    public static void main(String[] args) {
        double doubleVal = 0.1 + 0.2;
        System.out.println(doubleVal);  // Outputs: 0.30000000000000004
    }
}
```

### 5. Implicit Type Conversion

When performing operations between different data types, Java might implicitly convert one type to another, which can lead to unexpected results. For instance, when multiplying an `int` with a `float`, the `int` is implicitly converted to a `float` before the operation.

Implicit type conversion, also known as type coercion or type promotion, can lead to several issues if not handled with care:

**Loss of Precision:**
When a smaller data type is implicitly converted to a larger data type, especially from an integer to a floating-point, there might be a loss of precision. For example:

```java {cmd run_on_save}
class Main {
    public static void main(String[] args) {
        int intVal = 7;
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

**Overflow:**
If a larger value is implicitly converted to a smaller data type, it can cause overflow. For example:

```java {cmd run_on_save}
class Main {
    public static void main(String[] args) {
        long largeLong = 2147483648L;  // This value is 1 more than Integer.MAX_VALUE
        System.out.println("LargeLong: " + largeLong);
        
        int intVal = (int) largeLong;  // Implicitly cast the long to an int
        System.out.println("IntVal: " + intVal);  // This will print -2147483648 due to overflow
    }
}
```

In this example, we have a `long` value `largeLong` that is set to `2147483648L`, which is just one more than the maximum value an `int` can hold (`Integer.MAX_VALUE` is `2147483647`). When we try to cast this `long` value to an `int` with `(int) largeLong`, it causes an overflow because the value is too large for an `int` to hold. As a result, `intVal` wraps around to the minimum value an `int` can hold, which is `-2147483648`.

### 6. Assignment Operators

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

### 7. Increment and Decrement Operators

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

### 8. Rounding Errors with Large Numbers

When working with very large numbers, rounding errors can accumulate, leading to inaccurate results. Here's an example that demonstrates rounding errors when working with large numbers:

```java {cmd run_on_save}
class Main {
    public static void main(String[] args) {
        double largeNumber = 1e18;  // 1 followed by 18 zeros
        double increment = 0.1;

        // Adding a small increment to a very large number multiple times
        for (int i = 0; i < 10; i++) {
            largeNumber += increment;
        }

        // Subtracting the original large number to see the accumulated result
        double result = largeNumber - 1e18;

        System.out.println("Expected result: " + (increment * 10));
        // Expected result: 1.0
        System.out.println("Actual result: " + result);
        // Actual result: 0.0
    }
}
```

In this example:

1. We start with a very large number `1e18` (which is `1` followed by `18` zeros) and a small increment of `0.1`.
2. We add this small increment to the large number ten times.
3. We then subtract the original large number to see the accumulated result of the ten increments.
4. Ideally, the result should be `1.0` (since `0.1` added ten times is `1.0`). However, due to rounding errors when working with such large numbers, the actual result might be slightly different from the expected `1.0`.

### 9. NaN and Infinity

In floating-point arithmetic, certain operations can result in `NaN` (Not a Number) or `Infinity`, especially when dividing by zero or performing operations that don't have a meaningful result.

Here's an example that demonstrates the occurrence of `NaN` and `Infinity` in floating-point arithmetic:

```java {cmd run_on_save}
class Main {
    public static void main(String[] args) {
        double positiveInfinity = Double.POSITIVE_INFINITY;
        double negativeInfinity = Double.NEGATIVE_INFINITY;
        double nanValue = Double.NaN;

        // Division by zero
        double result1 = 5.0 / 0.0;
        System.out.println("5.0 divided by 0.0: " + result1);  // Outputs: Infinity

        // 0.0 divided by 0.0
        double result2 = 0.0 / 0.0;
        System.out.println("0.0 divided by 0.0: " + result2);  // Outputs: NaN

        // Multiplying infinity by 0
        double result3 = positiveInfinity * 0;
        System.out.println("Infinity multiplied by 0: " + result3);  // Outputs: NaN

        // Adding positive infinity to negative infinity
        double result4 = positiveInfinity + negativeInfinity;
        System.out.println("Positive Infinity + Negative Infinity: " + result4);  // Outputs: NaN
    }
}
```

In this example:

1. We demonstrate division by zero, which results in `Infinity`.
2. Dividing `0.0` by `0.0` results in `NaN` because this operation doesn't have a meaningful result.
3. Multiplying `Infinity` by `0` is undefined and results in `NaN`.
4. Adding `Positive Infinity` to `Negative Infinity` is also undefined and results in `NaN`.
