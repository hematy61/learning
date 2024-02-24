# Strings in Python

Strings are used to store text data. Strings are immutable sequences of Unicode code points.

## Declaring a string

Strings are declared using either single or double quotes. The following two lines are equivalent:

```python
x = 'a string with single quotes'
y = "a string with double quotes"
```

another way to declare a string is to use the `str()` function:

```python {cmd="python3"}
x = str('a quoted string')
y = str("a quoted string")
z = str(1.0)
w = str(True)

print(x)  # a quoted string
print(y)  # a quoted string
print(z)  # 1.0
print(w)  # True
```

The `str()` function can be used to convert other data types to strings. The difference between using quotes and the `str()` function is that the `str()` function can be used to convert any data type to a string, while using quotes can only be used to convert strings to strings. The following line will result in an error:

```python {cmd="python3"}
x = '1.0'
y = 1.0
z = x + y  # TypeError: can only concatenate str (not "float") to str
```

But using the `str()` function will work:

```python {cmd="python3"}
x = '1.0'
y = 1.0
z = str(y)
w = x + z
print(w)  # 1.01.0
```

### Multiline strings

Multiline strings can be declared using triple quotes:

```python {cmd="python3"}
x = '''This is a multiline string.
It can span multiple lines.
'''
```

another way to declare a multiline string is to use backslashes:

```python {cmd="python3"}
# with one quote at the beginning and end of the whole string
x = 'This is a multiline string. \
It can span multiple lines.'

# with two quotes at the beginning and end of each line
y = 'This is a multiline string.' \
'It can span multiple lines.'
```

when printing multiline strings, with triple quotes, the newlines are preserved, but with backslashes, the newlines are removed:

```python {cmd="python3"}
x = '''This is a multiline string with triple quotes.
The newlines are preserved.
'''
y = 'This is a multiline string with backslashes. \
The newlines are removed.'
print(x)
# This is a multiline string with triple quotes.
# It can span multiple lines.
print(y)
# This is a multiline string with backslashes. It can span multiple lines.
```

## Accessing characters in a string

Characters in a string can be accessed using the square bracket notation:

```python {cmd="python3"}
x = 'a string'
print(x[0])  # a
print(x[1])  # space
print(x[2])  # s
```

negative indices can be used to access characters from the end of the string:

```python {cmd="python3"}
x = 'a string'
print(x[-1])  # g
print(x[-2])  # n
print(x[-3])  # i
```

## Length of a string

The length of a string can be found using the `len()` function:

```python {cmd="python3"}
x = 'a string'
print(len(x))  # 8
```

## Concatenating strings

Strings can be concatenated using the `+` operator:

```python {cmd="python3"}
x = 'The quick brown fox'
y = ' jumps over the lazy dog'

z = x + y
print(z)  # The quick brown fox jumps over the lazy dog
```

**concatenating with join() method**
One way to concatenate strings is to use the `join()` method:

```python {cmd="python3"}
x = 'The quick brown fox'
y = ' jumps over the lazy dog'

z = ''.join([x, y])
print(z)  # The quick brown fox jumps over the lazy dog
```

**concatenating with format() method**
Another way to concatenate strings is to use the `format()` method:

```python {cmd="python3"}
x = 'The quick brown fox'
y = ' jumps over the lazy dog'

z = '{}{}'.format(x, y)
print(z)  # The quick brown fox jumps over the lazy dog
```

**concatenating with f-string method**
The other way to concatenate strings is to use f-strings:

```python {cmd="python3"}
x = 'The quick brown fox'
y = ' jumps over the lazy dog'

z = f'{x}{y}'
print(z)  # The quick brown fox jumps over the lazy dog
```

## Comparing strings

Strings can be compared using comparison operators:

```python {cmd="python3"}
x = 'a string'
y = 'another string'

print(x == y)  # False
print(x != y)  # True
print(x < y)  # True
print(x > y)  # False
print(x <= y)  # True
print(x >= y)  # False
```

The way strings are compared is based on the Unicode code points of the characters in the strings. The comparison is done character by character, starting from the first character.

