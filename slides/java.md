---
marp: true
theme: default
paginate: true
backgroundColor: #ffffee
style: |
  h1, h2, h3, h4, h5, h6 {
    border-bottom: 4px solid indianred;
  }
---

# Programming in Java

We will be about the core Java language concepts, with Jayant Malik.

---

## Hello, World

```java
public class Hello{
    public static void main(String args[]){
        System.out.println("Jai, Bharat!");
    }
}

```

---

## Rules

- Java is compile to bytecode
- Entrypoint for java program is a class with main function.
- Java is a object oriented programming language.
- Java is product of Oracle

---

## Variable Specific Rules

- Variables are case sensitive
- Variables should start with a letter.
- Variables could contain a number, letter and underscore.
- Variables name should not start with a number
- Special characters are not supported for variables.

---

## Variables Declaration

A list of supported variables is as follows:

| Name   | Full    | Description                                                          | Example                 |
| ------ | ------- | -------------------------------------------------------------------- | ----------------------- |
| int    | integer | Allows only complete numbers without decimal points                  | `int age = 10;`         |
| float  | float   | Allows numbers with decimal points but with precision upto 16 points | `float marks = 10.33f;` |
| double | double  | Allows numbers with decimal points with more precision than floats.  | `double marks = 10.33;` |

---

## Variables Declaration

A list of supported variables is as follows:

| Name   | Full          | Description                               | Example                         |
| ------ | ------------- | ----------------------------------------- | ------------------------------- |
| char   | Character     | Allows only single character to be stored | `char grade = 'a';`             |
| String | String        | Allows multiple characters to be stored.  | `String name = "Jayant Malik";` |
| long   | long integers | Allows integers with much heigher range.  | `long marks = 10.33;`           |

---

### Variables Declaration Example

```java

// Variable declared
int age = 10;

// A collection of letters
String name = "Jayant Malik"

// A single Character
char grade = 'a';

// Decimal point number upto 20 points precision
double pi = 22 / 7;

// Decimal point number upto 16 points precision
float number = 10.22f;

```

---

## Variable Ranges

| Variable | Minimum        | Maximum                | Approx              |
| -------- | -------------- | ---------------------- | ------------------- |
| integer  | 2,14,74,83,648 | 2,14,74,83,647         | 2 Million           |
| floats   | 1.4E-45        | 3.4028235E38           | It never overflowed |
| double   | 4.9E-324       | 1.7976931348623157E308 | It never overflowed |

You can check out maximum and minimum for different datatypes using `static` members attached to each datatype class.

---

## Datatypes Ranges: Example

```java
public class Hello{
    public static void main(String args[]){

        // Range of Integers
        System.out.println("Maximum Integer: " + Integer.MAX_VALUE);
        System.out.println("Minimum Integer: " + Integer.MIN_VALUE);

        // Range of Double
        System.out.println("Maximum Double: " + Double.MAX_VALUE);
        System.out.println("Minimum Double: " + Double.MIN_VALUE);

        // Range of Floats
        System.out.println("Maximum Float: " + Float.MAX_VALUE);
        System.out.println("Minimum Float: " + Float.MIN_VALUE);

        // Range of Character
        System.out.println("Maximum Character: " + Character.MAX_VALUE);
        System.out.println("Minimum Character: " + Character.MIN_VALUE);
    }
}


```

---

## Standard Input And Output

```java
import java.util.Scanner;

public class HelloWorld {
	public static void main(String[] args) {
		// Use the scanner to read input
		Scanner scanner = new Scanner(System.in);

		// Show message to user
		System.out.print("Enter a message: ");

		// Get user input
		String userInput = scanner.nextLine();

		// Show the message to user
		System.out.println(String.format("Your message: %s\n", userInput));
	}
}
```

---

### Standard Input Scanner Classes

| Return | Method       | Description                                                           |
| ------ | ------------ | --------------------------------------------------------------------- |
| int    | nextInt()    | It is used to scan the next token of the input as an integer.         |
| float  | nextFloat()  | It is used to scan the next token of the input as a float.            |
| double | nextDouble() | It is used to scan the next token of the input as a double.           |
| byte   | nextByte()   | It is used to scan the values from -127 to +128, which equals 1 byte. |

---

### Standard Input Scanner: Example

