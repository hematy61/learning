# Handling Files

In Python, we can read, write and manipulate files using built-in functions for file operations. To handle files in python, following are the basic steps:

## `open()` function

The `open()` function is a built-in function that is used to open a file. It also can be used to create a new file, append to an existing file, replace an existing file content with new content, or even create a new file.
It returns a file object and provides methods to read/write from or to the opened file.

If the file cannot be found, it will raise an `OSError` exception.

The syntax of the `open()` function is:

```python
open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)
```

- `file`: The file name or path to the file to be opened. The path can be absolute or relative to the current directory of the file to be opened.
- `mode`: The mode in which the file is to be opened. The default mode is `r` which means read-only. Other modes are:
  - `r`: Read-only mode. The file pointer is placed at the beginning of the file. This is the default mode.
  - `w`: Write-only mode. Overwrites the file if the file exists. If the file does not exist, creates a new file for writing.
  - `x`: Exclusive creation mode. If the file already exists, the operation fails.
  - `a`: Append mode. All writes are appended to the end of the file. The file is created if it does not exist.
  - `t`: Text mode. This is the default mode.
  - `b`: Binary mode.
  - `+`: Open a file for updating (reading and writing)

## Opening a file

To open a file, we use the `open()` function. It returns a file object, also called a handle, as it is used to read or modify the file accordingly.

```python {cmd="python3"}
file = open("assets/sample.md")

print(file)
# <_io.TextIOWrapper name='assets/sample.md' mode='r' encoding='UTF-8'>
```

`file` is a file object. It has various methods and attributes that can be used to read, write, manipulate or close the file.

## Closing a file

After we are done with the file, we need to close it. This is done by calling the `close()` method on the file object.

```python {cmd="python3"}
file = open("assets/sample.md")

# do something with the file

file.close()
```

## Reading from a file

### `read()` method

To read from a file, we use the `read()` method. It reads the entire content of the file in read mode and returns it as a string.

```python {cmd="python3"}
file = open("assets/sample.md")

content = file.read()

# print first line of the file content 
print(content.splitlines()[0])

# print the first 10 lines of the file content
for line in content.splitlines()[:10]:
    print(line)

file.close()
```

We can also read a specific number of characters from the file by passing the number of characters to the `read()` method.

```python {cmd="python3"}
file = open("assets/sample.md", "r")

# read first 100 characters from the file
print(file.read(100))

```

### `readline()` method

If we want to read the file line by line, we can use the `readline()` method. It reads a single line from the file and returns it as a string.

```python {cmd="python3"}
file = open("assets/sample.md", "r")

# read first line from the file
print(file.readline())

# read first 10 lines from the file. Note that the first line is already read above so we start from 1 to 10
for i in range(10):
    print(file.readline())

file.close()
```

### `readlines()` method

The `file.readlines()` method is a built-in method in Python that reads all the lines of a file and returns them as a list of strings. This method reads each line with its newline character and returns them as a list where each element contains one line from the file.

```python {cmd="python3"}
try:
    with open("assets/sample.md", "r") as file:
        lines = file.readlines()
        print(lines)
except FileNotFoundError as e:
    print("File not found", e)
    
# Output: 
# [
#   '# A sample markdown file\n', 
#   '\n', 
#   'This is a sample markdown file.\n', 
#   '\n', 
#   '## headings\n', 
#   '\n', 
#   '# Heading 1\n', 
#   ... and so on
# ]
```

!!! attention
    Note that if the file is too large to fit into memory, using `file.readlines()` can increase memory consumption and slow down your program. In such cases, it's better to read the file line by line using a loop construct like `for line in file:` or through a generator expression.

## Writing into a file

### `write()` method and overwriting a file

To write into a file, we use the `write()` method. It writes the string passed to it into the file. It returns the number of characters written to the file. If the file does not exist, it creates a new file. Before using the `write()` method, we need to open the file in write mode. If the file already exists, it will be overwritten.

```python {cmd="python3"}
file = open("assets/sample2.md", "w")

# write into the file
number_of_written_chars = file.write("This is a sample text written into a file using Python open().write() method.")
print('number of characters written into the file: ',number_of_written_chars)
# number of characters written into the file:  77

# close the file
file.close()
```