- If the first character of the first string is less than the first character of the second string, then the first string is less than the second string. For example:
  
  ```python {cmd="python3"}
    x = 'apple'
    y = 'banana'
    print(x < y)  # True
    # 'a' in 'apple' has unicode code point 97, and 'b' in
    # 'banana' has unicode code point 98. Therefore, 97 < 98
    # and apple is less than banana.
    ```

- If the first character of the first string is equal to the first character of the second string, then the second character of the first string is compared to the second character of the second string, and so on. For example:
  
  ```python {cmd="python3"}
    x = 'apple'
    y = 'apricot'
    print(x < y)  # True
    # both 'apple' and 'apricot' start with 'a', so the second
    # character of each string is compared.
    # 'p' in 'apple' has unicode code point 112, and 'r' in
    # 'apricot' has unicode code point 114. Therefore, 112 < 114
    # and apple is less than apricot.
    ```

!!!
    To get the Unicode code point of a character, use the `ord()` function. For example:

    ```python {cmd="python3"}
    x = 'a'
    print(ord(x))  # 97
    ```

## Slicing strings

There are multiple ways to slice strings:

- using the `slice()` function
- using slicing operator `:`

### Using `slice()`

`slice()` is a built-in function in Python that can be used to create a slice object. A slice object is used to specify how to slice a sequence (such as a string, list, or tuple). You might use it if you only want to work with part of a sequence, or if you want to modify a specific part of a sequence.

The syntax for slice() is as follows:

```python {cmd="python3"}
slice(start, stop, step)
```

Here's what each parameter means:

- **start:** an integer that specifies where to start the slice (inclusive)
- **stop:** an integer that specifies where to end the slice (exclusive)
- **step:** an integer that specifies the step size (i.e., how many items to skip between elements). By default, the step size is 1.

!!!
    You don't have to provide all three parameters -- they're all optional.
    - If you don't provide a start, it will default to 0.
      ```python {cmd="python3"}
      x = 'python'
      y = slice(None, 3) # slice from index 0 (inclusive) to index 3 (exclusive)
      print(x[y])  # pyt
      ```
    - If you don't provide a stop, it will default to the length of the sequence.
      ```python {cmd="python3"}
      x = 'python'
      y = slice(3, None) # slice from index 3 (inclusive) to the end of the string
      # or y = slice(3) # same as above
      print(x[y])  # hon
      ```
    - If you don't provide a step, it will default to 1.
      ```python {cmd="python3"}
      x = 'python'
      y = slice(0, 5) # slice from index 0 (inclusive) to index 5 (exclusive)
      print(x[y])  # pytho
      ```
    - And if you don't provide any parameters, it will default to the entire sequence, which is the same as not using slice() at all.
      ```python {cmd="python3"}
      x = 'python'
      y = slice() # slice from index 0 (inclusive) to the end of the string
      # or y = slice(None) # same as above
      print(x[y])  # python
      ```
    Here are a few more examples:

    ```python {cmd="python3"}
    x = 'a string'
    y = slice(2) # slice from index 2 (inclusive) to the end of the string
    print(x[y])  # ring
    z = slice(2, 5) # slice from index 2 (inclusive) to index 5 (exclusive)
    print(x[z])  # rin
    w = slice(2, 5, 2) # slice from index 2 (inclusive) to index 5 (exclusive) with step size 2
    print(x[w])  # rg
    ```

The slice() function returns a slice object, which can be used to slice a sequence (such as a string, list, or tuple). For example:

```python {cmd="python3"}
x = 'a string'
y = slice(2, 5) 
print(y)  # slice(2, 5, None) -- y is a slice object
print(x[y])  # str
```

### Using slicing operator `:`

The `:` operator can be used to slice strings.

```python {cmd="python3"}
x = 'a string'
y = 2:5  # slice(2, 5, None) -- y is a slice object
print(x[y])  # str
# x[y] is similar to x[2:5]
```

It's similar to the `slice()` function, but it's a little easier to use and it's syntax is:
`start:stop:step` (all three parameters are optional).

- If you provide all three parameters, they will be used as the start, stop, and step parameters.

```python {cmd="python3"}
x = 'Python is awesome'
y = x[1:13:2]  # slice from index 1 (inclusive) to index 13 (exclusive) with step size 2 -- y is a string
print(y)  # yhn s aoe
```

