# Comments

In Java, comments are non-executable statements that provide explanations or annotations in the source code. They are crucial for making the code more understandable and maintainable. Java supports three main types of comments:

- single-line comments
- multi-line comments
- documentation comments

## Single-Line Comments

Single-line comments are used for brief explanations or annotations within a single line.
They start with `//`. Everything following `//` on that line is treated as a comment.

```java
// This is a single-line comment
int number = 10; // This comment is at the end of a line
```

## Multi-Line Comments

Multi-line comments are used for longer explanations that span multiple lines.
They start with `/*` and end with `*/`. Everything between `/*` and `*/` is treated as a comment.

```java
/* This is a multi-line comment
   and it spans over multiple lines. */
int number = 10;
```

Use multi-line comments for detailed descriptions, especially when explaining complex logic or algorithms.

## Documentation Comments (JavaDoc)

Documentation comments are used to create documentation for Java code. They are processed by the JavaDoc tool to generate HTML documentation.
They start with `/**` and end with `*/`. Each line of a JavaDoc comment typically starts with an asterisk (`*`) for readability.

```java
/**
 * This method calculates the sum of two integers.
 * @param a the first integer
 * @param b the second integer
 * @return the sum of a and b
 */
public int add(int a, int b) {
    return a + b;
}
```

Use JavaDoc comments to document classes, interfaces, constructors, methods, and fields. Include tags like `@param`, `@return`, `@throws`, `@see`, and `@author` for more structured documentation.

## Tips for Effective Commenting

- **Clarity and Relevance**: Ensure comments are clear and relevant to the code they are describing. Avoid stating the obvious.
- **Maintainability**: Update comments as the code evolves to ensure they remain accurate.
- **Balance**: Strike a balance between commenting and over-commenting. Excessive comments can clutter the code and reduce readability.