```java
import java.util.Scanner;
public class StandardInput{
    public static void main(String args[]){
        Scanner scanner = new Scanner(System.in);

        // Read the integer
        int first = scanner.nextInt();

        // Read the float
        float second = scanner.nextFloat();

        // Read the double
        double third = scanner.nextDouble();

        // Read the next byte(Only from -127 to +127)
        byte fourth = scanner.nextByte();
    }
}
```

---

### Standard Input Scanner: Classes

| Return     | Method           | Description                                                                  |
| ---------- | ---------------- | ---------------------------------------------------------------------------- |
| String     | nextLine()       | Advances this scanner past the current line.                                 |
| boolean    | nextBoolean()    | Reads only boolean values, (Only accepts "true" and "false" as string input) |
| long       | nextLong()       | It is used to scan the next token of the input as a long.                    |
| short      | nextShort()      | It is used to scan the next token of the input as a Short.                   |
| BigInteger | nextBigInteger() | It is used to scan the next token of the input as a BigInteger.              |
| BigDecimal | nextBigDecimal() | It is used to scan the next token of the input as a BigDecimal.              |

---

### Standard Input Scanner: Example

```java
import java.util.Scanner;
public class StandardInput{
    public static void main(String args[]){
        Scanner scanner = new Scanner(System.in);

        // Read the string
        String first = scanner.nextLine();

        // Read the boolean(only true or false as "string")
        float second = scanner.nextBoolean();

        // Read the short integer
        short third = scanner.nextShort();

        // Read the long integer
        long fourth = scanner.nextLong();
    }
}
```

---

## Array

```java
public class JaiBharat{

   public static void main(String[] args) {
      double[] points = {1.9, 2.9, 3.4, 3.5};
      double[] nums = new double[10];

      // Print all the array elements
      for (int i = 0; i < points.length; i++) {
         System.out.println(points[i])
      }
   }
}
```

---

## Arrays: Example

```java
public class JaiBharat{
    public static void main(String[] args){
      double[] nums = {10, 20, 30, 40, 50, 60, 70, 80};

      // Summing all elements
      double total = 0;
      for (int i = 0; i < nums.length; i++) {
         total += nums[i];
      }
      System.out.println("Total is " + total);
    }
}
```

---

## Arrays: Example

```java
public class JaiBharat{
    public static void main(String[] args){
      double[] nums = {10, 20, 30, 40, 50, 60, 70, 80};

      // Finding the largest element
      double max = nums[0];
      for (int i = 1; i < nums.length; i++) {
         if (nums[i] > max) max = nums[i];
      }
      System.out.println("Max is " + max);
    }
}
```

---

## Conditionals

Conditionals helps us to execute the code based on some condition, most common conditionals used in every language are: `if..else` and `switch...case`.

---

### Conditionals: Example

```java
public class Conditionals{
    public static void main(String args[]){
        int age = 10;

        if(age <= 5){
            System.out.println("It's too early for school.");
        }
        else if (age == 6){
            System.out.println("Go to kindergarten");
        }
        else if(age >= 7 && age <= 18){
            String message = String.format("Go to class: %d", age - 6);
            System.out.println(message)
        }
        else{
            System.out.println("Go to college.");
        }
    }
}
```

---

### Conditionals: Example

```java
public class Conditionals{
    public static void main(String args[]){
        int num = 10;

        switch(num){
            case 1: System.out.println("one"); break;
            case 2: System.out.println("two"); break;
            case 3: System.out.println("three"); break;
            default:
                System.out.println("It's something else.");
                break;
        }
    }
}
```

Switch statements are used, when you already have information for possible cases.

---

## Loops

Loops are used to perform repetitive tasks. Most common loops are: `for`, `while` and `do..while` loops.

---

### Loops Example: `Do...while`

```java
public class Loops{
    public static void main(String args[]){
        int count = 1;

        do{
            System.out.println("Jai, Bharat!");
            count++;
        }while(count !== 10);
    }
}
```

---

### Loops Example: `while`

```java
public class Loops{
    public static void main(){
        int count = 1;

        while(count != 10){
            System.out.println("Jai, Bharat!");

            // Increment the count
            count++;
        }
    }
}
```

---

### Loops Example: `while`

```java
public class Loops{
    public static void main(){
        int count = 1;

        while(count++ < 10){
            System.out.println("Jai, Bharat!");
        }
    }
}
```

---

### Loops Example: `for`

```java
public class Loops{
    public static void main(String args[]){
        for(int i=0; i< 10; i++){
            System.out.println("Jai, Bharat!");
        }
    }
}
```

