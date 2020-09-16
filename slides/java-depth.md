---
marp: true
theme: default
backgroundColor: #ffffee
paginate: true
style: |
  h1, h2, h3, h4, h5, h6{
      border-bottom: 4px solid indianred;
  }
---

# Guide to Java Programming

Created by Jayant Malik

---

## Jai, Bharat!

The program prints `Jai, Bharat!` on the output screen.

```java
public class JaiBharat{
    public static void main(){
        System.out.println("Jai, Bharat!");
    }
}
```

---

## Program Compilation

You compile the java program using following command.

```sh
javac FileName.java
```

The java compiler will generate a `FileName.class` file.

The `Filename.class` file contains the `bytecode`, which is converted to machine code during execution of program by _Java Virtual Machine_.

---

## Class and File

- Java classnames should be same as filename for successful compilation of the program.

The following program works, because **filename is same as class name**:

```java
// filename:  Hello.java
public class Hello{
    public static void main(String[] args){}
}
```

The following program fails, because **filename is not same as class name** :

```java
// filename:  Intro.java
public class Hello{
    public static void main(String[] args){}
}
```

---

## Program Execution

You can execute the progam using `java` command.

```sh
java Filename
```

The above command executes the program using **JVM** (Java Virtual Machine) and displays the output to the screen.

---

## Compilation Error

You may encounter the following error

```sh
javac is not recognized as an internal or external command, operable program or batch file
```

The error will occure due to following reasons:

- Java Development Kit (JDK) is not installed.
- Java Executable binary folder path is not configured in your environment variables.

<br />
Check the following link to resolve the error.

