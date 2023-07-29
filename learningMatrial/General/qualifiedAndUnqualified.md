# Qualified and Unqualified

In general, "unqualified" refers to the use of a name (such as a variable, function, or type name) without a prefix that specifies its context or scope.

For example in the context of C# namespaces, "unqualified" refers to the ability to use a type or member without specifying the full namespace path to that type or member.

When you use a `using` directive in C#, you're telling the compiler that you want to use a certain namespace in your code. This allows you to use the types (classes, structs, enums, etc.) that are members of that namespace without having to specify the full namespace each time.

Consider the `System.Console` class. Without a `using` directive, you would have to use the fully qualified name every time you want to use the `Console` class:

```csharp
System.Console.WriteLine("Hello, World!");
```

But if you include `using System;` at the top of your file, you can use the `Console` class without the `System.` prefix:

```csharp
using System;

// ...

Console.WriteLine("Hello, World!");
```

In this case, `Console.WriteLine("Hello, World!");` is an unqualified use of the `Console` class, because you're not specifying the full namespace path (`System.Console`). The `using System;` directive tells the compiler where to find the `Console` class.

Another example is a class with a method:

```csharp
public class MyClass
{
    public void MyMethod()
    {
        // ...
    }
}
```

If you have an instance of `MyClass`, you can call `MyMethod` on that instance:

```csharp
MyClass myObject = new MyClass();
myObject.MyMethod();
```

In this case, `MyMethod` is an unqualified name. It doesn't include any information about where `MyMethod` is defined.

But if you're inside another method in `MyClass`, you can call `MyMethod` with the `this` keyword:

```csharp
public class MyClass
{
    public void MyMethod()
    {
        // ...
    }

    public void AnotherMethod()
    {
        this.MyMethod();
    }
}
```

In this case, `this.MyMethod()` is a qualified name, because it includes the `this` keyword that specifies the context (the current instance of `MyClass`).
