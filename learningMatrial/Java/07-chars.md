---
puppeteer:
  printBackground: true
export_on_save:
    puppeteer: true
---

# Character Type

In Java, the `char` data type is used to represent a single character. Here's a detailed explanation of the `char` type:

## 1. Basic Information

- **Size**: The `char` data type is 2 bytes (16 bits) in size.
- **Range**: It can represent Unicode characters, ranging from `\u0000` (or `0`) to `\uffff` (or `65,535`).

## 2. Unicode and UTF-16

Java uses the Unicode character set, and the `char` data type is based on the UTF-16 encoding. Unicode is a universal character encoding standard that represents most of the world's written languages. UTF-16 is one of the ways to encode Unicode characters.

## 3. Declaring and Initializing

You can declare a `char` variable and initialize it using single quotes:

```java
public class Main {
    public static void main(String[] args) {
        char letterA = 'A';
        char digit9 = '9';
        char unicodeChar = '\u0041';  // Represents 'A'
        System.out.println(letterA);  // Outputs: A
        System.out.println(digit9);   // Outputs: 9
        System.out.println(unicodeChar); // Outputs: A
    }
}
```

In general there are three to create a `char` variable:

- Using a Unicode character.
- Using a literal character.
- Using an integer value.
- Using an Hexadecimal value.

```java
public class Main {
    public static void main(String[] args) {
        // Using a literal character
        char letterD = 'D';

        // Using a Unicode character - the unicode value for 'D' is U+0044
        // and in java we use '\u' to indicate that it's a unicode character
        char letterDUnicode = '\u0044';

        // Using an integer value - the integer value for 'D' is 68 which is the
        // the Decimal value of the Unicode character 'D'
        char letterDInt = 68;

        // Using an Hexadecimal value - the Hexadecimal value for 'D' is 44 which is the
        // the Hexadecimal value of the Unicode character 'D'
        char letterDHex = 0x44;
        

        System.out.println(letterD); // Outputs: D
        System.out.println(letterDUnicode); // Outputs: D
        System.out.println(letterDInt); // Outputs: D
        System.out.println(letterDHex); // Outputs: D
    }
}
```

## 4. Escape Sequences

Java supports special escape sequences for certain characters:

| Escape Sequence | Description       |
| --------------- | ----------------- |
| `\'`            | Single quote      |
| `\"`            | Double quote      |
| `\\`            | Backslash         |
| `\n`            | Newline           |
| `\t`            | Tab               |
| `\r`            | Carriage return   |
| `\b`            | Backspace         |
| `\f`            | Form feed         |
| `\uXXXX`        | Unicode character |

carriage return means to return the cursor to the beginning of the line. This is useful when you want to overwrite the current line of text. For example:

```java
public class Main {
    public static void main(String[] args) {
        String lineWithCarriageReturn = "First Line\rSecond Line";
        System.out.println(lineWithCarriageReturn); // Outputs: Second Line
    }
}
```

The `\b` escape sequence is used to move the cursor one character back. Note that the `\b` escape sequence only moves the cursor back and does not delete the character. If you want to delete the character, you can use the `\b` escape sequence along with the space character. For example:

```java
public class Main {
    public static void main(String[] args) {
        String lineWithBackspace = "Hello World!!!\b\b\b   ";
        System.out.println(lineWithBackspace); // Outputs: Hello World
        System.out.println("Good Evening\bg Coders! "); // Outputs: Good Evening Coders!
    }
}
```

Example of `\n` and `\t` escape sequences:

```java
public class Main {
    public static void main(String[] args) {
        char newline = '\n';
        char tab = '\t';
        System.out.println("Hello" + newline + "World" + tab + "!");
    }
}
```

## 5. Character Wrapper Class

Java provides a wrapper class `Character` for the primitive data type `char`. This class offers a number of useful class (i.e., static) methods to work with characters:

```java
public class Main {
    public static void main(String[] args) {
        char ch = 'a';
        boolean isLetter = Character.isLetter(ch);  // true
        char upperCaseCh = Character.toUpperCase(ch); // 'A'
        System.out.println(isLetter);
        System.out.println(upperCaseCh);
    }
}
```

The `Character` class in Java provides a wide range of methods to work with characters. Here's a list of some commonly used methods of the `Character` class, along with explanations and examples:

### `isLetter(char ch)`

Determines if the specified character is a letter.

```java
public class Main {
    public static void main(String[] args){
        boolean result = Character.isLetter('A');  // true
        System.out.println(result);
    }
}
  ```

### `isDigit(char ch)`

Determines if the specified character is a digit. If you pass an integer to this method, it will be converted to a character first. For example, passing integer 9 to this method will return `false` because the integer 9 is converted to the character `\u0009` (tab character).