### Appending to a file

To append to a file, we use the `open()` method in `a` mode. It appends the string passed to the `write` method at the end of the file. It returns the number of characters written to the file. If the file does not exist, it creates a new file.

```python {cmd="python3"}
file = open("assets/sample2.md", "a")

# append to the file
# \n is used to add a new line to the file before appending the text
number_of_written_chars = file.write("\nThis is a sample text appended to a file using Python open().write() method in append mode.")
print('number of characters written into the file: ',number_of_written_chars)
# number of characters written into the file:  92

# close the file
file.close()
```

### `writelines()` method

The `writelines()` method writes a list of strings to a file. It returns `None`. By default it does not add a newline character to the end of each string. Therefore, we need to add a newline character to each string in the list before passing it to the `writelines()` method.

```python {cmd="python3"}
# open the file in write mode to overwrite the existing file
file = open("assets/sample2.md", "w")

# write a list of strings to the file
# \n is used to add a new line to the file before appending the text
file.writelines(["First line\n", "Second line\n", "Third line\n"])


# close the file
file.close()
```

The above example will overwrite the existing file with the new content. If we want to append to the existing file, we need to open the file in append mode.

```python {cmd="python3"}
# open the file in append mode to append to the existing file
file = open("assets/sample2.md", "a")

# append a list of strings to the file
# \n is used to add a new line to the file before appending the text
number_of_written_chars = file.writelines(["Fourth line\n", "Fifth line\n", "Sixth line\n"])
print('number of characters written into the file: ',number_of_written_chars)
# number of characters written into the file:  27

# close the file
file.close()
```

## Reading and writing Binary Files

To read and write binary files, we need to open the file in binary mode. We can do this by passing `b` as a second argument to the `open()` function.

```python {cmd="python3"}
image_in = open("assets/tiger.jpeg", "rb")
image_out = open("assets/image_copy.jpeg", "wb")

while True:
    img_data = image_in.read(1024)
    if not img_data:
        break
    image_out.write(img_data)

image_in.close()
image_out.close()
```

This example will open an image file named image.jpg in read-binary ('rb') mode and creates another file named image_copy.jpg in write-binary ('wb') mode. The loop reads data from the input file in chunks of 1024 bytes and writes it to the output file until there is no more data left. Finally, both files are closed.

## List of the files and directories

To list the files and directories in a directory, we use the `os` module's `listdir()` function. It takes one argument:

```python
os.listdir(path)
```

- the path of the directory whose files we want to list. By default, the path argument is set to `"."`, which represents the current working directory.

It returns a list of all the files and directories in the given directory. Here is an example:

```python {cmd="python3"}
import os

try:
    files = os.listdir("/sample_directory")
    print(files)
except FileNotFoundError as e:
    print("Directory not found", e)

# Output:
# ['file1.txt', 'file2.txt', 'file3.txt']
```

## Deleting

### Deleting a file

To delete a file in Python, we use the `os` module which provides a function called `remove()` that takes one argument - filename (with path if necessary) and deletes the file with that name. Here is an example:

```python {cmd="python3"}
import os

if os.path.exists("example.txt"):
    os.remove("example.txt")
    print("The file was deleted successfully.")
else:
    print("The file does not exist.")
```

It is important to be careful when deleting files because once they are deleted, they cannot be recovered easily. Therefore, it is recommended to double-check whether the file should be deleted before actually deleting it.

### Deleting an empty directory

To delete an empty directory, we use the `os` module's `rmdir()` function. It takes one argument:

```python
os.rmdir(path)
```

- the path of the directory we want to delete.

Here is an example:

```python {cmd, .line-numbers}
import os

if os.path.exists("sample_empty_directory"):
    os.rmdir("sample_empty_directory")
    print("The directory was deleted successfully.")
else:
    print("The directory does not exist.")
```

### Deleting a non-empty directory

To delete a non-empty directory, we use the `shutil` module's `rmtree()` function. It takes one argument:

```python
shutil.rmtree(path)
```

- the path of the directory we want to delete.

Here is an example:

```python {cmd, .line-numbers}
import os
import shutil

if os.path.exists("sample_non_empty_directory"):
    shutil.rmtree("sample_non_empty_directory")
    print("The directory was deleted successfully.")
else:
    print("The directory does not exist.")
```

