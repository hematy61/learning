# Installation

## The Software Development Kit Manager

The Software Development Kit Manager (SDKMAN) is a tool for managing parallel versions of multiple Software Development Kits on most Unix based systems. It provides a convenient Command Line Interface (CLI) and API for installing, switching, removing and listing Candidates. It is not only useful for Java, but also for other languages such as Groovy, Scala, Kotlin, etc.

### SDKMAN Installation

To install SDKMAN, open a new terminal and enter the following command:

```bash
curl -s "https://get.sdkman.io" | bash
```

After the installation is complete, you will need to restart the terminal, or open a new one, or run the following command to start using SDKMAN:

```bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

### SDKMAN Usage

#### Listing Candidates

To list all available candidates, enter the following command:

```bash
sdk list
```

This will list all available candidates, including Java, Groovy, Scala, Kotlin, and many more.

#### Candidate Versions

To list all available versions of a candidate, enter the following command:

```bash
sdk list <candidate>
```

For example, to list all available versions of Java, enter the following command:

```bash
sdk list java
```

you will see a list of all available versions of Java, provided by different vendors, such as Oracle, AdoptOpenJDK, Amazon, etc.

| vendor     | version         | dist   | status   | identifier         |
| ---------- | --------------- | ------ | -------- | ------------------ |
| Corretto   | 21.0.1          | amzn   |          | 21.0.1-amzn        |
| Corretto   | 17.0.9          | amzn   |          | 17.0.9-amzn        |
| Corretto   | 11.0.21         | amzn   |          | 11.0.21-amzn       |
| Corretto   | 8.0.392         | amzn   |          | 8.0.392-amzn       |
| Gluon      | 22.1.0.1.r17    | gln    |          | 22.1.0.1.r17-gln   |
| Gluon      | 22.1.0.1.r11    | gln    |          | 22.1.0.1.r11-gln   |

#### Installing a Candidate

To install a candidate, enter the following command:

```bash
sdk install <candidate> <identifier | version>
```

For example, to install Java 8.0.392-amzn, enter the following command:

```bash
sdk install java 8.0.392-amzn
```

#### Default Candidate Version

To set a default version of a candidate, enter the following command:

```bash
sdk default <candidate> <identifier | version>
```

For example, to set Java 8.0.392-amzn as the default version, enter the following command:

```bash
sdk default java 8.0.392-amzn
```

#### Switching Candidate Versions

To switch between different versions of a candidate, enter the following command:

```bash
sdk use <candidate> <identifier | version>
```

For example, to switch to Java 8.0.392-amzn, enter the following command:

```bash
sdk use java 8.0.392-amzn
```

!!!  
    Note that this only switches the version of the candidate for the current terminal session. To make the change permanent, use the `sdk default` command.

#### Current Candidate Version in Use

To see the current version of a candidate in use, enter the following command:

```bash
sdk current <candidate>
```

For example, to see the current version of Java in use, enter the following command:

```bash
sdk current java
```

#### Uninstalling a Candidate

To uninstall a candidate, enter the following command:

```bash
sdk uninstall <candidate> <identifier | version>
```

For example, to uninstall Java 8.0.392-amzn, enter the following command:

```bash
sdk uninstall java 8.0.392-amzn
```

#### Project Specific SDK

If you want to use a specific version of a candidate for a specific project, you can create a `.sdkmanrc` file in the root directory of the project and specify the version of the candidate in that file. For example, to use Java 8.0.392-amzn for a project, create a `.sdkmanrc` file in the root directory of the project and add the following line to it:

```text
java=8.0.392-amzn
```

You can also run the following command in the root directory of the project to create the `.sdkmanrc` file:

```bash
cd <project-directory>
sdk env init
```

!!!
    Note that the `.sdkmanrc` file gets created in the root directory of the project, with the current version of the candidate in use. For example, if Java 8.0.392-amzn is the current version of Java in use, the `.sdkmanrc` file will contain the following line:

    ```text
    java=8.0.392-amzn
    ```
To automatically switch to the version of the candidate specified in the `.sdkmanrc` file when `cd`ing into the project directory, add the following line to the configuration file which is most likely located at `$HOME/.sdkman/etc/config`:

```text
sdkman_auto_env=true
```

When `cd`ing out of the project directory, the version of the candidate will be switched back to the default version.

After checking into the project directory, if the SDKs specified in the `.sdkmanrc` file are not installed, you need to run the following command to install them:

```bash
sdk env install
```