```java
public class Main {
    public static void main(String[] args){
        boolean result = Character.isDigit('9');  // true
        boolean result2 = Character.isDigit(9);  // false
        System.out.println(result);
        System.out.println(result2);
    }
}
  ```

### `isWhitespace(char ch)`

Determines if the specified character is white space.

```java
public class Main {
    public static void main(String[] args){
        boolean result = Character.isWhitespace(' ');  // true
        System.out.println(result);
    }
}
  ```

### `isUpperCase(char ch)`

Determines if the specified character is an uppercase character.

```java
public class Main {
    public static void main(String[] args){
        boolean result = Character.isUpperCase('A');  // true
        System.out.println(result);
    }
}
  ```

### `isLowerCase(char ch)`

Determines if the specified character is a lowercase character.

```java
public class Main {
    public static void main(String[] args){
        boolean result = Character.isLowerCase('a');  // true
        System.out.println(result);
    }
}
  ```

### `toUpperCase(char ch)`

Converts the character argument to uppercase.

```java
public class Main {
    public static void main(String[] args){
        char result = Character.toUpperCase('a');  // 'A'
        System.out.println(result);
    }
}
  ```

### `toLowerCase(char ch)`

Converts the character argument to lowercase.

```java
public class Main {
    public static void main(String[] args){
        char result = Character.toLowerCase('A');  // 'a'
        System.out.println(result);
    }
}
  ```

### `toString(char ch)`

Returns a `String` object representing the specified character value.

```java
public class Main {
    public static void main(String[] args){
        String result = Character.toString('A');  // "A"
        System.out.println(result);
    }
}
  ```

### `getNumericValue(char ch)`

Returns the `int` value that the specified character represents.
Here's how it works:

- If the character is a decimal digit, it returns the corresponding integer (`0-9` for `0`-`9`).
- If the character is a letter, it returns the appropriate numeric value (`10-35` for `A`-`Z` or `a`-`z`, with 10 for `A` and `a`, and so on).
- If the character does not have a numeric value, it returns `-1`.

!!! note
    The `getNumericValue()` method returns the numeric value of the character, not the character itself. For example, the numeric value of the character `9` is `9`, not `57` (the Unicode value of `9`).
    Also, it return the same value for multiple characters. For example, the numeric value of `A`, `a`, and 10 are all `10`.

```java
public class Main {
    public static void main(String[] args){
        int result = Character.getNumericValue('9');  // 9
        System.out.println(result);

        System.out.println(Character.getNumericValue('A'));  // 10
        System.out.println(Character.getNumericValue('a'));  // 10
        System.out.println(Character.getNumericValue(10));   // 10
    }
}
  ```

### `isAlphabetic(int codePoint)`

Determines if the specified character (Unicode code point) is alphabetic. `isAlphabetic` not only recognizes letters from the English alphabet but also letters from other languages due to the Unicode support. For example, it returns `true` for the character `ñ`, which is a letter in the Spanish alphabet or the character `Ω`, which is a letter in the Greek alphabet.

```java
public class Main {
    public static void main(String[] args){
        boolean result = Character.isAlphabetic('A');  // true
        System.out.println(result);

        System.out.println(Character.isAlphabetic('ñ'));  // true
        System.out.println(Character.isAlphabetic('Ω'));  // true
    }
}
  ```

### `isLetterOrDigit(char ch)`

Determines if the specified character is a letter or digit. It will return true for characters that are either alphabetic letters (including those beyond A-Z, like accented characters) or numeric digits. Therefore, it return `true` for non-English letters like `ñ` or `Ω`.

```java
public class Main {
    public static void main(String[] args){
        boolean result = Character.isLetterOrDigit('A');  // true
        System.out.println(result);

        System.out.println(Character.isLetterOrDigit('ñ'));  // true
        System.out.println(Character.isLetterOrDigit('Ω'));  // true
        System.out.println(Character.isLetterOrDigit('9'));  // true
    }
}
  ```

### `digit(char ch, int radix)`

Returns the numeric value of the character `ch` in the specified radix. The numeric value is the value that the character represents. For example, the numeric value of the character `9` is `9`, not `57` (the Unicode value of `9`).

!!! note
    Radix is the base of the number system. For example, the decimal number system has a radix of 10, while the hexadecimal number system has a radix of 16.

```java
public class Main {
    public static void main(String[] args){
        int result = Character.digit('A', 16);  // 10 (for hexadecimal)
        System.out.println(result);

        System.out.println(Character.digit('A', 10));  // -1 (for decimal)
    }
}
  ```

### `forDigit(int digit, int radix)`

Determines the character representation for a specific digit in the specified radix.

```java
public class Main {
    public static void main(String[] args){
        char result = Character.forDigit(10, 16);  // 'A' (for hexadecimal)
        System.out.println(result);
    }
}
  ```

### `isIdentifierIgnorable(char ch)`

