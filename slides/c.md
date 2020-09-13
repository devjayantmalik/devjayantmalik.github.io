---
marp: true
theme: default
_class: lead
paginate: true
backgroundColor: #ffffee
style: |
  h1, h2, h3, h4, h5, h6 {
    border-bottom: 4px solid indianred;
  }
---

# Programming in C

You are here to recap your concepts, with Jayant Malik

---

# What type of language is C ?

- C is a procedural language.
- Every task is done with help of functions, so, it is also a functional programming language.

---

# Rules

- C programs are stored in files ending with `.c` extension.
- C programs are compiled and stored in binary execuatable files.
- Statements ends with semicolons
- Variables are Case sensitive
- Including header files is not required, until you use the variables declared in them.
- Header files are text files, they can be read by anyone, with a text editor.

---

# Functions related to STDOUT buffer ?

| Function | Description                              | Example                                         |
| -------- | ---------------------------------------- | ----------------------------------------------- |
| printf   | Used for formatted printing              | `printf("Name: %s, age: %d", "Your Name", 20);` |
| puts     | Used to print string                     | `puts("Your String Here");`                     |
| putchar  | Used to print character                  | `putchar('a');`                                 |
| fflush   | Flush the provided buffer or all buffers | `fflush(stdout);`                               |
| putc     | Writes character to provided buffer      | `putc('a', stdout);`                            |

---

# Functions related to STDIN buffer ?

| Function | Description                                                               | Example                    |
| -------- | ------------------------------------------------------------------------- | -------------------------- |
| scanf    | Converts the provided input to integer (`%d`) and store in marks variable | `scanf("%d", marks);`      |
| getchar  | Reads a character from stdin and returns it in ascii integer form         | `char letter = getchar();` |
| fflush   | Flush the provided buffer, if no input is provided, it flushes all buffer | `fflush(stdin);`           |

---

# Hello, World Program

```c
#include <stdio.h>

int main(){
    // Print the string
    puts("Hello, World!");

    // Program exited normally.
    return 0;
}

```

---

# Constants and Variables

| Name        | Description                               |
| ----------- | ----------------------------------------- |
| Constants   | Value is provided only during declaration |
| Variables   | Value can be changed after declaration    |
| Mutable     | Variables whose values can be changed     |
| Non mutable | Variables whose values cannot be changed  |

> In case of `c`, Constants are non mutable, where as variables by default are mutable.

---

## Constants Syntax:

```txt

// A constant Syntax
const datatype variable_name = value;

// A variable syntax
datatype variable_name = value;

```

---

## Constants Example:

```c
// A constant
const float PI = 3.14;

// A variable
int age = 10;
```

---

# Arrays

Arrays are used to store multiple different values.

---

## Arrays Syntax

Syntax of arrays

```txt
// By providing number of elements
datatype variable_name[no_of_elements] = {val, val, val, ...};

// Automatically figuring out number of elements
datatype variable_name[] = {val, val, val};
```

---

## Array Examples

```c
// Declaration of numbers array
int nums[] = {1, 2, 3, 4, 5, 6};
```

```c
// Declaration of character array
char nums[3] = {'a', 'b', 'c'};
```

---

## Array Examples

```c
#include <stdio.h>

int main(){

    // Declaring array
    int nums = [4];

    // Changing Elements in array
    nums[0] = 10;
    nums[1] = 20;
    nums[2] = 30;
    nums[3] = 40;

    return 0;
}
```

---

# Pointers

Pointers are used to address of some other variable

```c
const char jayant[] = {'j', 'a', 'y', 'a', 'n', 't', '\0'};
const char *name = jayant;
```

---

# Function declaration vs Function definition vs Function Invocation

```c
#include <stdio.h>

// Function declaration
int sum(int num1, int num2);

// Function Definition
int sum(int num1, int num2){
    return num1 + num2;
}

int main(){
    // Function Invocation
    sum(10, 20);

    return 0;
}

```

---

## Function Declaration and Definition

