# String

## String Interning in Java

String interning is a method of storing only one copy of each distinct string value, which must be **immutable**. In Java, the JVM maintains a special memory area known as the "string constant pool." When a string is created, the JVM checks the pool to see if an identical string already exists. If it does, the new variable references the pooled string. If not, a new string is created in the pool.

```java
String str1 = "Hello"; // Automatically interned
String str2 = "Hello"; // Automatically interned

boolean isContentEqual = str1.equals(str2); // true, because their contents are equal
boolean isReferenceEqual = (str1 == str2); // true, because they refer to the same interned string
```

### Benefits

- **Memory Efficiency**: Since only one copy of each distinct string is maintained, string interning helps save memory, especially when many instances of identical strings are used throughout a program.
  
- **Faster Equality Checks**: Reference equality (`==`) between interned strings is much faster than calling `.equals()`, as it only compares memory addresses rather than the content of the strings.

### Pitfalls

- **Heap Memory Consumption**: While the string constant pool helps save memory by avoiding duplicate strings, it resides in the heap area. Excessive use of interned strings can fill up the heap memory, potentially leading to `OutOfMemoryError`.

- **Performance Overhead**: The process of checking the string constant pool for every string literal or manually interning strings can introduce a performance overhead, particularly if the pool becomes large.

### Creating Strings Without Interning

By default, string literals are interned in Java. However, new strings created with the `new` keyword are not interned automatically. They are stored in the heap outside the string constant pool. This behavior allows the creation of distinct string objects that contain the same sequence of characters but are treated as separate objects by the JVM.

```java
String str1 = new String("Example"); // Not interned, creates a new string object
String str2 = new String("Example"); // Not interned, creates another new string object

System.out.println(str1 == str2); // false, because they are different objects
System.out.println(str1.equals(str2)); // true, because their contents are equal
```

### Manually Interning Strings

If needed, strings created with `new` can be manually interned using the `String.intern()` method. This method ensures that the string is added to the pool if it's not already present, and returns a reference to the pooled string.

```java
String str3 = new String("Interned").intern(); // Manually interned
String str4 = "Interned"; // Automatically interned

System.out.println(str3 == str4); // true, because both refer to the same interned string
```