---

## Strings

A bunch of characters arranged together, are just strings.

---

### String: Common Functions

All the methods are available with `String` class instances, provided by java.

```java
"Use it with me, i am instance of string".method_name();
```

---

| Method       | Returns | Description                                            |
| ------------ | ------- | ------------------------------------------------------ |
| isEmpty()    | Boolean | Returns true if length of string is 0                  |
| contains()   | Boolean | Returns true if character sequenceis available         |
| startsWith() | Boolean | Returns true if string starts with provided sequence   |
| endsWith()   | Boolean | Returns true if the string ends with provided sequence |
| indexOf()    | Integer | Returns index of provided character in string          |

> Sequence referes to a single character or group of characters provided as input.

---

### String: Examples

```java
public class Strings{
    public static void main(String args[]){
        String message = "Jai Bharat!"

        if(message.contains("Bharat")){
            System.out.println("Jai Hind!");
        }

        if(message.startsWith("Jai")){
            System.out.println("Look, It starts with Jai");
        }

        if(message.endsWith("Bharat!")){
            System.out.println("I am sure it ends with Bharat!");
        }

        if(message.indexOf('J') === 0){
            System.out.println("It's first letter is J");
        }
    }
}
```

---

### String: Common Functions

| Method                | Returns   | Description                                                          |
| --------------------- | --------- | -------------------------------------------------------------------- |
| charAt()              | Character | Returns character at provided index                                  |
| compareTo()           | Integer   | Returns 0 if the string are equal, comparing character by character. |
| compareToIgnoreCase() | Integer   | Returns 0 if the string are equal, ignoring the case                 |
| replace()             | String    | Returns a string with replaced character                             |

> Sequence referes to a single character or group of characters provided as input.

---

### String: Examples

```java
public class Strings{
    public static void main(String args[]){
        String message = "Jai Bharat!"

        if(message.isEmpty()){
            System.out.println("Please provide a message.");
        }

        if(message.charAt(0) == 'J'){
            System.out.println("It has letter J at index 0");
        }

        if(message.compareToIgnoreCase("jai bharat!") == 0){
            System.out.println("It's definitely Jai Bharat");
        }
    }
}
```

---

### String: Examples

```java
public class Strings{
    public static void main(String args[]){
        // Note the per letter comparison
        if("abc".compareTo("abc") == 0){
            System.out.println("Both are equal");
        }

        // Note the per letter comparison
        if("bac".compareTo("abc") < 0){
            System.out.println("first is greater")
        }

        // Note the per letter comparison
        if("abc".compareTo("bac") > 0){
            System.out.println("second is greater");
        }
    }
}
```

---

### String: Common Methods

| Method         | Returns | Description                                                         |
| -------------- | ------- | ------------------------------------------------------------------- |
| replaceAll()   | String  | Returns a string, replacing all occurances of provided character    |
| replaceFirst() | String  | Replaces a string with first match, and returns the replaced string |
| toLowerCase()  | String  | Returns a lowercase string                                          |
| toUpperCase()  | String  | Returns a uppercase string                                          |
| toString()     | String  | Converts a provided object to string                                |

> Sequence referes to a single character or group of characters provided as input.

---

### String: Examples

```java
public class Strings{
    public static void main(String args[]){
        String message = "Jai, Hind!";

        // Replace ! with 🙏
        String replaced = message.replace("!", "🙏");

        // Replace All Jai with 🙏
        String updated = message.replaceAll("Jai", "🙏");

        // Uppercase string
        System.out.println(message.toUpperCase());

        // Lowercase String
        System.out.println(message.toLowerCase());
    }
}
```

---

## Functions

A block of code, that usually represents some specific task.

Because Java is an object oriented programming language, it does not support declaring functions, outside of class.

The functions must exist inside of some class, in case of _Java_.

```txt
public class Functions{

    // Syntax of function
    return_type function_name(String argument1, String argument2){
        // Body of function
    }
}
```

---

### Function: Return Types

- Function could return any available datatype.
- If a function does not return anything, it is marked as `void`

```java
public class Functions{
    public static void main(String args[]){
        // Function invocation
        speak();
    }

    // Function Returning Integer
    int sum(int a, int b){
        return a + b;
    }

    // Declaring a function
    void speak(){
        System.out.println("Hey, You! Speak for me!");
    }
}
```

---

## Object Oriented Programming

