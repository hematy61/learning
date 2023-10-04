# Iterables

In Python, an iterable is an object capable of returning its elements one at a time. An iterable is a sequence of data that can be iterated upon using a loop. Examples of iterables in Python include lists, tuples, sets, and dictionaries.
Iterables can be looped over with a for loop. The loop repeatedly calls the `next()` method of the iterable until the `StopIteration` exception is raised, indicating that there are no more elements to iterate.

Here's an example of iterating over a list:

```python {cmd="python3"}
my_list = [1, 2, 3]
for element in my_list:
    print(element)
```

In this example, `my_list` is an iterable, and the loop iterates over each element in the list and prints it to the console. Strings are also iterables, and iterating over a string will return each character in the string.

It's worth noting that not all Python objects are iterable. For example, integers, floats, and booleans are not iterable. However, you can iterate over a range of numbers using the `range()` function, like this:

```python {cmd="python3"}
for i in range(5):
    print(i)
```

In this example, the `range()` function returns an iterable that can be looped over. The loop iterates over the range of numbers from 0 to 4 and prints each number to the console.

## Define iterables

In Python, an iterable is an object that can return an iterator. An iterator is an object that can iterate (loop) over the elements of an iterable, one at a time. To create an iterable in Python, you can define a class with an `__iter__()` and `__next__` methods that returns an iterator object. Here's an example:

```python {cmd="python3"}
class MyIterable:
    def __init__(self, data):
        self.data = data

    def __iter__(self):
        self.index = 0
        return self

    def __next__(self):
        if self.index >= len(self.data):
            raise StopIteration
        result = self.data[self.index]
        self.index += 1
        return result

my_iterable = MyIterable([1, 2, 3])
for element in my_iterable:
    print(element)
```

One real-world usage of an iterable in Python can be to iterate over a large set of data, such as a dataset or a log file, and process each element one by one.
For example, if you have a large dataset of customer records, you can create an iterable that returns each record one at a time. You can then use a loop to iterate over the iterable and process each customer record individually, such as updating their contact information, checking their purchase history, or sending them a promotional offer.

This can be useful in situations where you cannot load the entire dataset into memory at once, or if you want to process the data in parallel on multiple processors or threads. By using an iterable, you can process the data in a memory-efficient way, without needing to load the entire dataset into memory at once.

Here is an example of using an iterable in Python to process a large dataset of customer records:

```python {cmd="python3"}
class CustomerData:
   def __init__(self, file_name):
       self.file_name = file_name

   def __iter__(self):
       with open(self.file_name) as f:
           for line in f:
               yield line.strip().split(",")

data = CustomerData("assets/sample.csv")
for record in data:
   # process the customer record 
   print(f"Customer ID: {record[0]}, Name: {record[1]}, Email: {record[2]}")
```

In this example, we define a CustomerData class that reads in a CSV file containing customer records. The `__iter__()` method opens the file and returns a generator that yields each customer record as a list of strings.

We then use a for loop to iterate over the generator and process each customer record one by one. In this case, we simply print out the customer `ID`, `name` and `email`, but you could perform any kind of processing you like on each record.

There are many real-world uses for iterables in Python. Here are a few examples:

- **Streaming data processing:** In situations where data is generated or collected continuously, an iterable can be used to process the data in a streaming fashion. This can be useful for real-time data analysis, log processing, and other applications.

- **Batch processing:** In cases where data is generated in batches, an iterable can be used to process each batch of data individually. This can be useful for batch processing of large datasets, such as those used in machine learning or data mining.

- **Custom data structures:** Iterables can be used to define custom data structures that can be iterated over. This can be useful for implementing complex algorithms or data manipulation operations.

- **Functional programming:** Iterables are an important part of functional programming in Python, and can be used to define and process sequences of data using a functional style. This can be useful for tasks such as mapping, filtering, and reducing data.

- **Parallel processing:** In situations where data processing can be done in parallel, iterables can be used to split the data into smaller chunks that can be processed on different processors or threads. This can be useful for speeding up data processing tasks on multi-core machines.

Here is an example of using an iterable in Python to do parallel processing of a large dataset:

```python
import multiprocessing

def process_data(data_chunk):
    # Process the data chunk here
    return processed_data_chunk

def main():
    # Load the data into a list
    data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    # Split the data into chunks
    chunk_size = 3
    data_chunks = [data[i:i+chunk_size] for i in range(0, len(data), chunk_size)]

    # Create a pool of worker processes
    pool = multiprocessing.Pool()

    # Process the data chunks in parallel
    processed_data = pool.map(process_data, data_chunks)

    # Combine the processed data chunks
    combined_data = []
    for chunk in processed_data:
        combined_data.extend(chunk)

    # Do something with the combined data
    print(combined_data)

if __name__ == '__main__':
    main()
```