| Name                 | Description                                           |
| -------------------- | ----------------------------------------------------- |
| Function Declaration | Only the function is declared, it is not implemented. |
| Function Definition  | Function is declared with its implementation.         |
| Function Invocation  | Calling the function with its arguments.              |

---

# Variable Scope Keywords

| Keyword  | Description                                                           |
| -------- | --------------------------------------------------------------------- |
| auto     | Creates local variables                                               |
| static   | Creates global variables                                              |
| extern   | Uses the existing declared variable                                   |
| register | Creates variable in CPU registers, if space is available, else in RAM |

---

## Example of static Keyword for variables

```c
#include <stdio.h>

int main()
{
    for (int i = 0; i < 10; i++)
    {
        static int count = 1;
        count++;

        // Will change every time: 1 to 11
        printf("Count is %d\n", count);
    }

    return 0;
}
```

---

## Static Keyword Explanation

- For loop is evaluated using _Stack_
- The variable count is declared globally.
- The variable does not get destroyed with _Stack Pop_ operation
- So, the values are incremented each time
- and we get output from 1 to 11.

---

## Example of local Keyword for variables

```c
#include <stdio.h>

int main()
{
    for (int i = 0; i < 10; i++)
    {
        local int count = 1;
        count++;

        // Will remain same every time: 2
        printf("Count is %d\n", count);
    }

    return 0;
}
```

---

## Local Keyword Explanation

- For loop is evaluated using _Stack_
- The variable count is declared globally.
- The variable `count` gets destroyed with _Stack Pop_ operation
- The variable `count` gets created with _Stack Push_ operation
- So, the values are same each time.
- and we get output 2

---

## Example of register keyword

```c
#include <stdio.h>

int main(){
    // Execution will be really fast
    for(register int i=0; i<10; i++){
        // Some calculation using variable i
        puts("Jai, Bharat!")
    }

    return 0;
}

```

---

## Register keyword explanation

For local variables, _Processor_ reads the variable from RAM and then performs operations on it.
For register variables, _Processor_ stores the variable in _CPU_ registers memory, hence there is no need to read variable from RAM.

---

## Example of extern keyword

```c
#include <stdio.h>

int count = 1;

int main()
{
    for (int i = 0; i < 10; i++)
    {
        extern count;
        count++;

        // Will change every time: 1 to 11
        printf("Count is %d\n", count);
    }

    return 0;
}

```

---

## Extern keyword explanation

The variable count will not get created because it already exists.

In case, `count` is not declared, then the warning will be thrown during compilation.

---

## Extern keyword Error

```sh
file.c:9:16: warning: type defaults to ‘int’ in declaration of ‘count’ [-Wimplicit-int]
    9 |         extern count;
      |                ^~~~~
/usr/bin/ld: /tmp/ccJwTtIQ.o: in function `main':
test.c:(.text+0x17): undefined reference to `count'
/usr/bin/ld: test.c:(.text+0x20): undefined reference to `count'
/usr/bin/ld: test.c:(.text+0x26): undefined reference to `count'
collect2: error: ld returned 1 exit status
```

---

# Structures

Structure needs to end with a semicolon.

```c
#include <stdio.h>

struct Rectangle
{
    double length;
    double breadth;
};

int main()
{
    struct Rectangle rect;
    rect.length = 10;
    rect.breadth = 20;

    printf("Length: %f\n", rect.length);
    printf("Breadth: %f\n", rect.breadth);

    return 0;
}
```

---

## Use of typedef with struct

```c
#include <stdio.h>

struct Rectangle
{
    double length;
    double breadth;
};

// Use of typedef
typedef struct Rectangle Rectangle;

int main()
{
    Rectangle rect;
    rect.length = 10;
    rect.breadth = 20;

    printf("Length: %f\n", rect.length);
    printf("Breadth: %f\n", rect.breadth);

    return 0;
}

```

---

# Syntax of Function Declaration

```txt

return_type variable_name(datatype argument_name, datatype argument_name, ...){
    // Body of the function
}
```

---

## Example of function declaration

