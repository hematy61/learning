# Terminology

## Statement

A **statement** is a complete unit of execution in a programming language. It represents an action or a sequence of actions. For example in Java, statements are executed in sequence, from top to bottom, and they can change the state of a program. Statements are typically terminated by a semicolon (`;`).

Examples of Statements in Java:

**Declaration Statement**:

```java
int x;
```

**Assignment Statement**:

```java
x = 5;
```

**Control Flow Statement**:

```java
if (x > 10) {
    System.out.println("x is greater than 10");
}
```

**Loop Statement**:

```java
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}
```

## Expression

An **expression** is a combination of variables, values, operators, and method calls that the Java runtime evaluates to produce a single value. Expressions can be part of statements, and they don't change the state of the program but instead compute a value.

### Examples of Expressions in Java:

**Arithmetic Expression**:

```java
x + 5
```

**Relational Expression**:

```java
x > 10
```

**Method Call Expression**:

```java
Math.sqrt(25)
```

**String Concatenation Expression**:

```java
"Hello, " + "World!"
```

An expression can be a part of a statement, but a statement cannot be a part of an expression.
For example, in the statement:

```java
int y = x + 5;
```

`x + 5` is an expression, while `int y = x + 5;` is a statement.