Determines if the character is an ignorable character in a Java identifier or a Unicode identifier.

```java
public class Main {
    public static void main(String[] args){
        boolean result = Character.isIdentifierIgnorable(' ');  // false
        System.out.println(result);
    }
}
  ```

### `isJavaIdentifierPart(char ch)`

Determines if the character may be part of a Java identifier as other than the first character.

```java
public class Main {
    public static void main(String[] args){
        boolean result = Character.isJavaIdentifierPart('A');  // true
        System.out.println(result);
    }
}
  ```

### `isJavaIdentifierStart(char ch)`

Determines if the character is a valid initial character for a Java identifier.

```java
public class Main {
    public static void main(String[] args){
        boolean result = Character.isJavaIdentifierStart('A');  // true
        System.out.println(result);
    }
}
  ```

### `isUnicodeIdentifierPart(char ch)`

Determines if the character may be part of a Unicode identifier as other than the first character.

```java
public class Main {
    public static void main(String[] args){
        boolean result = Character.isUnicodeIdentifierPart('A');  // true
        System.out.println(result);
    }
}
  ```

### `isUnicodeIdentifierStart(char ch)`

Determines if the character is a valid initial character for a Unicode identifier.

```java
public class Main {
    public static void main(String[] args){
        boolean result = Character.isUnicodeIdentifierStart('A');  // true
        System.out.println(result);
    }
}
  ```

### `charCount(int codePoint)`

Determines the number of `char` values needed to represent the specified character (Unicode code point).

```java
public class Main {
    public static void main(String[] args){
        int result = Character.charCount(0x10400);  // 2
        System.out.println(result);
    }
}
  ```

### `codePointAt(CharSequence seq, int index)`

Returns the character (Unicode code point) at the specified index of the `CharSequence`.

```java
public class Main {
    public static void main(String[] args){
        int result = Character.codePointAt("Hello", 1); 
        System.out.println(result); // 101 (Unicode code point for 'e')
    }
}
```

## 6. Autoboxing and Unboxing

Java allows automatic conversion between the primitive `char` and its wrapper class `Character`. This is known as autoboxing and unboxing.

```java
public class Main {
    public static void main(String[] args) {
        char primitiveChar = 'a';
        Character charObject = primitiveChar;  // Autoboxing
        char anotherChar = charObject;         // Unboxing
    }
}
```

In summary, the `char` data type in Java is versatile and supports a wide range of characters, including Unicode characters. The associated `Character` class provides many utility methods for working with characters.

## 7. + Operand effect on `char` type

When the `+` operator is used with a `char` type in Java, it can have different effects based on the context.

### Addition with Another Character or a Number

If a `char` is added to another `char`, or to a numeric type (`byte`, `short`, `int`, `long`, `float`, `double`), the `+` operator performs an arithmetic addition. Both characters are converted to their corresponding `int` values (based on the ASCII or Unicode table), and the addition is performed. For example, `'a' + 'b'` results in `195` because the ASCII value of `'a'` is `97` and `'b'` is `98`.
Note that the `+` operator result is an `int` value, not a `char` value and can not be assigned to a `char` variable.

```java
public class Main {
    public static void main(String[] args) {
        char ch1 = 'a';
        char ch2 = 'b';
        char error = ch1 + ch2 // Error: Type mismatch: cannot convert from int to char
        int result = ch1 + ch2;  // 195 which is the character code for 'Ã'
        System.out.println(result); // 195

        // convert the result back to char
        char charResult = (char) result; // 'Ã'

    }
}
```

### Concatenation with a String

If a `char` is used with the `+` operator and one of the operands is a `String`, then the operation is string concatenation. The `char` is converted to a `String`, and the two strings are concatenated. For example, `'a' + "bc"` results in the string `"abc"`.

```java
public class Main {
    public static void main(String[] args) {
        char ch = 'a';
        String str = "bc";
        String result = ch + str;  // "abc"
        System.out.println(result); // abc
    }
}
```

However, be careful with operations like this one:

```java
public class Main {
    public static void main(String[] args) {
        char a = 'a';
        String b = "new world";
        String result = a + ' ' + b;
        System.out.println(result); // 195new world

        String result2 = a + " " + b;
        System.out.println(result2); // a new world
    }
}
```

The expression `a + ' ' + b` is evaluated as follows:

The `char` `a` (with ASCII value 97) is added to the space character ' ' (with ASCII value 32). This is an arithmetic addition because both operands are `char` types. The result is `129`.

The integer result `129` is then concatenated with the string `"new world"`. In Java, when a string is involved in the `+` operation, the entire operation is treated as string concatenation.

Therefore, the final `result` is the string `"129new world"`.

However, if you use the expression `a + " " + b`, the result is the string `"a new world"` because the first operand is a string, and the entire operation is treated as string concatenation.