- If you provide two parameters, they will be used as the start and stop parameters.

```python {cmd="python3"}
x = 'Python is awesome'
y = x[7:13]  # slice from index 7 (inclusive) to index 13 (exclusive) -- y is a string
print(y)  # is awe
```

- If you provide one parameter, after the colon, it will be used as the stop parameter.

```python {cmd="python3"}
x = 'Python is awesome'
y = x[:6]  # slice from index 0 (inclusive) to index 6 (exclusive) -- y is a string
print(y)  # Python
```

- If you provide one parameter, before the colon, it will be used as the start parameter.

```python {cmd="python3"}
x = 'Python is awesome'
y = x[7:]  # slice from index 7 (inclusive) to the end of the string -- y is a string
print(y)  # is awesome
```

- If you don't provide any parameters, it will default to the entire sequence, which is the same as not using the `:` operator at all.

```python {cmd="python3"}
x = 'Python is awesome'
y = x[:]  # slice from index 0 (inclusive) to the end of the string -- y is a string
# or y = x[::] # same as above
# or y = x # same as above  

print(y)  # Python is awesome
```

## Reversing a string

### slicing operator `:`

To reverse a string in Python, we can use slicing operation as shown below:

```python {cmd="python3"}
x = 'Python is awesome'
y = x[::-1]
print(y)  # emosewa si nohtyP
```

In the above code, `[::-1]` is the slicing operation that starts from the end of the string and goes backward by a step of -1, which means it reverses the string.

### Using reversed() function

The `reversed()` function returns a reversed iterator object. We can use it to reverse a string as shown below:

```python {cmd="python3"}
x = 'Python is awesome'
y = ''.join(reversed(x))
print(y)  # emosewa si nohtyP
```

In the above code, we have used the `reversed()` function to reverse the string and then used the `join()` method to join the characters of the reversed string. The `reversed()` function returns an iterator object, so we need to convert it to a string using the `join()` method.

### Using for loop

We can also use a for loop to reverse a string as shown below:

```python {cmd="python3"}
x = 'Python is awesome'
y = ''
for i in x:
    y = i + y
print(y)  # emosewa si nohtyP
```

In the above code, we have used a for loop to iterate through the string and then used the `+` operator to concatenate the characters of the string in reverse order.

### Using while loop

We can also use a while loop to reverse a string as shown below:

```python {cmd="python3"}
x = 'Python is awesome'
y = ''
i = len(x) - 1
while i >= 0:
    y = y + x[i]
    i = i - 1
print(y)  # emosewa si nohtyP
```

### Using recursion

We can also use recursion to reverse a string as shown below:

```python {cmd="python3"}
def reverse(s):
    if len(s) == 0:
        return s
    else:
        return reverse(s[1:]) + s[0]

x = 'car'
y = reverse(x)
print(y)  # rac
```

In the above code, we have defined a function called `reverse()` that takes a string as an argument and returns the reversed string. The function uses recursion to reverse the string. The base case of the recursion is when the length of the string is 0, in which case the function returns the empty string. Otherwise, the function calls itself with the string sliced from the second character to the end of the string and concatenates the first character of the string to the result of the recursive call.

| round | `s`   | `s[1:]` | `s[0]` | return value        |
| ----- | ----- | ------- | ------ | ------------------- |
| 1     | 'car' | 'ar'    | 'c'    | reverse('ar') + 'c' |
| 2     | 'ar'  | 'r'     | 'a'    | reverse('r') + 'a'  |
| 3     | 'r'   | ''      | 'r'    | reverse('') + 'r'   |
| 4     | ''    | ''      | ''     | ''                  |

reverse('') + 'r' = '' + 'r' = 'r'
reverse('r') + 'a' = 'r' + 'a' = 'ra'
reverse('ar') + 'c' = 'ra' + 'c' = 'rac'

## String methods

Python has a number of built-in methods that you can use on strings. These methods are called on a string using the dot operator. Here is a list of some of the most commonly used string methods:

### `capitalize()`

returns a string where the first character is upper case.

```python {cmd="python3"}
x = 'python is awesome'
y = x.capitalize()
print(y)  # Python is awesome
```