```c
// A Function declaration
int speak(const char * message){
    puts(message);
}

// A Function declaration
int main(int argc, char *argv[]){

    // Function Invocation
    speak("Jai, Bharat!");

    return 0;
}
```

---

# Conditionals

Conditionals helps you control execution flow of your webpage.

---

## Conditionals: Switch Case

---

### Example Switch Case

```c
int num = 10;

switch(num){
    case 1: puts("one"); break;
    case 2: puts("two"); break;
    case 3: puts("three"); break;
    // There is no need of break,
    // as it is last statement
    default: puts("Invalid input");
}
```

---

### Example Switch Case

```c
int num = 10;

switch(num){
    // You need to use break
    default: puts("Invalid input"); break;
    case 1: puts("one"); break;
    case 2: puts("two"); break;
    case 3: puts("three"); break;
}
```

---

### Explanation Switch case

- `break` is used to stop the execution of switch statment
- `default` is the last option passed to switch statement, which is executed only if none of the above conditions is satisfied.
- `case` keyword is used to specify the condition to match.

---

## If Else

```c
const char * name = "Jayant";

if(name == "Jayant"){
    puts("You are admin");
}
else if(name == "User"){
    puts("You are user");
}
else{
    puts("You are not registered with us");
}

```

---

## Loops: For loop

For loop is used to execute repetetive tasks.

---

### Example : For loop

```c
for(int i=0; i< 10; i++){
    puts("Jai, Bharat!");
}
```

---

### Example : For loop

```c
int i = 0;

// Multiple Coditions seperated with commas
for (puts("initialized"), i; puts("evaluated"), i < 10; puts("incremented"), i++)
{
    puts("executed");
}
```

---

### Example : For loop

```c
int i = 0;
// Without conditions
for (;;)
{
    // Body
    puts("Jai Bharat!");

    // Increment
    i += 1;

    // Condition
    if (i == 10)
        break;
}
```

---

## Loops: While loop

---

### Example: While loop

```c
int i = 0;
while (i != 10){
    puts("Jai, Bharat!");

    // Increment
    i++;
}

```

---

### Example: While loop

```c
int i = 0;
while (puts("check"), i != 10)
{
    puts("Jai, Bharat!");

    // Increment
    i++;
}

```

---

### Example: While loop

```c
int i = 0;
// Makes if infinite loop
while (1){
    // Terminating Condition
    if(i == 10) break;

    // Increment
    i++;

    // Body of loop
    puts("Jai, Bharat!");
}

```

---

## Loops: Do while

```c
int i = 0;
do
{
    // Body of loop
    puts("Jai Bharat!");

    // Increment
    i++;
} while (i < 10);
```

---

# File handling

```c
#include <stdio.h>

int main()
{
    // Open a file in write mode
    FILE *file = fopen("demo.txt", "w");

    // Write to file
    fprintf(file, "Jai, Bharat!\n");

    // Close a files
    fclose(file);

    return 0;
}
```

---

## File handling : Methods

| Method  | Description                                     |
| ------- | ----------------------------------------------- |
| fwrite  | Used to write multiple blocks of data to stream |
| fread   | Used to read data from stream                   |
| fprintf | Used to write data to provided stream           |

> Note: **stream** in the above case represent buffer, such as `stdin`, `stdout`, `FILE` etc.

---

## Example of fwrite

```c
#include <stdio.h>

int main()
{
    // Open a file in write mode
    FILE *file = fopen("demo.txt", "w");

    // Write to file
    // fprintf(file, "Jai, Bharat!\n");
    const char message[] = "Jai Bharat!\0";

    // Write multiple small blocks of data
    fwrite(message, sizeof(message) / 2, 2, file);

    // Write as a single block of data
    fwrite(message, sizeof(message), 1, file);

    // Close a files
    fclose(file);

    return 0;
}

```

---

# Header files

The files containing just the function prototypes or declarations. Function definitions are defined in library files.

```c
// Use of header file
#include <stdio.h>

int main(){

return 0;
}

```