> [https://stackoverflow.com/questions/7709041/javac-is-not-recognized-as-an-internal-or-external-command-operable-program-or](https://stackoverflow.com/questions/7709041/javac-is-not-recognized-as-an-internal-or-external-command-operable-program-or)

---

## Why main function does not return a value ?

Because, java uses `System.exit()` instead of return value from main function.

```java
public class JaiBharat{
    public static void main(String[] args){
        System.exit(0);
    }
}
```

**Every program in java is set to exit by status code 0 by default.**, which means it automatically calls `System.exit(0)` by default.

---

## Checking Exit Status

You can check, the exit status of your program by executing the following commands in your terminal, or command prompt.

For windows:

```sh
echo %errorlevel%
```

For linux:

```sh
echo $?
```

> The commands only provide the status of last program run in the terminal, to get the status code for your program, you need to run the program in terminal using `java` command.

---

## What does `System.out.println()` mean ?

- The `System` is a class inside `java.lang` package.
- The `out` is a static variable inside the `System` class.
- The `out` variables provides a reference or pointer to `PrintStream` class inside `java.io` package.
- The `println()` is a method inside `PrintStream` class.

---

### What does `System.out.println()` mean ?

```java
// Import the java.lang package to use System class
import java.lang.System;
import java.io.PrintStream;
public class JaiBharat{
    public static void main(){
        // Use of system class
        System.out.println("Jai, Bharat!");

        // Use of PrintStream
        PrintStream stdout = System.out;
        stdout.println("Jai, Bharat!");
    }
}
```

---

## Annotations

Annotations helps to provide additional information about the program.

- Annotations starts with `@` symbol
- Annotations do not change working of compiled program
- Annotations are not pure comments, as they can change the way a program is treated by the compiler.

Example:

```java
@Override
```

---

### Annotations: Example

```java
public class Parent{
    public void display(){
        System.out.println("Jai, Bharat!");
    }
}

public class Child extends Parent{
    @Override
    public void display{}{
        System.out.println("Jai, Hind!");
    }
}
```

The program will print `Jai Hind!` because, it is overridden by the child class.

> Here `@Override` annotation is used to tell the compiler that the method must be overridden.

---

## Football Team: Example

Let's model a football team with Object Oriented Programming.

We will have two classes :

- `Player` class will represent each player
- `Team` class will represent complete team

---

### Football Team: Player Class

```java
public class Player{
    private String name;
    private String type;
    private int level;
    private int rank;
    public Player(String name, String type, int level, int rank){
        this.name = name;
        this.type = type;
        this.level = level;
        this.rank = rank;
    }
}
```

Here:

- `private` means variable cannot be accessed outside the class.
- `public Player(...)` is the constructor of the class
- `this` is used to reference the members of current class.

---

### Football Team: Team Class

```java
public class Team{
    Player player;
    public Team(Player player){
        this.player = player;
    }
}
```

Here we are storing details related to single player, inside Team class.

We can use _arrays_ to store details of multiple players.

---

### Football Team: Getters

How do we access members of player class, e.g Getting player name etc. ?

We use getters for that. Getters are the methods inside class, that returns the class attributes.

```java
public class Player{
    //... public Player(...) and all the variables

    // Getter for name
    public String getName(){ return this.name; }

    // Getter for type
    public String getType(){ return this.type; }
}
```

This approach helps to sanitize or modify our data, before handling it to user.

---

### Football Team: Usage

Here is how you will use the classes in your code.

```java
public class Stadium{
    public static void main(String args[]){
        // Create a player
        Player p = new Player("Jayant", "light", 10, 1);

        // Create a team and add players.
        Team t = new Team(p);
    }
}
```

---

### Football Team: Compile

Now, compile the program using Stadium class, as:

```sh
javac Stadium.java
```

This will automatically reference the `Player` and `Team` classes in your code, if they are available in same package.

And execute it by:

```sh
java Stadium
```

---

# Type Conversions

We must have ability to change one datatype to another, such as changing `float` to `int` and vice versa.

---

## Numeric primitives

The basic datatypes available for storing numerical values are known as Numeric primitives.

```java
byte num1 = 30; // -127 to +127
short num2 = 2020;
int num3 = 987654;
long num4 = 9876543210;
float num5 = 33.33;
double num6 = 92.32;
```

There are two type of casting for numeric primitives:

- **Implicit Casting**
- **Explicit Casting**

---

### Numeric primitive: Implicit Casting

- **Implicit casting** happens when the source type has smaller range than target type.

```java
// Source type
byte num1 = 10; // -128 to +127

// Target type
short num2 = num1; // -32768 to +32767
```

Here `short` datatype has higher range than `byte` datatype, so implicit casting occurs.

---

### Numeric primitives: Explicit Casting

- **Explicit casting** has to be done, when the source type has heigher range than the target type.

```java
float num1 = 33.3f;
double num2 = 33.3d
int num3 = 22;

float num4 = (float) num3; // 22.0 : (int to float)
long num5 = (long) num4; // 22 : (float to long int)
int num6 = (int) num5; // 22: (long int to int)
short num7 = (short) num6; // 22 : (int to short int)
byte num8 = (byte) num7; // 22 : (short to byte)
```

> When rounding (float, double) to whole number primitives, the number is rounded down, so 3.6 becomes 3.

---

## Basic Numeric Promotion

Some, datatypes gets automatically changed to another type when performing operations on them.

```java
char char1 = 'a', char2 = 'b';
short short1 = 1, short2 = 2;
int int1 = 1, int2 = 2;
float float1 = 1.0f, float2 = 2.0f;

char1 = char1 + char2; // Error: 🔥 cannot convert from int to char 🔥
short1 = short1 + short2 // Error: 🔥 Cannot convert from int to short 🔥
int1 = char1 + char2; // char promoted to int
int1 = short1 + short2; // short promoted to int
int1 = char1 + short1; // both char and short promoted to int
float1 = short1 + float1; // short is promoted to float
int1 = int1 + int2; // int remains same
```

---

### Basic Numeric Promotion: Conclusion

During expression evaluation :

- Operands are promoted to another datatype, e.g (short to int)
- Operation is performed on promoted datatypes, e.g (`int + int = possible`)

---

### Basic Numeric Promotion : Reference

Here is the table for reference:

| Source | Target | Converted to | Description       | Possibility |
| ------ | ------ | ------------ | ----------------- | ----------- |
| char   | char   | char         | Remains unchanged | Possible    |
| char   | int    | int          | char to int       | Possible    |
| int    | float  | float        | int to float      | Possible    |
| short  | double | double       | short to double   | Possible    |

**Primitive with small range** is promoted to **Primitive with higher range**.

_Every_ conversion is possible, only when **You store the result as per `Converted to` column of the table.**

---

## Non numeric primitive casting

- The `boolean` type cannot be cast to/from any primitive type. `(int) true` is not possible

```java
int result = (int) true; // Not possible
```

- A `char` can be cast to/from any numeric type by using **code point mappings** specified by Unicode.

```java
// 97 is unicode code point mapping for letter 'a'
char a = 97;
```

---

### Non numeric primitive casting: Facts

- A `char` is represented in memory as _unsigned_ (only +ve) `16-bit` (2-bytes) integer values.

- So, casting `char` to `byte` will drop 8 bits, (_this is safe for ASCII characters, because_ **ASCII characters are of 1 byte.**), `whereas, Unicode characters are of 2 bytes`.

- The utility class methods of `Character` class use `int` (4-bytes) to _transfer to/from code point values_ (`casting`), but a `short` would also suffice for storing a unicode point.

---

### Non numeric primitive casting: Example

```java
int num1 = (int) true; // Compiler error: incompatible types

// TESTING FOR ASCII
char char1 = (char) 65; // A
byte byte1 = (byte) 'A'; // 65
short short1 = (short) 'A'; // 65
int int1 = (int) 'A'; // 65;

// TESTING FOR UNICODE
char char2 = (char) 8253;
byte byte2 = (byte) '‽'; // 61 (truncated code point into ascii range)
short short2 = (short) '‽'; // 8253
int int2 = (int) '‽'; // 8253
```

---

## Circular Behaviour

Circular Behaviour is used to adjust the overflowing values, during casting.

> Here, we will see how to cast value: 129 to byte datatype. `byte result = (byte) 129;`

Requirements:

- You should have minimum limit of target datatype
- You should have maximum limit of target datatype

> Here **target datatype** is **byte**, because we are casting _int_ to _byte_.

---

### Circular Behaviour: Algorithm

Given:

- Maximum Value for `byte` = 127
- Minimum Value for `byte` = -128
- Overflowing value = 129

Algorithm

- Subtract the maximum value from overflowing value : `129 - 127 => 2`
- Add the result of previous step to minimum value: `-128 + 2 => -126`
- Add -1 to the above result, because we have 0 in between of negative and positive values.: `-126 - 1 => -127`
- Repeat the above steps till the result of above step is in range of `target` type.

> We will have `-127` as result of the above cast: `byte result = (byte) 129;`

---

## Object Casting

As with premitives, object can be cast both _implicitly_ and _explicitly_

> Keep in mind: (Float, Double, Integer) are all instances of `Number` class, because they extends `Number class`

```java
abstract class Number{}

public class Float extends Number{}
public class Integer extends Number{}
public class Byte extends Number{}
public class Double extends Number{}
```

---

### Object Casting: Implicit (Child to Parent)

- **Implicit** casting happens, when the source type extends or implements the target type. (casting to a superclass or interface.)

```java
Float num1 = new Float(20.3f);
Double num2 = new Double(33.3d);

// Yes, a float is a number
Number num3 = num1; // Still instance of Float

// Yes, a double is a number
Number num4 = num2; // Still instance of Double
```

---

### Implicit Casting: Memory Representation

```txt
#####################################################################
#                        MEMORY REPRESENTATION                      #
#####################################################################

#####################################################################
#                                                                   #
#                                                                   #
#           #############                       #############       #
#           #           #                       #           #       #
#           #           #                       #           #       #
#           #           # <-------------------- #           #       #
#           #           #                       #           #       #
#           #           #                       #           #       #
#           #############                       #############       #
#           Number(Target)                      Float(Source)       #
#                                                                   #
#####################################################################

#####################################################################
#                     FLOAT IS CASTED TO NUMBER                     #
#####################################################################
```

---

### Object Casting: Explicit (Parent to Child)

- **Explicit** casting has to be done, when the source type is extended or implemented by the target type.

- This can produce runtime exception (ClassCastException), when the object being cast is not of the target type.

> Keep in mind: (Float, Double, Integer) are all instances of `Number` class, because they extends `Number class`

```java
abstract class Number{}

public class Float extends Number{}
public class Integer extends Number{}
public class Byte extends Number{}
public class Double extends Number{}
```

---

### Object Casting: Explicit Example

```java
Float num1 = new Float(20.3f);
Double num2 = new Double(33.33d);
Number num3 = num1; // Yes, Float is a number
Number num4 = num2; // Yes, Double is a number

// Yes, num1 is a Number of type Float
Float num3 = (Float) num1;

// Yes num2 is a number of type Double
Double num4 = (Double) num2;
```

---

### Explicit Casting: Memory Representation

```txt
#####################################################################
#                        MEMORY REPRESENTATION                      #
#####################################################################

#####################################################################
#                                                                   #
#                                                                   #
#           #############                       #############       #
#           #           #                       #           #       #
#           #           #                       #           #       #
#           #           # --------------------> #           #       #
#           #           #                       #           #       #
#           #           #                       #           #       #
#           #############                       #############       #
#           Number(Target)                       Float(Source)      #
#                                                                   #
#####################################################################

#####################################################################
#                  NUMBER IS CASTED BACK TO FLOAT                   #
#####################################################################
```

---

### Object Casting: Explicit Failures

```java
Number num1 = new Float(20.3f);
Number num2 = new Double(33.3d);

// No, It can only be casted
// back to float
Double num3 = (Double) num1; // Float to Double

// No, it can only be casted
// back to double
Float num4 = (Float) num2; // Double to Float
```

---

### Object Casting: Example

```java
public class Machines{
    public void start(){ System.out.println("Starting, machine"); }
}

public class Camera{
    public void start(){ System.out.println("Starting, Camera"); }
    public void snap(){ System.out.println("Capturing a photo"); }
}

Machine cam = new Camera();
cam.start(); // Sarting, Camera
cam.snap(); // Error: 🔥 Machine can't snap
```

---

### Object Casting: Memory Representation

```txt
#####################################################################
#                        MEMORY REPRESENTATION                      #
#####################################################################

#####################################################################
#                                                                   #
#                                                                   #
#           ################                    ################    #
#           #   #########  #                    #  ##########  #    #
#           #   # start #  # -----------------> #  #  start #  #    #
#           #   #########  #                    #  ##########  #    #
#           #              #                    #  #  snap  #  #    #
#           #              #                    #  ##########  #    #
#           ################                    ################    #
#                Machine                             Camera         #
#                                                                   #
#####################################################################
```

- A machine can call **start** on camera
- M machine doesn't know abot snap.

---

## Object Casting: instanceof

`instanceof` is a operator provided by java, to check, if an object is instance of some class.

```java
public class Soldier{
    public void salute(){ System.out.println("Jai, Bharat!"); }
}

public class JaiBharat{
    public static void main(String[] args){
        Soldier soldier = new Soldier();

        if(soldier instanceof Nation){
            System.out.println("soldier is instance of Nation class.");
        }else{
            System.out.println("soldier is not instance of Nation class.");
        }
    }
}
```

---

### Object Casting: Example (instanceof)

```java
import java.util.Calendar;
import java.util.Date;

public class JaiBharat{
    public static void main(String[] args){
        Object cal = Calendar.getInstance();
        long time = 0;

        if(cal instanceof Calendar){
            // Cast cal to Calendar and get current time
            time = ((Calendar)cal).getTimeInMillis();
        }

        if(cal instanceof Date){
            // This line will never be reached.
            time = ((Date)cal).getTime();
        }
        System.out.printf("Current Time: %d\n", time);
    }
}
```

---

# Getters and Setters

Setters and Getters and getters allow for an object to contain private variables, which can be changed with restrictions.

---

## Synchronized Methods

We will be using synchronized methods in Getters and Setters, So, here is a quick look at them.

```java
public class Counter{
    private int count = 0;
    public synchronized void increment(){ count++; }
    public synchronized void decrement(){ count--; }
}
```

- When one thread is executing a synchronized method for an object, all other threads that invoke synchronized methods for the same object block (suspend execution) until the first thread is done with the object.

> You can't execute increment twice at the same time, and You can't execute increment and decrement at the same time.

---

## Setters: Example

A setter is a function, that changes the private variables, inside the object.

```java
public class Hindustan{
    private double donation = 0;

    // Donation setter
    public void setDonation(double amount){
        // Prevents invalid entries
        if(amount > 0 && amount != null){
            this.donation = amount;
        }
    }
}
```

---

### Getters: Example

Getter is a function, that provides information about the private variables out of object.

```java
public class Hindustan{
    private double donation = 0;

    // Donation Getter
    public double getDonation(){
        return this.donation;
    }
}
```

---

### Getters and Setters: Complete Example

```java
public class BankAccount{
    private String account_number = "";
    private double balance = 0;

    public long getAccountNumber(){
        if(account_number.length() != 12){ return "Invalid Account Number"; }

        return this.account_number;
    }
    public double getBalance(){ return this.balance; }

    public void deduct(double amount){
        if(amount > 0 && amount != null){ this.balance -= amount; }
    }

    public void deposit(double amount){
        if(amount > 0 && amount != null){ this.balance += amount; }
    }

    public void setAccountNumber(String number){
        // Validate your Number and set it
        if(number.length == 12 && number != null){ this.account_number = number; }
    }
}
```

---

## Why Getters and Setters ?

```java
public class Counter{
    private int count = 0;
    public void setCount(int count){ this.count = count; }
    public int getCount(){ return this.count; }
}
```

Here is what this example dictates:

> I have a method that will give you `int` value, and another method that will set that value to another `int`.

In future, if you ever need to make this `int` synchronous, you have ability to do that.

```java
public synchronized void setCount(int count){ this.count = count; }
public synchronized int getCount(){ return this.count; }
```

---

### Why Getters and Setters ?

```java
public class Counter{ public int count = 0; }
```

Here is what this example dictates:

> I have an `int` that you can set and get as you please.

In future, If you ever need to make this `int` synchronous, you can't do that.

```java
// I can't be changed to synchronous any way.
public int count = 0;
```

The example, would case issues, with your application, in future. If you are developing a framework, or a backend API, this might make your complete software vulnerable.

---

### Are public variables a good thing ?

The public variables should be choosen on the following terms:

- The variable should have no conceivable reason to ever change in its implementation.This is something, that extremely easy to screw up (and, even if you do get it right, requirements can change), which is why getters and setters are most common approach.

- If you are ever in doubt, always use getters and setters.

---

## Adding Getters and Setters

```java
public class Person{
    private String name;
    private boolean married;

    public String getName(){ return this.name; }
    public void setName(String name) { this.name = name; }

    public boolean isMarried(){ return this.married; }
    public boolean setMarried(boolean married){ this.married = married; }
}
```

These private variables, cannot be accessed directly from outside the class, hence they are protected from unauthorized access.

> But if you want to view or modify them, you can use getters and setters.

---

## Adding Getters and Setters: Naming Conventions

For, this example the name of variable is: `variableName`

- All non, boolean variables

```java
getVariableName(); // Getter, variable name starts with uppercase
setVariableName(...); // Setter, variable name starts with uppercase
```

- boolean variables

```java
isVariableName(); // Getter, variable name starts with uppercase
setVariableName(...); // Setter, variable name starts with uppercase
```

---

# Reference Datatypes

The concept is about pointers, but in an object oriented way.

---

## Dereference

Dereferencing _follows_ the memory address stored in a reference, to a place in memory where actual object resides, When an object is found, the requested method is called (`toString` in this case).

- Dot `.` operator is used for dereferencing

```java
Object obj = new Object();
String text = obj.toString(); // 'obj' is dereferenced.
```

- When a reference has the value `null`, dereferencing results in a `NullPointerException`

```java
Object obj = null;
obj.toString(); // Throws, a NullPointerException on execution
```

> `NullPointerException` class is available in `java.lang` package.

---

## Instantiating a reference type

```java
Object obj = new Object();
```

Where:

- `Object` is a reference type.
- `obj` is the variable in which to store the new reference
- `Object()` is the call to constructor of `Object`.

What happens:

- Space in memory is allocated for the object.
- The constructor `Object()` is called to initialize that memory space.
- The memory reference is stored in `obj` so, that it references the newly created object.

---

### Instiating a reference type

Primitives are different from Objects.

```java
int i = 10;
```

> Here the actual value `10` is stored in variable i.

Objects are different from primitives:

```java
Object obj = new Object();
```

> Here, the reference to memory is stored in variable `obj`

---

# Java Compiler - javac

Every program is compiled to bytecode, using java compiler. We have been using the `javac` command for it.

---

## Getting Started with `javac` command

Here is a basic `JaiBharat.java` program

```java
public class JaiBharat{
    public static void main(String[] args){
        System.out.println("Jai, Bharat!");
    }
}
```

We can compile the above file using this command:

```sh
javac JaiBharat.java
```

This produces a file `JaiBharat.class`, which can be executed by:

```sh
java JaiBharat
```

---

### Getting Started with `javac` command: Rules

- The source filename `JaiBharat` must match the class name in the source file. If they don't match you will get a compilation error.
- The bytecode filename `JaiBharat.class`, corrosponds to the classname. If you were to rename `HelloWorld.class` you will get an error if you try to run it.
- When running the java application, you supply the classname not the bytecode filename.

---

### Example with packages

The application in production, uses package as namespace to prevent collision of two classes with same name.

If we wanted to declare a class `Bharat` in a package called `com.countries`, Here is how we do it.

```java
package com.countries;

class Bharat{
    public static void main(String[] args){
        System.out.println("Jai, Bharat!");
    }
}
```

> Note The source code file needs to be stored in a directory whose structure corrosponds to the package name.

Make sure to store the file in `com/countries/Bharat.java` location.

---

### Example with packages

Make sure to store the file in `com/countries/Bharat.java` location.

```txt
👉 Project Directory/
    👉 com/
        👉 countries/
            👉 Bharat.java
```

We can compile the above file using this command:

```sh
javac com/countries/Bharat.java
```

The compiled file will be stored in `com/countries/Bharat.class` location.

You can execute the program using:

```sh
java com.countries.Bharat
```

---

### Example with packages: Facts

- The directory structure must match the package name structure
- When you run the class, the full class name must be supplied, ie. `com.countries.Bharat`, not the "Bharat".
- The compiled `.class` file is placed in same directory as the `.java` file.

---

### Compiling Multiple Files

You can provide multiple files paths to `javac` command as follows:

```sh
javac Bharat.java France.java com/utils/Tanks.java
```

Alternatively, using the command line shell wildcard functionality.

```sh
# All Files with extension .java in current directory
javac *.java

# All files in a package
javac com/countries/*.java

# All files recursively starting from current directory.
javac */**/*.java # Only works in Zsh or with globstar enabled in shell.
```

---

### Javac Options:

Here are commonly used `javac` options

- `-d` option sets the destination directory for writing the `.class` files.
- The `-sourcepath` option sets a source code search path.
- The `-cp` or `-classpath` option sets the search path for finding external or previously compiled classes.
- The `-version` option prints the compiler version information.

---

## Compiling for a different version of Java

- Java program compiled with older version of java toolchain will work on newer version of Java without recompilation.
- A java program that was written in an older version of java will compile successfully with a new java compiler.

---

### Compiling Old Java with newer compiler

- If you need to recompile older Java code, on a newer Java platform to run on newer platform

- You generally don't need to give any special compilation flags.

- If few cases, (e.g If you had used `enum` as an identifier) you could use `-source` option to disable the new syntax.

```java
public class OldSyntax{
    private static int enum; // invalid in Java 5 or later.
}
```

Here is how you compile the above code:

```sh
javac -source 1.4 OldSyntax.java
```

> You will get a warning while compilation, but a `.class` file will be generated.

---

### Compiling for older execution platform: Approach 1

The simplest approach will be to install older version of jdk and compile your source code with tools provided in it.

---

### Compiling for older execution platform: Approach 2

You can also compile with newer java compiler, but this is complicated. First of all there are important conditions that must be satisfied:

- The source code must only use the Java language constructs(features, syntax etc.) that were available in the version you are targeting.

- The code must not depend on standard Java classes, fields, methods, so on, that were not available in older platform.

- Third party libraries, must also be compiled for older version, and must be available at compile time and runtime.

If you have met the condition, here is how you do it:

```sh
javac -target 1.4 ClassName.java
```

---

### Compilation Danger: Approach 2

```sh
javac -target 1.4 ClassName.java
```

- will compile the above class to produce bytecodes that are compatible with Java 1.4 or later JVM.

- In fact, the `-source` option implies a compatible `-target` , so `javac -source 1.4 ...` would have the same effect.

- The relationship between `-source` and `-target` is described in the Oracle documentation.

```sh
javac -target 1.4 --bootclasspath path/to/java1.4/rt.jar SomeClass.java
```

If the class has (accidental) dependencies on newer libraries, the above command will give you compilation errors.

---

# Documenting Java Code

- Documentation for Java Code is often generated using `javadoc`.

- Javadoc was created by Sun Microsytems for the purpose of generating API documentation in HTML format, from java source code

- Using HTML format gives the concenience of hyperlinking related documents together.

---

## Building Java Docs from Command line

Many IDE provide support for generating HTML from javadocs automatically. some build tools like _Maven_ and _Gradle_ have plugins that can handle the HTMl creation.

However, these tools are not required for HTML generation, The above can be done using command line.

```sh
javadoc Filename.java
```

A more practical use of command line tool, which will

- Recursively read all java files in `[source-directory]`
- Create documentation for `[package.name]` and all sub packages
- Place the documentation in `[docs-directory]`.

```sh
javadoc -d [docs-directory] -subpackages -sourcepath [source-directory] [package.name]
```

---

## Class Documentation