The `shutil` module is a high-level file operation module. It provides functions that are useful for copying and archiving files and directories.
The `shutil.rmtree()` function deletes the directory and all its contents including subdirectories and files without raising an exception.

Also, there is a `os.removedirs()` function that removes empty directories recursively. It takes one argument:

```python
os.removedirs(path)
```

```python {cmd, .line-numbers}
import os

if os.path.exists("sample_empty_directories"):
    os.removedirs("sample_empty_directories")
    print("The directories were deleted successfully.")
else:
    print("The directories do not exist.")
```

!!! note `os.removedirs()` VS `shutil.rmtree()`
    `os.removedirs()` works like `os.rmdir()` but it removes all the empty directories recursively. It starts from the innermost (leaf) directory and works its way up to the parent directory. If the directory is not empty, it raises an exception, which gets ignored because it means that the directory is not empty. For example, if we have a directory structure like `parent/c1/c2/c3`, `os.removedirs()` will first try to remove `c3`, then `c2`, then `c1`, and finally `parent`. If `c2` is not empty, and having some other files or directories, it will raise an exception, which gets ignored. This is because `os.removedirs()` is designed to remove empty directories recursively. On the other hand, `shutil.rmtree()` will remove all the files and directories recursively no matter if they are empty or not.

## Copying

Copying files or directories in Python can be done using the built-in shutil module.

### Copying a file

To copy a file, you can use the `shutil.copy()` method. It takes two arguments:

```python
shutil.copy(src_file, dest_file)
```

If the destination file already exists, it will be overwritten by the file being copied. The `dest_file` argument can be a directory or a file name. If it is a directory, the file will be copied into that directory using the original file name. If it is a file name, it will be used as the new name of the copied file.
Note that `shutil.copy()` only copies the file itself, not any other metadata or special permissions associated with the file. If you need to preserve this information, you may want to consider using a third-party library like `rsync`.

Here's an example:

```python
import shutil

# Define the paths of the original file and the new destination
original_path = '/path/to/original/file.txt'
new_path = '/path/to/new/directory/file2.txt' 
new_path2 ='/path/to/new/directory'

# Use the shutil.copy() function to copy the file
shutil.copy(original_path, new_path)
```

Also, if the destination directory does not exist, shutil.copy() will raise a FileNotFoundError. In this case, you should create the destination directory first using `os.makedirs()`. Here's an example:

```python
import os
import shutil

# Define the paths of the original file and the new destination
src_file = '/path/to/original/file.txt'
dest_dir = '/path/to/new/directory'

# Create the destination directory if it doesn't exist
if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)


# Path of the destination file (the new file). The basename of the original file is used
# to create the new file name in the destination directory (the new file name is the same
# as the original file name)
dest_file = os.path.join(dest_dir, os.path.basename(src_file))

# Copy the file
shutil.copy(src_file, dest_file)
```

### Copying files Best Practices

When using the `shutil.copy()` function in Python, it is important to follow some best practices to ensure that the function behaves as expected and that your code is maintainable. Here are some best practices to follow:

- **Copying a file to the same directory**: If you copy a file to the same directory, the original file will be overwritten by the copied file. Therefore, it is recommended to copy the file to a different directory.
- **Check if the destination directory exists:** Before copying a file, you should ensure that the destination directory where the file will be copied to exists. If the directory does not exist, you can create it using `os.makedirs()`.
- **Consider the implications of overwriting files**: If the destination file already exists, `shutil.copy()` will overwrite it. Make sure that this is the desired behavior for your application, and consider using `os.path.exists()` to check if the file exists before copying it.
- **Handle errors:** The `shutil.copy()` function can raise errors if the source or destination files do not exist or if there are permission issues. It is important to handle these errors gracefully in your code using `try-except` blocks.
- **Use absolute file paths**: Always use absolute paths for the source and destination files to ensure that the function works correctly regardless of the current working directory.
- **Consider using shutil.copy2()**: The `shutil.copy2()` function is similar to `shutil.copy()`, but it also copies the metadata of the file, including file permissions and timestamps. This can be useful in some cases where preserving this information is important.