The style of programming refers to the blueprinting of real world objects, in computer language.

The task is achieved via

- `class` : A blueprint of the object
- `Instance` : A working blueprint stored in RAM, It can perform tasks.

A class could contain:

- `attributes`: Variables inside classes, to store data
- `methods` : Functions inside classes, to change data, and perform operations

> A Space in RAM, that holds some data in known as object.

---

## Rules related to classes

- Every class without `access modifier` is public by default.
- Every method in class without `access modifier` is public by default.

> Modifiers, are special keywords, that changes the visibility of class and its methods

Usually classes are named in _TitleCase_ where first letter of each word is capital, with no spaces in between.

The naming conventions are optional, you can name your class anything you want, unless you do not destory the rules of variable naming, but for the consistency you should choose some naming conventions.

---

## Declaring Classes

```java
class Human{
    // Attributes on class
    String name = "";
    int age = 0;
    boolean isMale = true;

    // Methods on class
    void speak(){
        System.out.println(String.format("%s is speaking.", this.name))
    }
}
```

> `this` keyword is used to reference members of the class.

---

## Access Modifiers

Access modifiers are the keywords, that decides the visibility of some **attribute** or **method** of a class.

Usually classes are stored in seperate files.

---

## Access Modifiers

| Modifier  | Description                                                                 |
| --------- | --------------------------------------------------------------------------- |
| public    | Makes the class or method available everywhere in your software             |
| private   | Makes the method or attribute available only available inside class itself. |
| protected | Makes the class members available only to its inheriting classes            |
| abstract  | Marks a method or class to be declared later                                |
| static    | Makes a method available without creating instance or object of a class     |

> private cannot be used on a class, it can be used only on class attributes and its methods

---

### Access Modifier Example : Public and Private

```java
class Animal{
    public void walk(){
        // Walk few steps and then stop
        System.out.println("Walking...");
        System.out.println("Walking...");
        System.out.println("Walking...");

        // Stop Walking: Only available inside this class
        this.stopWalking();
    }
    private void stopWalking(){
        System.out.println("Stopped walking");
    }
}

// Creating instance of animal
Animal animal = new Animal();

// Call methods on class
animal.walk();
```

---

### Access Modifier Example : Abstract

```java
abstract class Animal{ abstract void introduce(); }

public class Human extends Animal{
    // Note: Method implemented in this class
    public void introduce(){
        System.out.println("I'am animal Human");
    }
}

// Use of human class
Human h1 = new Human();

// Use of class members
h1.introduce();
```

---

### Access Modifier Example : Protected

```java
public class Animal{
    public void introduce(){System.out.println("Animal Intro.");}
    // You cannot do: new Animal().hit();
    protected void hit(){System.out.println("Hitting...");}
}

// Possible
Animal a1 = new Animal();
a1.introduce();

// Possible
public class Human extends Animal{
    // Available from Animal class
    public danger(){ this.hit(); }
}

Human h1 = new Human();
h1.danger();
```

---

### Access Modifier Example: Static

```java
class Donator{
    static double MAX_DONATION = 3000;
}

// Possible
System.out.println(Donator.MAX_DONATION);
```

---

## Interfaces

Interfaces are the contracts between the classes.

If any class uses the interface, then it has to follow the contract provided by interface.

An interface could ask the class as follows:

- You must have `toString()` method.
- You must mark the `MAX_VALUE` attribute as static.

These are the types of things, we can accomplish using interfaces.

---

### Interfaces Example : Declaration

The contract says: Each that that implements this interface,

- must have a scroll method
- `scroll` method must be marked as void.
- `scroll` method must receive exact one argument of type int named steps

```java
interface HorizontalScrolling{
    void scroll(int steps);
}

```

> There are no implementation provided in interfaces, implementation are provided with help of classes, interfaces are used to ensure necessary methods or attributes that a class must have.

---

### Interfaces Example : Implementation

```java
interface HorizontalScrolling {
    void scroll(int steps);
}

class Article implements HorizontalScrolling{
    // You must declare this method, else error will be thrown.
    // It was declared because of interfaces.
    void scroll(int steps){
        System.out.println(String.format("Yes, i will scroll %d steps.", steps));
    }
}
```

---

### Interface Example: Scroll

```java
interface Scroll{
    void scrollHorizontal(int pixels);
    void scrollVertical(int pixels);
}

class Body implements Scroll{
    void scrollHorizontal(int pixels){}
    void scrollVertical(int pixels){}
}

// Use of Body class
new Body().scrollHorizontal();
new Body().scrollVertical();
```