### `casefold()`

This method returns a copy of the original string converted to lowercase.

```python {cmd="python3"}
x = 'PYTHON IS AWESOME'
y = x.casefold()
print(y)  # python is awesome
```

This method is useful when you need to compare two strings in a way that ignores the case of the letters. Comparing two strings using casefold() ensures that both strings contain the same characters after being converted to the same case.

### `lower()`

The `lower()` method in Python is a string method that returns a new string with all the characters converted to lowercase equivalent. It does not modify the original string but creates a new string object with lowercase characters.

```python {cmd="python3"}
sentence = 'PYTHON IS AWESOME'
lowercase_sentence = sentence.lower()
print(lowercase_sentence)  # python is awesome
```

!!! `lower()` vs `casefold()`
    lower() converts a string to lowercase but only for uppercase characters in English alphabet. It means, it does not provide accurate results for non-English strings. For example:

      ```python {cmd="python3"}
      string1 = "Straße"
      string2 = "strasse"
      # Using lower()
      print(string1.lower() == string2.lower()) # Output: False
      # Using casefold()
      print(string1.casefold() == string2.casefold()) # Output: True
      ```
      
      In this example, we have two versions of the same string - one with an 'ß' character ('Straße') and one with an 'ss' character ('strasse'). When we use the lower() method to convert these strings to lowercase, the strings do not match. However, when we use the casefold() method instead, the strings do match. This is because casefold() is more aggressive in its conversion, and also converts the 'ß' character to 'ss'. Here is another example:

      ```python {cmd="python3"}
      string1 = "İstanbul"
      string2 = "istanbul"
      # Using lower()
      print(string1.lower() == string2.lower()) # Output: False
      # Using casefold()
      print(string1.casefold() == string2.casefold()) # Output: True
      ```

### `center()`

center() is a built-in function in Python that returns a centered string by filling the left and right sides of the string with a specified character (e.g., space or any other character) up to the given width.

Here's the syntax for using center():

```text
string.center(width[, fillchar])
```

- **width:** This is the total width of the centered string (including any padding characters).
- **fillchar:** This is an optional parameter that specifies what character to use for padding. It defaults to a space character.

```python {cmd="python3"}
x = 'python'
y = x.center(20, '*')
print(y)  # *******python*******
z = x.center(20) # default fillchar is a space
print(z)  # "       python       "
```

### `count()`

In Python, the count() method is used to count the number of occurrences of a specified element in a list.
Here's the syntax for using the count() method:

```text
list_name.count(element)
```

Where:

- *list_name* is the name of the list you want to count occurrences from.
- *element* is the item that you want to count.

```python {cmd="python3"}
x = 'python is awesome'
y = x.count('o')
print(y)  # 2
```

### `endswith()`

The endswith() method is a built-in string method in Python that returns a boolean value depending on whether a given string ends with a specified suffix or not.

Here's the syntax of using endswith() method:

```text
string_name.endswith(suffix[, start[, end]])
```

Here's what each parameter and the returned value represents:

- *suffix*: This is the string or character to check if it matches the end of the string.

  ```python {cmd="python3"}
  x = 'python is awesome'
  y = x.endswith('some')
  print(y)  # True
  ```

- *start* (optional): This is the optional starting index position within the string where you want to start checking the substring. If not specified, it takes the default value of 0.

  ```python {cmd="python3"}
  x = 'python'
  y = x.endswith('thon', 2)
  print(y)  # True
  z = x.endswith('thon', 3)
  print(z)  # False
  ```

- *end* (optional): This is the optional ending index position within the string until where you want the substring to be checked. If not specified, it takes the default value of length of the string rounded to an integer.

  ```python {cmd="python3"}
  x = 'python'
  y = x.endswith('thon', 0, 6)
  print(y)  # True
  z = x.endswith('thon', 0, 5)
  print(z)  # False
  ```

### `find()`

 It is a built-in method in Python that returns the index position of the first occurrence of a specified substring within a string. It returns -1 if the substring is not found. Here's how you can use the find() method in Python:

```text
string.find(substring, start=0, end=len(string))
```

Let's break down what each argument means:

