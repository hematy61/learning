# Java Introduction

## What is Java?

Java is a widely-used, object-oriented programming language that was first released by Sun Microsystems in 1995. It has since become one of the most popular programming languages in the world. Here are some key points about Java:

1. **Platform Independence**: One of Java's most notable features is its ability to write code once and run it anywhere. This is achieved through the use of the Java Virtual Machine (JVM), which interprets and runs Java bytecode on any platform that has a JVM implementation.

2. **Object-Oriented**: Java is inherently object-oriented, which means it represents concepts using "objects" that can contain both data (attributes) and methods (functions).

3. **Syntax**: Java's syntax is similar to that of C++, but it has a simpler object model and fewer low-level facilities.

4. **Rich Standard Library**: Java comes with a comprehensive standard library that handles everything from data structures to networking to graphical user interfaces.

5. **Security**: Java was designed with security in mind. Its platform has several built-in security features, including bytecode verification and runtime security checks.

6. **Performance**: While Java's performance was initially a concern due to its interpreted nature, advancements like Just-In-Time (JIT) compilers have significantly improved its execution speed.

7. **Multithreading**: Java has built-in support for multithreaded programming, allowing developers to build highly responsive and concurrent applications.

8. **Garbage Collection**: Java has an automatic garbage collection system that helps manage memory by reclaiming objects that are no longer in use.

9. **Widespread Use**: Java is used in various domains, from web applications to mobile apps (especially Android) to enterprise software and embedded systems.

10. **Community and Ecosystem**: Java has a vast and active community, which means a plethora of libraries, frameworks, and tools are available. Popular frameworks like Spring, Hibernate, and Jakarta EE have been developed for Java.

11. **Continuous Evolution**: Java continues to evolve with regular updates and new features being added to the language and platform. For instance, recent versions have introduced features like lambda expressions, the module system, and enhanced pattern matching.

In summary, Java is a versatile, object-oriented programming language with a focus on portability, security, and robustness. Its widespread adoption and continuous development have made it a staple in the software development industry.

## What is JDK?

The **JDK**, or **Java Development Kit**, is a software development environment used for developing Java applications and applets. It is an official Oracle product that bundles together a variety of tools and software required for Java development.

### Components of JDK

1. **Java Compiler (`javac`)**: This tool compiles Java source code (`.java` files) into bytecode (`.class` files) that can be executed by the Java Virtual Machine (JVM).

2. **Java Virtual Machine (JVM)**: The JVM is responsible for running Java bytecode. While the JVM is part of the JRE (Java Runtime Environment), the JDK includes the JRE along with development tools.

3. **Java Runtime Environment (JRE)**: Contains the JVM and the standard Java class libraries. It provides the minimum requirements for executing a Java application.

4. **Java Debugger (`jdb`)**: A command-line tool that allows developers to find and fix bugs in Java programs.

5. **JavaDoc (`javadoc`)**: This tool generates API documentation in HTML format from Java source code.

6. **Java Header File Generator (`javah`)**: Produces C header files from a Java class, useful for integrating Java with native code.

7. **Java Archive Tool (`jar`)**: Used to package Java classes and associated metadata into a single archive file, typically with a `.jar` extension.

8. **Other Utilities**: The JDK includes various other tools like `jlink`, `jshell`, `jstat`, and more, each serving specific purposes in Java development.

### Why Use JDK?

The JDK is essential for developers who want to:

- Develop Java applications or applets.
- Debug and profile Java code.
- Create Java documentation.
- Integrate Java with other languages using JNI (Java Native Interface).

## Java Editions

### 1. Java Standard Edition (Java SE)

Java SE provides the core functionalities of the Java language. It is the foundation upon which all other Java technologies are built.

- **Components**: Java SE consists of the Java Virtual Machine (JVM), Java Runtime Environment (JRE), and Java Development Kit (JDK).
- **Functionality**: Java SE provides essential components for Java applications. It supports Object-Oriented Programming (OOP) concepts, HTTP requests using the `java.net` package, database connectivity with JDBC, and user interfaces using Swing or AWT.
- **Use Case**: A typical Java SE application can implement business logic, make HTTP requests, connect to databases, and display user interfaces.

### 2. Java Enterprise Edition (Java EE / Jakarta EE)

Java EE is an extension of Java SE and provides additional APIs for building enterprise-scale applications.

- **Components**: Java EE includes many web-related APIs such as WebSocket, JavaServer Pages (JSP), JAX-RS, and more. It also offers features related to JSON processing, security, Java Message Service (JMS), JavaMail, and others.
- **Deployment**: Java EE applications are generally deployed to an application server.
- **Use Case**: In a Java EE application, developers can create servlets to process HTTP requests, create dynamic UI using JSP, produce and consume messages using JMS, send emails, authenticate users, and utilize dependency injection for maintainable code.

### 3. Java Micro Edition (Java ME)

Java ME is designed for applications targeting embedded and mobile devices, such as mobile phones, set-top boxes, sensors, and printers.

