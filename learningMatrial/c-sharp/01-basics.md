# Basics

## What is C#?

C# (pronounced "C Sharp") is a modern, object-oriented programming language developed by Microsoft in the early 2000s. It was designed by Anders Hejlsberg, the creator of Turbo Pascal and architect of Delphi.

C# is part of the .NET platform, and its syntax is similar to other C-style languages such as C and C++. It combines the power and flexibility of C++ with the simplicity of Visual Basic.

### Key Features of C\#

**Object-Oriented**
Everything in C# is associated with classes and objects, along with its attributes and methods. For example: in real life, a car is an object. The car has attributes, such as weight and color, and methods, such as drive and brake.

**Component-Oriented Programming (COP)**
It is a paradigm that emphasizes the separation of concerns in terms of behavior. It's a method used in software development where pre-made components, each with a specific purpose, are selected and combined to create a software system. C# and .NET are examples of technologies that support component-oriented programming. In .NET, components can be created as assemblies (DLL or EXE files) that expose their functionality through .NET interfaces. These components can then be reused across different .NET applications.

**Type-Safe**
The C# language is type-safe, meaning that it prevents type errors. This means you can't do operations that are not safe or that the compiler cannot verify as safe.

**Automatic Garbage Collection**
.NET's garbage collector manages the allocation and release of memory for your applications.

**Modern Programming Language Constructs**
C# supports modern programming language constructs, such as events, generics, and lambda expressions, which make C# a powerful and flexible language.

**Interoperability**
C# provides a lot of interoperability with different systems. It can call code written in other .NET languages and also native APIs of operating systems.

**Scalable and Updatable**
C# applications are scalable and updatable, which makes it a good choice for enterprise-scale applications.

### Applications of C\#

C# is used in a variety of applications, including:

- Desktop applications
- Game development (especially in Unity)
- Web services
- Enterprise software

It's also one of the primary languages for developing Windows apps and is increasingly being used for mobile development via Xamarin.

## .NET Architecture

.NET is a software framework developed by Microsoft. It provides a controlled programming environment where software can be developed, installed, and executed on Windows-based operating systems. Here's a brief overview of the .NET architecture:

- **Common Language Runtime (CLR):** The CLR is the execution environment for all .NET applications. It provides services such as memory management, exception handling, security, and more. When a .NET application runs, the CLR takes care of the execution of the code and provides different services to make the development process easier.

- **Intermediate Language (IL):** When you compile your .NET code, it is not directly converted to machine code, but instead it is converted to a platform-independent code known as Intermediate Language. This IL is then compiled to machine code at the point where the software is installed, or at run-time by a Just-In-Time (JIT) compiler.

- **Just-In-Time Compilation (JIT):** The JIT compiler in .NET takes the IL code and converts it into machine instructions that can be executed by the CPU. The JIT compilation happens at runtime, which means that the application is compiled just before it is executed.

- **Base Class Library (BCL):** The BCL in .NET is a huge set of class libraries that provide basic programming constructs and utility functions. This includes classes for file reading and writing, database interaction, XML manipulation, and many more. The BCL provides a standard set of APIs that are consistent across all .NET languages.

- **Assemblies:** In .NET, an assembly is a compiled code library used for deployment, versioning, and security. There are two types:
  - process assemblies (EXE)
  - library assemblies (DLL).

  An assembly contains one or more files (dlls, exes, html files etc.), and represents a group of resources, type definitions, and implementations of those types. An assembly may also contain references to other assemblies. These resources, types and references are described in a block of data called a manifest, which is part of the assembly.

- **Application Domains:** Application domains, often referred to as AppDomains, are used by .NET to isolate executed applications from each other. Multiple AppDomains can exist in a single operating system process, allowing for a high degree of isolation without the overhead of launching separate processes.

- **.NET Languages:** .NET supports multiple programming languages, including C#, Visual Basic .NET, F#, and more. All these languages can access the framework's class library and can be used to write .NET applications.

- **Garbage Collection:** .NET includes a garbage collector that automatically manages memory by freeing up memory that is no longer in use by the application. This eliminates common programming errors like memory leaks and invalid memory references.

- **.NET Core and .NET Standard:** .NET Core is a cross-platform version of .NET for building websites, services, and console apps. .NET Standard is a base set of APIs that are common to all .NET implementations. Each .NET implementation can also include additional APIs that are specific to the operating systems it runs on.

This architecture allows .NET to support a wide range of application types including web applications, desktop applications, cloud-based services, and more. It also supports a range of programming models, and provides a comprehensive set of tools and libraries to aid in software development.

## How C# code gets run

When you write a program in C#, it goes through several steps before it is executed:

**Compilation:** The C# compiler (csc.exe) compiles the C# code into Intermediate Language (IL) code. This is a CPU-independent set of instructions that can be efficiently converted to native code. The output is a file called an assembly, with a .dll or .exe extension, which contains the IL code and metadata (information about the types, methods, properties, etc. in the code).

**Execution:** When the program is executed, the CLR in the .NET Framework takes over. It first performs Just-In-Time (JIT) compilation to convert the IL code into native machine instructions for the specific machine and operating system.

**Runtime:** As the program runs, the CLR provides services such as automatic memory management, security boundaries, type checking, exception handling, and more.

This process allows C# and other .NET languages to obtain the benefits of both compiled languages (like C++) and interpreted languages (like Python). The initial compilation to IL allows the code to be thoroughly optimized and checked for errors, while the JIT compilation allows the code to take full advantage of the specific hardware and OS it's running on.

## Structure of a C\# Program

A C# program consists of one or more files. Each file can contain zero or more namespaces. A namespace contains types such as classes, structs, interfaces, enumerations, and delegates, or other namespaces.

Here is the skeleton of a C# program that contains all of these elements:

```csharp
// A skeleton of a C# program
using System;

// Your program starts here:
Console.WriteLine("Hello world!");

namespace YourNamespace
{
    class YourClass
    {
    }

    struct YourStruct
    {
    }

    interface IYourInterface
    {
    }

    delegate int YourDelegate();

    enum YourEnum
    {
    }

    namespace YourNestedNamespace
    {
        struct YourStruct
        {
        }
    }
}
```

In the above example, the program starts with a `using` directive, which is used to bring system-defined and user-defined namespaces into scope. The `Console.WriteLine("Hello world!");` statement is the entry point of the program.

The `namespace` keyword is used to define a namespace named `YourNamespace`. Inside this namespace, a class (`YourClass`), a struct (`YourStruct`), an interface (`IYourInterface`), a delegate (`YourDelegate`), and an enum (`YourEnum`) are defined.

There is also a nested namespace `YourNestedNamespace` inside `YourNamespace`, which contains another struct `YourStruct`.

This structure was introduced in C# 9. Prior to C# 9, the entry point was a static method named `Main`, as shown in the following example:

```csharp
// A skeleton of a C# program
using System;
namespace YourNamespace
{
    class YourClass
    {
    }

    struct YourStruct
    {
    }

    interface IYourInterface
    {
    }

    delegate int YourDelegate();

    enum YourEnum
    {
    }

    namespace YourNestedNamespace
    {
        struct YourStruct
        {
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            //Your program starts here...
            Console.WriteLine("Hello world!");
        }
    }
}
```

In this version, the `Main` method inside the `Program` class is the entry point of the program. The `Main` method is where the program starts execution.