- *string*: the original string you're searching through
- *substring*: the substring you're looking for
- *start* (optional): the starting index of where find() should begin its search. By default, start is 0 (the beginning of the string).
- *end* (optional): the ending index of where find() should end its search. By default, end is len(string) (the end of the string).

```python {cmd="python3"}
sentence = "The quick brown fox jumps over the lazy dog"

# Find the index of the first occurrence of "fox" in the sentence
index = sentence.find("fox")
print(index)
# Output: 16

# Find the index of the second occurrence of "the" in the sentence
index = sentence.find("the", 5) # specify to start at index 5
print(index)
# Output: 31

# Try to find the index of "unicorn" in the sentence (it's not there)
index = sentence.find("unicorn")
print(index)
# Output: -1
```

### `index()`

The index() method is a string method used to find the first occurrence of a substring within an existing string. It returns the index of the beginning of the substring if it exists; otherwise, it throws a ValueError.

The syntax for the index() method is as follows:

```text
string_name.index(substring, start_index, end_index
```

- *string_name* - the string in which we want to search for the substring.
- *substring* - the substring to be searched inside the given string.
- *start_index*(Optional) - an integer that specifies where the search should start. Default is 0.
- *end_index*(Optional) - an integer that specifies where the search should end. The search within the string stops at end_index - 1. If it is not provided, searching stops at the end of the string.
Here's an example to demonstrate the usage of index() method:

```python {cmd="python3"}
sentence = "The quick brown fox jumps over the lazy dog"

# find the index of the substring within the sentence
index = sentence.index('quick')
print(index) # Output: 4
index = sentence.index('jump')
print(index) # Output: 20
index = sentence.index('tiger')
print(index) # Output: ValueError: substring not found
```

### `isalnum()`

It is a built-in method in python used to check if all the characters in a string are alphanumeric (alphabets or numeric values).

It returns True if all characters of a string are alphabets or numeric value. If not, it returns False.

Here's an example:

```python {cmd="python3"}
string1 = "abcdef123456"  # Only contains alphabets and numbers
string2 = "hello world!"  # Contains non-alphanumeric characters, space and exclamation mark

print(string1.isalnum())  # Output: True
print(string2.isalnum())  # Output: False
```

### `isalpha()`

It is a Python function that checks whether all the characters in a string are alphabets or not. It returns `True` if all the characters in the string are alphabets, otherwise it returns `False`.

Here's an example:

```python {cmd="python3"}
string1 = "HelloWorld"
print(string1.isalpha()) #returns True

string2 = "Hello World"
print(string2.isalpha()) #returns False because of the space character is not an alphabet
```

### `isnumeric()`

It is a Python function that checks whether all the characters in a string are numeric values or not. It returns `True` if all the characters in the string are numeric values, otherwise it returns `False`.

Here's an example:

```python {cmd="python3"}
num = "12345"  
result = num.isnumeric()  
print(result)  # output: True

num = "1.2345"  
result = num.isnumeric()  
print(result)  # output: False 
```

In the second case, it returns `False` because the string "1.2345" contains a decimal point which is not a numerical value.

### `islower()`

It is a Python function that checks whether all the characters in a string are lowercase or not. It returns `True` if all the characters in the string are lowercase, otherwise it returns `False`.

```python {cmd="python3"}
string1 = "hello world"
print(string1.islower()) # output: True

string2 = "Hello World"
print(string2.islower()) # output: False
```

### `isupper()`

It is a Python function that checks whether all the characters in a string are uppercase or not. It returns `True` if all the characters in the string are uppercase, otherwise it returns `False`.

```python {cmd="python3"}
string1 = "HELLO WORLD"
print(string1.isupper()) # output: True

string2 = "Hello World"
print(string2.isupper()) # output: False
```

### `isspace()`

It is a Python function that checks whether all the characters in a string are whitespace characters or not. It returns `True` if all the characters in the string are whitespace characters, otherwise it returns `False`.

```python {cmd="python3"}
string1 = "     "
print(string1.isspace()) # output: True

string2 = "Hello World"
print(string2.isspace()) # output: False
```

### `join()`