In this example, we have a list of data that we want to process in parallel. We first split the data into smaller chunks using a list comprehension. We then create a pool of worker processes using the `multiprocessing.Pool()` function. We use the `map()` method of the pool object to apply the `process_data()` function to each data chunk in parallel. The `map()` method returns a list of the processed data chunks, which we then combine into a single list using the `extend()` method. Finally, we do something with the combined data, such as printing it to the console.

Note that the `process_data()` function is not defined in this example, as it will depend on the specific data processing task you are trying to perform. However, the key idea is to define a function that takes a data chunk as input and returns a processed data chunk as output. This function can then be applied to each data chunk in parallel using the `map()` method of the `multiprocessing.Pool()` object.

## `map()` function

As part of the *functional paradigm*, Python provides a built-in function called `map()` that applies a function to each element of an iterable or multiple iterables. The `map()` function returns an iterator that yields the results of the function call on each element of the iterable.

The syntax of the `map()` function is as follows:

```python {cmd="python3"}
map(function, iterable, [iterable2, iterable3,...])
```

- **function:** The function to be applied to each item in the iterable.
- **iterable:** The iterable object to be mapped.
- **iterable2/3/...** (optional): Additional iterable objects to be mapped.

The `map()` function returns a map object which can be converted to other iterable objects such as a list, tuple or set. Here is an example of how to use the `map()` function in Python:

### With Lists

```python {cmd="python3"}
# Define a function to be used with map()
def square(x):
    return x * x

# Define a list of numbers
numbers = [1, 2, 3, 4, 5]

# Use the map() function to apply square() function to each item in the list of numbers
squared_numbers = map(square, numbers)

# Convert the map object to a list
squared_numbers_list = list(squared_numbers)

# Print the squared numbers
print(squared_numbers_list) # Output: [1, 4, 9, 16, 25]
```

### With Tuples

```python {cmd="python3"}
# Define a tuple of temperatures in Celsius
celsius_temps = (0, 5, 10, 15, 20)

# Use the map() function to convert each temperature to Fahrenheit
fahrenheit_temps = tuple(map(lambda x: (9/5) * x + 32, celsius_temps))

# Print the Fahrenheit temperatures
print(fahrenheit_temps) # Output: (32.0, 41.0, 50.0, 59.0, 68.0)
```

### With Dictionaries

```python {cmd="python3"}
# Define a dictionary of names and ages
ages = {"Alice": 25, "Bob": 30, "Charlie": 35, "Dave": 40}

# Use the map() function to add 5 years to each person's age
new_ages = dict(map(lambda x: (x[0], x[1]+5), ages.items()))

# Print the new ages
print(new_ages) # Output: {'Alice': 30, 'Bob': 35, 'Charlie': 40, 'Dave': 45}
```

### With Sets

```python {cmd="python3"}
# Define a set of words
words = {"apple", "banana", "cherry"}

# Use the map() function to get the length of each word in the set
word_lengths = set(map(len, words))

# Print the word lengths
print(word_lengths) # Output: {5, 6, 7}
```

### With lambda functions

Another way to use the `map()` function is to use an anonymous function (also known as a *lambda* function) instead of defining a separate function. Here is an example:

```python {cmd="python3"}
# Define a list of strings
words = ["apple", "banana", "cherry"]

# Use the map() function with a lambda function to capitalize each string in the list
capitalized_words = map(lambda x: x.upper(), words)

# Convert the map object to a list
capitalized_words_list = list(capitalized_words)

# Print the capitalized words
print(capitalized_words_list) # Output: ['APPLE', 'BANANA', 'CHERRY']
```

One thing to keep in mind when using the `map()` function is that **the original iterable object remains unchanged**. The `map()` function only returns a new iterable object with the transformed values.

### With Strings

```python {cmd="python3"}
# Define a string of words
words = "apple banana cherry"

# Use the map() function to capitalize each word in the string
capitalized_words = " ".join(map(str.capitalize, words.split()))

# Print the capitalized words
print(capitalized_words) # Output: Apple Banana Cherry
```

### With multiple iterables

```python {cmd="python3"}
# Define two lists of numbers
numbers1 = [1, 2, 3]
numbers2 = [4, 5, 6]

# Use the map() function to add corresponding numbers together
sums = list(map(lambda x, y: x + y, numbers1, numbers2))

# Print the sums
print(sums) # Output: [5, 7, 9]
```

In this example, we use lambda function to add corresponding numbers in two lists using `map()`. Since `map()` function is receiving two iterables, we need to define two arguments in the lambda function. The resulting iterable is converted to a list and the output is printed.

## `filter()` function

The `filter()` function is another built-in function as part of the functional paradigm in Python. `filter()` is a built-in Python function that allows you to filter an iterable (such as a list or tuple) using a function that returns either `True` or `False` for each element of the iterable, thereby creating a new iterable with only the elements that satisfy the condition of the function. The syntax for `filter()` function is as follows:

```python {cmd="python3"}
filter(function, iterable)
```

Here's an example that demonstrates the usage of filter() function. Let's say we have a list of numbers, and we want to filter out only the even numbers from the list:

```python {cmd="python3"}
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def is_even(num):
    return num % 2 == 0

even_numbers = list(filter(is_even, numbers))

print(even_numbers) # Output: [2, 4, 6, 8, 10]
```

Note that the `filter()` function returns an iterator by default, which can be converted to a list, tuple or any other iterable using the appropriate function.

Filter is an extremely powerful and useful function in Python that simplifies the task of filtering elements from a collection. However, in Python 3.x, using List comprehensions or generator expressions can be other alternative to use.

```python {cmd="python3"}
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
odd_numbers = [num for num in numbers if num % 2 == 1]
print(odd_numbers)  # Output: [1, 3, 5, 7, 9]
```

### With lists

Let's say we have a list of strings, and we want to filter out only the strings that have length greater than 3:

```python {cmd="python3"}
words = ['apple', 'banana', 'cat', 'dog', 'elephant', 'fox']
filtered_words = list(filter(lambda word: len(word) > 3, words))
print(filtered_words)  # Output: ['apple', 'banana', 'elephant']
```

### With tuples

```python {cmd="python3"}
numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
filtered_numbers = tuple(filter(lambda num: num % 2 == 1, numbers))
print(filtered_numbers)  # Output: (1, 3, 5, 7, 9)
```

### With dictionaries

With dictionaries, we can filter out the key-value pairs based on some condition. Let's say we have a dictionary of grades, and we want to filter out only the students who have scored more than 80:

```python {cmd="python3"}
grades = {
    'Alice': 75,
    'Bob': 85,
    'Charlie': 90,
    'David': 80,
    'Emily': 95
}
filtered_grades = dict(
    filter(lambda grade: grade[1] > 80, grades.items())
)
print(filtered_grades)  # Output: {'Bob': 85, 'Charlie': 90, 'Emily': 95}
```

### With sets

With sets, we can filter out the elements based on some condition. Let's say we have a set of numbers, and we want to filter out only the numbers that are greater than 5:

```python {cmd="python3"}
numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
filtered_numbers = set(filter(lambda num: num > 5, numbers))
print(filtered_numbers)  # Output: {6, 7, 8, 9, 10}
```

### With strings

With strings, we can filter out the characters based on some condition. Let's say we have a string, and we want to filter out only the vowels:

```python {cmd="python3"}
string = 'Hello World'
vowels = 'aeiou'
filtered_string = ''.join(list(
    filter(lambda char: char.lower() not in vowels, string))
)
print(filtered_string)  # Output: 'Hll Wrld'
```

## `reduce()` function

The reduce() function in Python is a built-in function that is used to apply a particular function to all the elements in a sequence and reduce it to a single value. It is important to note that the `reduce()` function has been moved to the `functools` module in Python 3, so you will need to import it from there.
The basic syntax of the `reduce()` function is:

```python
reduce(function, sequence[, initial])
```

The `function` parameter is a function that takes two arguments and returns a single value, which will be used to reduce the sequence. The sequence parameter is an iterable sequence of elements that will be reduced by the function. The optional initial parameter is an initial value that can be used as the first argument to the function.
Here's an example of using the reduce() function to find the sum of a list of numbers:

```python {cmd="python3"}
from functools import reduce

nums = [1, 2, 3, 4, 5]
result = reduce(lambda x, y: x + y, nums)

print(result)  # Output: 15
```

if the `reduce()` function is used with an empty sequence and no initial value is provided, it will raise a `TypeError`. So, it's always a good practice to provide an initial value when using `reduce()` to avoid such errors.

```python {cmd="python3"}
from functools import reduce

nums = []
result = reduce(lambda x, y: x + y, nums)

print(result)  # Output: TypeError: reduce() of empty sequence with no initial value
```

Here are more examples:

Find the maximum value from a list of numbers:

```python {cmd="python3"}
from functools import reduce

nums = [23, 45, 12, 67, 89]
max_num = reduce(lambda x, y: x if x > y else y, nums)

print(max_num)   # Output: 89
```

Calculate the total cost of items in a shopping cart:

```python {cmd="python3"}
from functools import reduce

cart_items = [
    {'item': 'book', 'price': 10.99},
    {'item': 'shirt', 'price': 25.50},
    {'item': 'shoes', 'price': 89.99},
    {'item': 'hat', 'price': 15.00}
]
total_cost = reduce(lambda x, y: x + y['price'], cart_items, 0)

print(total_cost)   # Output: 141.48
```

Finding the last longest word in a list of words:

```python {cmd="python3"}
from functools import reduce

words = ['apple', 'banana', 'cherry', 'date']
longest_word = reduce(lambda x, y: x if len(x) > len(y) else y, words)

print(longest_word)   # Output: 'cherry'
```