```python
import os
import shutil

def copy_file(source_file, dest_dir):
    # Ensure that the source file exists
    if not os.path.exists(source_file):
        raise FileNotFoundError(f"Source file '{source_file}' does not exist")

    # Ensure that the destination directory exists
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)

    # Build the destination path
    dest_file = os.path.join(dest_dir, os.path.basename(source_file))

    # Check if the destination file already exists
    if os.path.exists(dest_file):
        raise FileExistsError(f"Destination file '{dest_file}' already exists")

    # Copy the file and its metadata
    try:
        shutil.copy2(source_file, dest_file)
    except Exception as e:
        raise RuntimeError(f"Error copying '{source_file}' to '{dest_file}': {str(e)}")

    # Return the path to the destination file
    return dest_file
```

### Copying a directory

To copy an entire directory tree (including files and subdirectories), you can use the shutil.copytree() method. Here's an example:

The syntax of the `shutil.copytree()` method is as follows:

```python
shutil.copytree(src, dst, symlinks=False, ignore=None, copy_function=copy2, ignore_dangling_symlinks=False)
```

The parameters of this method are as follows:

- **src**: The source directory which needs to be copied.
- **dst**: The destination directory where the source directory needs to be copied.
- **symlinks**: A Boolean value. If it is True, then the symbolic links in the source directory will be copied as links. If it is False, then the symbolic links in the source directory will be copied as files (i.e., their contents will be copied).
- **ignore**: A callable function which can be used to ignore certain files or directories while copying. This function takes two parameters - the directory being copied and a list of its contents. The function should return a list of the items which need to be ignored.
- **copy_function**: The function used to copy the files. By default, it is set to `copy2`, which copies file metadata as well as the contents of the files.
- **ignore_dangling_symlinks**: A `Boolean` value. If it is `True`, then any symbolic links in the source directory that are dangling will be ignored. If it is `False`, then an error will be raised if any dangling symbolic links are encountered. Dangling symbolic links are symbolic links that point to a file or directory that does not exist.

```python
import shutil

# copying the contents of one directory into another directory
src = '/Users/Me/Desktop/SomeFolder'
dst = '/Users/Me/Desktop/NewFolder'
shutil.copytree(src, dst)
```

If `NewFolder` already exists, then an error will be raised.

Now, let's see another example where we ignore certain files while copying:

```python
import shutil

# copying the contents of one directory into another directory, ignoring certain files (e.g., .txt files)
def ignore_files(dir, files):
    return [f for f in files if f.endswith('.txt')]

src = '/Users/Me/Desktop/SomeFolder'
dst = '/Users/Me/Desktop/NewFolder'
shutil.copytree(src, dst, ignore=ignore_files)
```

In this example, we have defined a custom `ignore_files()` function which ignores all files with the extension `.txt` while copying. This function is passed as the ignore parameter in `shutil.copytree()`. Therefore, all the files with the extension `.txt` will be ignored while copying.

### Copying Directories Best Practices

Here are some best practices to keep in mind when using the `shutil.copytree()` function in Python:

- **Check if the destination directory exists:**
Always check if the destination directory already exists before trying to copy to it. You could use the os.path.exists() function to check if the destination directory exists before copying.
- **Use a `try-except` block:**
  Use the `try-except` block to handle any exceptions that may occur during copying. For example, if the source directory doesn't exist, or if the user doesn't have sufficient privileges to access the source or destination directories.
- **Ensure that the destination directory doesn't already exist:** If the destination directory already exists, shutil.copytree() will raise an error. To avoid this, you can check if the directory exists before trying to copy the source directory.
- **Use the ignore argument to exclude files or directories:** By default, shutil.copytree() will copy all files and directories in the source directory. However, you can use the ignore argument to exclude certain files or directories from being copied.
- **Use absolute path instead of relative path:** You should use absolute path instead of relative path when specifying source and destination directories. This avoids confusion and potential errors if the current working directory changes during the execution of the program.
- **Use logging to log errors or messages**: Using the Python logging module, you can log errors or messages during the execution of the program. This can help you debug issues when running the program in production.

## Moving a file or directory

 In Python, moving a file or a directory involves copying the contents of the file or directory to their new location and deleting the original file or directory from its original location. This can be achieved using the shutil module, which provides a high-level interface for copying and moving files and directories.