It is used to concatenate strings. It returns a new string consisting of the elements of the iterable (e.g. `list`, `tuple`, `set`) joined together by a separator string. The general syntax of the `join()` method is as follows:

```text
separator.join(iterable)
```

- *separator* is the string or character that is used to separate the elements.
- *iterable* is an iterable, such as a `list` or `tuple`, containing the strings to be joined.

For example, let's say we have a list of words and we want to join them together with a space separator:

```python {cmd="python3"}
words = ["Hello", "world", "this", "is", "Python"]
sentence = " ".join(words)
print(sentence) # Output: Hello world this is Python
```

### `ljust()`

It is a string method in Python that is used to make the specified string of certain length by adding additional padding on the right side of it. It returns a left-justified string of a given minimum width.

The syntax for `ljust()` is:

```text
string.ljust(width, fillchar)
```

- *width*: Required length of the output string. If the length of the string is greater than the specified width, then the original string is returned.

```python {cmd="python3"}
example_word = "Hello"
print(example_word.ljust(10)) # Output: "Hello     "
print(example_word.ljust(10, "*")) # Output: Hello*****
# width is less than the length of the example_word, so the original string is returned
print(example_word.ljust(3, "*")) # Output: Hello
```

- fillchar: (Optional) A character that will be used for filling the remaining space after the string has been left aligned to the required length. Default character used is " "(space).

### `rjust()`

The rjust() method in Python is used to return the right-justified string of a specified width. It pads the original string with space characters (or any other specified character) to make a new string well-aligned and reach the desired length from the right side.

The syntax for `rjust()` is:

```text
string.rjust(width, fillchar)
```

Here's an example:

```python {cmd="python3"}
example_word = "Hello"
print(example_word.rjust(10)) # Output: "Hello     "
print(example_word.rjust(10, "*")) # Output: Hello*****
# width is less than the length of the example_word, so the original string is returned
print(example_word.rjust(3, "*")) # Output: "Hello"
```

### `split()`

It is utilized to separate a string into a list of substrings by using a delimiter or separator value. The split() function splits the specified string from start to end based on a delimiter character.

The syntax for `split()` is:

```text
string.split(separator, maxsplit)
```

- *separator* (Optional): Specifies the separator to be used to split the string. By default, any whitespace is a separator.
- *maxsplit* (Optional): Specifies how many splits to do. Default value is -1, which is "all occurrences".

Here's an example:

```python {cmd="python3"}
sentence = "Hello world this is Python"
words = sentence.split()
print(words) # Output: ['Hello', 'world', 'this', 'is', 'Python']

url = "https://www.google.com/index.html"
# find protocol
protocol = url.split("://")[0]
print(protocol) # Output: https
# note: The better way to do this is to use the urlparse module.

# find domain
domain = url.split("://")[1].split("/")[0]
print(domain) # Output: www.google.com
```

### `replace()`

It is used to replace a specified substring with a new substring in a string. The new substring may be an empty string/character, which effectively deletes the specified substring from the original string.

Syntax:

```text
string.replace(old_value, new_value, count)
```

Here,

- *old_value* - The substring to be replaced.
- *new_value* - The substring that will replace the old_value.
- *count*(optional) - Defines how many occurrences of the *old_value* need to be replaced (default is -1 meaning all).

Example:

```python {cmd="python3"}
# Replace 'fox' with 'cat'
original_string = "The quick brown fox jumps over the lazy dog."
new_string = original_string.replace("fox", "cat")
print(new_string)
# Output: "The quick brown cat jumps over the lazy dog."

# Replacing multiple occurences
original_string = "chocolate, vanilla, strawberry, chocolate, banana"
new_string = original_string.replace("chocolate", "mango",2)
print(new_string)
# Output: 'mango, vanilla, strawberry, mango, banana'

# Deleting substring
original_string = "Good bye 2020!"
new_string = original_string.replace("2020", "")
print(new_string)
# Output: "Good bye !"
```

### `strip()`

It is used to remove all leading and trailing characters from a string. It returns a copy of the string with both leading and trailing characters removed. The `strip()` method doesn't take any arguments.

```python {cmd="python3"}
string = "   Hello World   "
print(string.strip()) # Output: "Hello World"
```