Hey, and that's how the browser defines its components and makes sure no behaviour is missing, by using interfaces.

---

### Interface Example: Multiple Interfaces

You can make a class implement multiple interfaces.

```java
interface Drawable{ void draw(int point); }
interface Scrollable{ void scroll(int x, int y); }

class ArtBoard implements Drawable, Scrollable{
    public void draw(int point){}
    public void scroll(int x, int y){}
}
```

> In this case, **Artboard** will be scrollable and drawable, and it makes sense.

---

## Packages or Namespaces: Overview

In Object Oriented programming, namespaces helps to group various different classes according to their functionality.

For example, an application have multiple classes related to : **Security** and several other classes related to **Computation**.

So, it makes sense to group all classes related to security, and provide them a name.
And similar grouping can be done for computation.

---

### Packages or Namespaces : The Fact!

In java namespaces, are referred by packages.

So, basically both are same, Java uses the term package, where as other programming languages uses the term namespaces.

Here is what you can do:

- You can create a package with multiple classes, and provide package a unique name
- You can import the package by its name, and use all its classes.

---

### Packages Example: Creating a package

- Create a folder, (folder_name will be your package name)
- Create java `.class` files inside the folder
- Add `package package_name` at top of class, inside package

```txt
Project Folder
    |-security
        |- Encrypt.java
        |- Decrypt.java
    |-computation
        |- Miner.java
        |- Extractor.java
```

In the above example: `security` and `computation` folders are used to seperate the files, we will refer to them as packages.

---

### Package: File Contents

Here are the contents of `Encrypt.java` file.

```java
package security;

class Encrypt{}
```

Here are contents of `Miner.java` file.

```java
package computation;

class Miner{}
```

---

### Package: Import

`import` statements are used to import contents of a package in java file.

```java
// We are in central Package.
package central;

// We are using Encrypt class of security package.
import security.Encrypt;

public class StartHere{
    public void main(String args[]){
        Encrypt e = new Encrypt();

        // You can use Encrypt class here.
        e.generateHash("Jai, Bharat!");
    }
}
```

---

## Encapsulation

Encapsulation, states that you should secure your object properties from invalid data.

```java
public class BankAccount{
    private double balance = 0;

    public void setBalance(double amount){ if(amount > 0) this.balance = balance; }
    public double getBalance(double amount){ if(amount > 0) return this.balance; }
}

public class Main{
    public static void main(String[] args){
        BankAccount acc = new BankAccount();
        acc.balance = 100; // 🔥 Error: You can't change balance directly.
        acc.setBalance(100); // Set the balance to 100
        acc.getBalance(); // 100
    }
}
```

---

## Abstraction

Hide unnecessary details.

```java
public class MailService{
    // We only care about sending email outside this class.
    private void login(){}
    private void verifyCredentials(){}

    // Expose the send functionality
    public void send(){ System.out.println("Email sent"); }
}
```

Here, `login` and `verifyCredentials` are marked as private, because the authentication should be internally handled by MailService, we only care about send functionality outside this class.

---

## Polymorphism

A function existing in many forms. Example `Base` class could have `draw` method and all inheriting class should implement it.

```java
abstract class DrawingBoard{ public void draw(){} }

public class ArtBoard extends DrawingBoard{
    public void draw(){ System.out.println("Artboard drawing..."); }
}

public class SketchBoard extends DrawingBoard{
    public void draw(){ System.out.println("Artboard drawing..."); }
}
```

---

## Inheritence

Prevent code duplication, and reuse the code across different classes.

```java
public class Electronics{
    protected double price = 0;
    protected int stock = 0;

    public void addStock(int quantity){ this.stock += quantity; }
    public void sell(int quantity){ this.stock -= quantity; }
    public void addPrice(int amount){ this.price = amount; }
    public double getPrice(){ return this.price; }
}

public class Laptop extends Electronics{}
public class Freezer extends Electronics{}
public class Mobile extends Electronics{}
```

> Here, `Laptop`, `Freezer` and `Mobile` class will have all the functionalities of electronics.

---

## Thanks and Greetings

🛡 We are here friends, have a good luck. 🛡

✊ We will certainly do it, but with our everyone united and together ✊

✍ And My dear friends, we love you all. Thanks ✍
