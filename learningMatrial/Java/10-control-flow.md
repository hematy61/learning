---
puppeteer:
  printBackground: true
export_on_save:
    puppeteer: true
---

# Control Flow Statements in Java

Control flow statements in Java govern the order in which operations are executed within a program. They are fundamental to adding logic to your Java applications, allowing the code to make decisions, repeat operations, and branch execution paths based on certain conditions. There are three main categories of control flow statements in Java:

- decision-making statements
- looping statements
- branch statements.

## 1. Decision-Making Statements

- **`if` statement**: The `if` statement executes a block of code if its condition evaluates to true. It can be followed by an optional `else` block for alternative execution when the condition is false.

```java
if (condition) {
    // block of code to be executed if the condition is true
} else {
    // block of code to be executed if the condition is false
}
```

- **`switch` statement**: The `switch` statement allows for the execution of one block of code from multiple options based on the evaluation of an expression. The `case` values are tested against the expression, and execution jumps to the matching `case` block.

```java
switch (expression) {
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
        // default block
}
```

## 2. Looping Statements

- **`for` loop**: Ideal for when the number of iterations is known. It includes initialization, condition, and iteration expressions.

```java
for (initialization; condition; iteration) {
    // code block to be executed
}

// Example
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```

- **`while` loop**: Executes a block of code as long as its condition remains true. The condition is evaluated before entering the loop.

```java
while (condition) {
    // code block to be executed
}

// Example
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}
```

- **`do-while` loop**: Similar to the `while` loop, but the condition is evaluated after the execution of the loop's body, ensuring that the body is executed at least once.

```java
do {
    // code block to be executed
} while (condition);

// Example
int i = 0;
do {
    System.out.println(i);
    i++;
} while (i < 5);
```

## 3. Branch Statements

- **`break`**: Terminates the loop or `switch` statement and transfers execution to the statement immediately following the loop or switch.

```java
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    System.out.println(i);
}
```

- **`continue`**: Causes the loop to immediately jump to the next iteration, skipping any code between it and the end of the loop's body for the current iteration.

```java
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    System.out.println(i);
}
```

- **`return`**: Exits from the current method and optionally returns a value to the method caller.

```java
int findMax(int a, int b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
```

## Best Practices and Considerations

### Readability

Use whitespace and indentation to enhance the readability of your control flow statements.

### Braces

Always use braces `{}` even for single-line blocks within control flow statements to avoid errors during code modifications.

Imagine you have a simple `if` statement without braces, which is perfectly valid for single-line statements in Java:

```java
if (condition)
    System.out.println("Condition is true");
```

Later, you decide to add another statement to be executed if the condition is true, without paying attention to the lack of braces:

```java
if (condition)
    System.out.println("Condition is true");
    System.out.println("This should also be part of the condition");
```

The second `println` statement is not controlled by the `if` condition due to the absence of braces. It will execute regardless of the condition, which is likely not what was intended.

To prevent such errors, always use braces with control flow statements, even if there's currently only a single line to execute:

```java
if (condition) {
    System.out.println("Condition is true");
}
```

Now, when you add another statement, the braces ensure both lines are correctly executed as part of the conditional block:

```java
if (condition) {
    System.out.println("Condition is true");
    System.out.println("This should also be part of the condition");
}
```

### Nested Loops and Conditions

Be cautious with deeply nested loops and conditions as they can make your code harder to read and maintain. Consider refactoring deeply nested structures into separate methods.

**Example of Nested Conditions**
Suppose we need to validate user input with multiple conditions:

```java
if (userInput != null) {
    if (!userInput.isEmpty()) {
        if (userInput.equals("expected")) {
            System.out.println("Input is valid.");
        } else {
            System.out.println("Input is not as expected.");
        }
    } else {
        System.out.println("Input is empty.");
    }
} else {
    System.out.println("Input is null.");
}
```

This code can be refactored to improve readability:

```java
if (userInput == null) {
    System.out.println("Input is null.");
} else if (userInput.isEmpty()) {
    System.out.println("Input is empty.");
} else if (userInput.equals("expected")) {
    System.out.println("Input is valid.");
} else {
    System.out.println("Input is not as expected.");
}
```

Or by using **Early Return** pattern or consolidating conditions, we can make the code more readable:

```java
public static void validateInput(String userInput) {
    if (userInput == null) {
        System.out.println("Input is null.");
        return;
    }
    if (userInput.isEmpty()) {
        System.out.println("Input is empty.");
        return;
    }
    if (userInput.equals("expected")) {
        System.out.println("Input is valid.");
    } else {
        System.out.println("Input is not as expected.");
    }
}
```
