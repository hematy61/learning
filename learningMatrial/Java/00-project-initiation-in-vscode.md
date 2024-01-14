# Initiating a Java Project in VSCode

Setting up a Java playground project in Visual Studio Code (VS Code) is a straightforward process. This setup allows you to quickly write, edit, and run Java code snippets. Here's a step-by-step guide:

## Prerequisites

**Java JDK**: Ensure you have a Java JDK installed. If not, check out the [installation guide](./00-installation.md) for instructions on how to install Java.

- You can check if Java is installed by running the following command in a terminal:

```bash
java -version
```

## Setting Up the Java Playground

1. **Install Java Extensions for VS Code**
   - Open VS Code.
   - Go to the Extensions view by clicking on the square icon on the sidebar or pressing `Ctrl+Shift+X`.
   - Search for the “Java Extension Pack” by Microsoft or "Java Development Kit" extension and install it. This pack includes essential Java development tools like Language Support for Java(TM) by Red Hat, Debugger for Java, Java Test Runner, Maven for Java, and more.

2. **Create a New Java Project**
   - Open the Command Palette by pressing `Ctrl+Shift+P`.
   - Type “Java: Create Java Project” and select it.
   - Choose “No build tools” for a simple playground project.
   - Select a folder to store your project and give it a name.

3. **Explore the Project Structure**
   - VS Code will create a basic project structure with a `src` directory.
   - Inside `src`, you can create Java files. For example, `Main.java`.

4. **Write Some Java Code**
   - Open the `Main.java` file.
   - Write a simple Java program, for example:

     ```java
     public class Main {
         public static void main(String[] args) {
             System.out.println("Hello, Java Playground!");
         }
     }
     ```

5. **Run Your Java Code**
   - Right-click inside your Java file and select “Run Java” (its icon is a triangle pointing to the right on the top right corner of the editor)
   - Alternatively, you can press `F5` to run the program.
