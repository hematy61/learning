# Basic Commands

## cd (Change Directory)

Change the current working directory to another directory.

```bash
cd [directory]
```

- `cd` - Change to home directory
- `cd ~` - Change to home directory
- `cd ..` - Change to parent directory
- `cd -` - Change to previous directory
- `cd /` - Change to the root directory
- `cd /path/to/directory` - Change to a specified directory
- `cd ~/path/to/directory` - Change to a specified directory relative to the home directory

## ls (List)

List the contents of a directory.

```bash
ls [options] [directory]
```

- `ls` - List the contents of the current directory
- `ls -a` - List all files, including hidden files
- `ls -l` - List all files in long format
- `ls -lh` - List all files in long format with readable file size
- `ls -R` - List all files recursively
- `ls -t` - List all files sorted by time
- `ls -S` - List all files sorted by size
- `ls -r` - List all files in reverse order
- `ls -1` - List all files in a single column
- `ls -m` - List all files in a comma-separated list
- `ls -p` - List all files with a slash appended to directories
- `ls -d` - List only directories
- `ls -F` - List all files with a trailing character indicating file type
- `ls -i` - List all files with inode number
- `ls -s` - List all files with file size
- `ls -h` - List all files with readable file size
- `ls -c` - List all files by file timestamp

type `man ls` for more options.

## pwd (Print Working Directory)

Print the current working directory.

```bash
pwd
# /home/user
```

## mkdir (Make Directory)

The `mkdir -m` command is a command-line utility used to create directories (also known as folders)

```bash
mkdir [options] [directory]
```

Here's a breakdown of the command and its options:

`mkdir`: This is the command itself, which stands for "make directory". It is used to create a new directory.

`-m`: This option is followed by a numeric mode or permission set that specifies the permissions for the newly created directory. The mode consists of three digits that represent the permissions for the owner, group, and others, respectively.

The permission digits are derived from the binary representation of the `read`, `write`, and `execute` permissions, as follows:

- **1** (execute permission)
- **2** (write permission)
- **4** (read permission)

By summing these digits, you can set the desired permission level for each category. For example:

**7**: Full permissions (`read`, `write`, and `execute`)
**6**: `Read` and `write` permissions
**5**: `Read` and `execute` permissions
**4**: `Read` permission only
**0**: No permissions

To set permissions using the mkdir -m command, you provide the desired permission mode after the -m option. Here's an example:

```bash
mkdir -m 755 directory_name
```

The three digits in `755` represent the permissions for different categories:

The first digit (`7`) specifies the permissions for the owner of the directory.
The second digit (`5`) specifies the permissions for the group.
The third digit (`5`) specifies the permissions for others (users who are not the owner and not in the group).

To understand the permissions for each category, we need to convert these digits into their binary representation. Each digit can be represented by a combination of three bits:

- **7** in binary is `111`, which means `read`, `write`, and `execute` permissions are granted to the owner.
- **5** in binary is `101`, which means `read` and `execute` permissions are granted to the group and others.
Therefore, using `mkdir -m 755 mydirectory`, the `mydirectory` will be created with the following permissions:

- The owner of the directory will have `read`, `write`, and `execute` permissions.
- The group and others will have `read` and `execute` permissions.

Example 1:

```bash
mkdir -m 700 mydirectory
```

In this example, the command creates a directory named `mydirectory` with permission mode `700`. The permissions are as follows:

- The owner has `read`, `write`, and `execute` permissions (7 in binary is 111).
- The group and others have no permissions (0 in binary is 000).

Result: Only the owner has full control over the directory, while the group and others have no access.

Example 2:

```bash
mkdir -m 644 mydirectory
```

This command creates a directory named `mydirectory` with permission mode `644`. The permissions are as follows:

- The owner has `read` and `write` permissions (6 in binary is 110).
- The group and others have `read-only` permissions (4 in binary is 100).

Result: The owner can read and modify the directory, while the group and others can only read its contents.

Example 3:

```bash
mkdir -m 777 mydirectory
```

This command creates a directory named mydirectory with permission mode 777. The permissions are as follows:

- The owner, group, and others all have read, write, and execute permissions (7 in binary is 111).
Result: The directory is accessible and modifiable by everyone.

!!! note
    The actual permissions granted may also depend on the system's `umask` value, which could restrict permissions by default.