- **Components**: Java ME includes some functionalities from Java SE while introducing new APIs specific to mobile and embedded devices, like Bluetooth, location, and sensor APIs.
- **Constraints**: Java ME is designed for devices with resource constraints in terms of CPU or memory. Developers need to consider these limitations when developing for Java ME.
- **Use Case**: A typical Java ME application might read values from a temperature sensor and send them in an HTTP request along with its location.

**In Summary**:

- **Java SE**: Ideal for simple applications and serves as the best starting point for learning Java.
- **Java EE**: Suitable for creating more complex and robust applications, especially for the web and enterprise domains.
- **Java ME**: Best suited for targeting embedded and mobile devices with resource constraints.

## Java Versions

Java is continuously evolving with new features and improvements being added to the language and platform. Each version of Java is given a version number and a code name. For instance, Java 11 is also known as Java 11 LTS (Long Term Support) or Java 11 JRE (Java Runtime Environment). Here are some of the most notable Java versions:

### Java 8

Java 8 was released in March 2014 and is the most widely-used version of Java. It introduced several new features, including lambda expressions, the `Stream` API, and the `Optional` class.

### Java 11

Java 11, released in September 2018, is the first long-term support (LTS) release after Java 8. Oracle stopped supporting Java 8 in January 2019, making Java 11 a significant version for many developers. Here's an overview of the features and changes introduced in Java 11:

#### 1. **Developer Features**

##### 3.1. New String Methods

Java 11 introduced several new methods to the `String` class, including `isBlank`, `lines`, `strip`, `stripLeading`, `stripTrailing`, and `repeat`.

##### 3.2. New File Methods

Java 11 made it easier to read and write Strings from files using the new `readString` and `writeString` static methods from the `Files` class.

##### 3.3. Collection to an Array

The `java.util.Collection` interface now has a new default `toArray` method which takes an `IntFunction` argument, simplifying the creation of an array of the right type from a collection.

##### 3.4. The Not Predicate Method

A static `not` method was added to the `Predicate` interface, allowing for more natural reading of negated predicates.

##### 3.5. Local-Variable Syntax for Lambda

Java 11 added support for using the local variable syntax (`var` keyword) in lambda parameters.

##### 3.6. HTTP Client

The new HTTP client from the `java.net.http` package, introduced in Java 9, became a standard feature in Java 11. This new API improves overall performance and provides support for both HTTP/1.1 and HTTP/2.

##### 3.7. Nest Based Access Control

Java 11 introduced the concept of nestmates and the associated access rules within the JVM, allowing for better encapsulation of nested classes.

##### 3.8. Running Java Files

With Java 11, there's no need to compile Java source files with `javac` explicitly. You can directly run the file using the `java` command.

#### 2. **Performance Enhancements**

##### 4.1. Dynamic Class-File Constants

Java 11 extended the Java class-file format to support a new constant-pool form named `CONSTANT_Dynamic`.

##### 4.2. Improved Aarch64 Intrinsics

Java 11 optimized existing string and array intrinsics on ARM64 or AArch64 processors.

##### 4.3. A No-Op Garbage Collector

Java 11 introduced an experimental garbage collector called Epsilon, which allocates memory but doesn't collect any garbage.

##### 4.4. Flight Recorder

Java Flight Recorder (JFR) became open-source in Open JDK with Java 11.

#### 3. **Removed and Deprecated Modules**

##### 5.1. Java EE and CORBA

Java 11 removed several Java EE and CORBA modules.

##### 5.2. JMC and JavaFX

JDK Mission Control (JMC) and JavaFX were no longer included in the JDK starting from Java 11.

##### 5.3. Deprecated Modules

Java 11 deprecated several modules, including the Nashorn JavaScript engine and the Pack200 compression scheme for JAR files.

#### 4. **Miscellaneous Changes**

Java 11 introduced several other changes, including new ChaCha20 and ChaCha20-Poly1305 cipher implementations, support for cryptographic key agreement with Curve25519 and Curve448, upgraded Transport Layer Security (TLS) to version 1.3, introduced a low latency garbage collector called ZGC, and added support for Unicode 10.

### Java 17

Java 17 follows a six-month feature-release model, allowing for faster releases and feedback cycles. Java 17 is also an LTS (Long-Term Support) version, meaning it will receive extended support, making it more stable and secure over time. The LTS versions are designed to be more stable, with extended support periods. Java SE 11 and Java SE 17 are the recent LTS versions, with Java 21 expected to be the next LTS in September 2023.

### Long Term Support (LTS) Version

LTS versions of Java are major releases that offer extended support and maintenance updates. They are typically supported for several years and are recommended for enterprises or applications that require long-term stability. Non-LTS versions might receive updates for a shorter period.

### Which Version Should You Use?

- If you're developing applications that require long-term stability and support, it's recommended to use the latest LTS version.
- If you want to leverage the latest features and improvements and can manage frequent updates, you can opt for the most recent non-LTS version.
