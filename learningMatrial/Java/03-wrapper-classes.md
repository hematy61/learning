# Wrapper Classes

In Java, wrapper classes are part of the Java Standard Library and provide a mechanism to "wrap" primitive data types in an object so that they can be used in situations where only objects are usable. Wrapper classes convert primitive data types (like `int`, `char`, `double`) into their corresponding object representations.

**List of Wrapper Classes**:

1. **Byte**: Wraps the `byte` primitive data type.
2. **Short**: Wraps the `short` primitive data type.
3. **Integer**: Wraps the `int` primitive data type.
4. **Long**: Wraps the `long` primitive data type.
5. **Float**: Wraps the `float` primitive data type.
6. **Double**: Wraps the `double` primitive data type.
7. **Character**: Wraps the `char` primitive data type.
8. **Boolean**: Wraps the `boolean` primitive data type.

**Example 1:**

```java {cmd}
public class Main {
    public static void main(String[] args) {
        // Autoboxing: Converting int to Integer
        int num = 100;
        Integer obj = Integer.valueOf(num); // or simply Integer obj = num;

        // Printing object
        System.out.println(obj.getClass().getName());
        System.out.println(obj.doubleValue());

        // Unboxing: Converting Integer to int
        int num2 = obj.intValue(); // or simply int num2 = obj;

        // Printing primitive data types
        System.out.println(num2);
    }
}


```

**Example 2:** Parsing Strings to Numbers

Wrapper classes provide utility methods to convert strings into numbers.

```java {cmd}
public class Main {
    public static void main(String[] args) {
        String numberStr = "12345";
        int number = Integer.parseInt(numberStr);  // Convert String to int
        System.out.println(number + 10);  // Outputs: 12355
        System.out.println(typeOf(number));  // Outputs: int

        Integer obj = Integer.valueOf(number);
        System.out.println(typeOf(obj));  // Outputs: Integer

    }

    // Using method overloading to determine the type of a variable
    public static String typeOf(int number) {
        return "int";
    }

    public static String typeOf(Integer number) {
        return "Integer";
    }

    // ... add more overloaded methods for other types if needed
}
```

```java {cmd}
public class Main {
    public static void main(String[] args) {
        int primitiveInt = 42;
        Integer wrappedInt = Integer.valueOf(42);

        printType(primitiveInt);  // Outputs: The type of the variable is: int
        printType(wrappedInt);    // Outputs: The type of the variable is: Integer
    }

    public static void printType(int value) {
        System.out.println("The type of the variable is: int");
    }

    public static void printType(Integer value) {
        System.out.println("The type of the variable is: Integer");
    }

    // ... add more overloaded methods for other types if needed
}

```

**Example 3:** Checking Numeric Properties

The `Character` wrapper class provides methods to check properties of characters.

```java {cmd}
public class Main {
    public static void main(String[] args) {
        char ch = '7';
        if (Character.isDigit(ch)) {
            System.out.println(ch + " is a digit.");  // Outputs: 7 is a digit.
        }
    }
}
```

## Key Points about Wrapper Classes

1. **Object Representation**: Wrapper classes convert primitive data types (like `int`, `char`, `double`) into their corresponding object representations.

2. **Class Hierarchy**: All wrapper classes are subclasses of the `Object` class.

3. **Immutable**: Objects of wrapper classes are immutable, meaning their state cannot be changed once they are created.

4. **Autoboxing and Unboxing**: Java provides automatic conversion between primitive types and their corresponding wrapper objects. This feature was introduced in Java 5.
   - **Autoboxing**: Automatic conversion of primitive types to their corresponding wrapper class objects.
   - **Unboxing**: Automatic conversion of wrapper class objects back to their corresponding primitive types.

## Why Use Wrapper Classes?

1. **Generics**: Java's generics do not support primitive types. So, if you want to use a primitive type with a generic class or method, you'll need to use its corresponding wrapper class.

2. **Collections Framework**: The Java Collections Framework (like `ArrayList`, `HashMap`, etc.) stores objects and not primitives. Wrapper classes enable storing primitive values in collections.

3. **Null Handling**: Primitive types cannot be `null`, but their wrapper objects can be. This can be useful in scenarios where you might want to represent the absence of a value.

4. **Additional Methods**: Wrapper classes come with a variety of utility methods. For instance, the `Integer` class provides methods like `parseInt`, `valueOf`, and others that can be very useful for operations related to integers.
