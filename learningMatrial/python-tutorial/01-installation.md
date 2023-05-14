# Python installation instructions on Mac OS

**Install Xcode**
To install homebrew, you need to install the `Xcode` command line tools.
First check if you have the `Xcode` command line tools installed by
running the following command:

```bash
xcode-select --version
```

if you see the following output, then you have the Xcode command line tools installed:

```bash
xcode-select version 2373.
```

if you don't have the `Xcode` command line tools installed, then you
need to install them by running the following command:

```bash
xcode-select --install
```

**Install homebrew**
Follow the instructions on the homebrew website to install homebrew on
your mac. You can find the instructions here: <https://brew.sh/>

**Add homebrew to path**
add homebrew to your path by first opening your `.zprofile` file in your
text editor of choice. For VS Code you can do this by typing the
following command in your terminal:

```bash
code ~/.zprofile
```

and then add the following line to the file(paste it at the end of the file):

```bash
eval $(/opt/homebrew/bin/brew shellenv)
```

now you need to run this command:

```bash
eval "$(/opt/homebrew/bin/brew shellenv)"
```

This command runs the brew shellenv command and sets the output as
environment variables in the current shell session using eval command in
Unix-like operating systems.

brew shellenv is a command provided by Homebrew package manager that
outputs the necessary environment variable for linking the binaries
installed by Homebrew. These environment variables include PATH,
MANPATH, INFOPATH, and other related variables.

By running this command, you are updating your shell's environmental
variable to ensure that it will use the correct version of certain tools
installed via Homebrew rather than just relying on the pre-installed
system versions.

To make sure that brew is installed correctly, run the following command:

```bash
brew --version
```

if you  below output, then you have successfully installed homebrew.

```bash
Homebrew X.X.X
```

**Install python**
Install python using the following command:

```bash
brew install python
```

To verify that python is installed correctly, run the following command:

```bash
python --version # for python2
# or
python3 --version # for python3
```

and you should see the following output:

```bash
Python 3.X.X
```

now you need to set the path to point to the installed python 3 by brew.
First we need the path to where brew installed python. To get the path,
run the following command:

```bash
brew info python
```

you should see these in the following output:

```bash
Python has been installed as
  /opt/homebrew/bin/python3

Unversioned symlinks `python`, `python-config`, `python3-config` etc. pointing to
`python3`, `python3-config` etc., respectively, have been installed into
  /opt/homebrew/opt/python/libexec/bin 
```

and this path `/opt/homebrew/opt/python/libexec/bin` is the path we need
to add to our path. To do this, open your `.zprofile` file in your text
editor of choice. For VS Code you can do this by typing the following
command in your terminal:

```bash
code ~/.zshrc
```

and then add it to path, if path is not already there, by adding the
following line to the file:

```bash
export PATH="/opt/homebrew/opt/python/libexec/bin:$PATH"
```

but if path is already there, and there is existing path, then you need
to extend the path by adding the following line to the file:

```bash
# existing path
export PATH="/usr/local/share/dotnet:$PATH"

# extended path
export PATH="/opt/homebrew/opt/python/libexec/bin:/usr/local/share/dotnet:$PATH"
```

**Restart Terminal**
You can close the terminal and open a new one or you can run the
following command to reload the `.zprofile` file:

```bash
source ~/.zprofile
```

In other words, `source ~/.zshrc` reloads the settings in the `.zshrc`
file, allowing you to apply changes immediately instead of having to
close and open the terminal.