Here's an example code snippet that shows how to move a file from one directory to another:

```python
import shutil

# Define the paths of the original file and the new destination
original_path = '/path/to/original/file.txt'
new_path = '/path/to/new/directory/file.txt'

# Use the shutil.move() function to move the file
shutil.move(original_path, new_path)
```

Similarly, the `shutil.move()` function can also be used to move entire directories:

```python
import shutil

# Define the paths of the original directory and the new destination
original_path = '/path/to/original/directory'
new_path = '/path/to/new/directory'

# Use the shutil.move() function to move the directory
shutil.move(original_path, new_path)
```

Note that if the destination directory already contains a file or directory with the same name as the file or directory being moved, it will be overwritten without warning. To avoid this, you can either rename the file or directory before moving it, or check if the destination already exists using the os.path.exists() function.

```python
import os
import shutil

# Define the paths of the original file and the new destination
original_path = '/path/to/original/file.txt'
new_path = '/path/to/new/directory/file.txt'

# Check if the destination already exists
if os.path.exists(new_path):
    # If it does, rename the original file dynamically by extracting the file name and extension from the original path and appending a number to it
    file_name, file_extension = os.path.splitext(original_path)
    new_path = file_name + '_1' + file_extension
    
    # Then move the file
    shutil.move(original_path, new_path)
else:
    # If it doesn't, move the file
    shutil.move(original_path, new_path)
```

## Renaming a file or directory

In Python, renaming is the process of giving a new name to a file or directory using the `os` module's `rename()` function.

The `rename()` function takes two arguments:

```python
os.rename(current_file_name, new_file_name)
```

- the current file name (or path)
- the new file name (or path).

Here is an example:

```python {cmd, .line-numbers}
import os

if os.path.exists("example.txt"):
    os.rename("example.txt", "new_example.txt")
    print("The file was renamed successfully.")
else:
    print("The file does not exist.")
```

One problem with the code above is that it will overwrite the file if the new file name already exists. To avoid this, we can use the `os.path.exists()` function to check if the new file name already exists. If it does, we can rename the file by adding a number to the end of the new file name or just inform the user that the new file exist. Here is an example:

```python {cmd, .line-numbers}  
import os

if os.path.exists("new_example.txt"):
    print("The new file name already exists.")
elif os.path.exists("example.txt"):
    os.rename("example.txt", "new_example.txt")
    print("The file was renamed successfully.")
else:
    print("The file does not exist.")
```

## Exceptions

If the file cannot be found, opened or read, an exception is raised. For example, there are several reasons why a call to `file.read()` might fail and raise an exception. Here are a few examples:

- **File not found error**: If the file doesn't exist in the specified path, i.e., "assets/do-not-exist.md" in our case, then the program will fail with a FileNotFoundError.
- **Incorrect file permissions**: If the user running the program doesn't have permission to read from the file or the file is locked by another process, then the program could generate a PermissionError or IOError respectively.
- **Out of memory**: If the file is too large to fit into memory, then the program may raise a MemoryError exception.
- **Invalid file format**: If the file content is in an invalid format, then reading the file may raise a ValueError or TypeError exception. For instance, trying to open a binary file using text mode or vice versa.

### `try` and `except` blocks

We can handle this exception using the `try` and `except` blocks.

```python {cmd="python3"}
# define file variable
try:
    file = open("assets/does-not-exist.md")
    print(file.read())
except OSError:
    print("File not found")
```

The problem with the above code is that it opens the file, but does not close it. This can lead to resource leaks. To avoid this, we can use the `finally` block.

```python {cmd, .line-numbers}
file = None
try:
    file = open("assets/a.md")
    print(file.read())
except Exception as err:
    print("Exception: ", err)
    if file:
        file.close()
    

```

### `with` statement

We can also use the `with` statement as it automatically closes the file after the block of code inside the `with` statement is executed. In case of an exception, the `with` statement will automatically close the file and release any system resources used by it.

```python {cmd="python3"}
try:
    with open("assets/does-not-exist.md") as file:
        print(file.read())
except FileNotFoundError as err:
    print('File not found: ', err)
except Exception as err:
    print(err)
```
