# How to create Vehicle class using C Programming ?

Today, a question came to my mind, about C Programming. The question was how can i modal a class functionality using functional programming.

So, I thought to implement the `Vehicle` class using C Programming. For starting point I just decided to implement `start` and `stop` function in `Vehicle` class.

Okay, I will try to document my thinking process, in this article. Let's start it.

First of all, In order to construct an object, we need to understand what actually an object is?

According to me, an object is just a space in RAM that holds some data. It is so simple and easy to understand an object. So, If an object is just a part of RAM that holds some data, I can visualize it as follows:

```txt

A Sample Vehicle object.

###############
#    start()  #
#    stop()   #
###############
```

```cpp
#include <iostream>

class Vehicle{
    void start(){
        std::cout << "Starting Vehicle..." << std::endl;
    }
    void stop(){
        std::cout << "Stopping Vehicle..." << std::endl;
    }
}
```

Let's describe the functionality.

- `start()` and `stop()` are functions, and we have functions in C.
- `Class Vehicle` is a blueprint that constructs an object in RAM. In case of C we have structures that provides custom shape objects.

So, basically now it seems like we could construct this same class using functions and structures.

Let's see this in action.

```c

// Function
void start(){ printf("Starting Vehicle...\n"); }
void stop(){ printf("Stopping Vehicle...\n"); }

int main(){
    // So, this is first step.
    return 0;
}
```

Okay the above example tells you how you can create functions in C.
Now, let's take a step further and see how a structure looks like in C.

```c
struct Demo{
    char *name;
    int age;
};

typedef struct Demo Demo;

int main(){
    Demo d;
    d.name = "Hello\0"; // You know the reason of "\0", (its optional for us)
    printf("Value of Name: %s\n", d.name)
}
```

So, the points from the above code states that:

- A structure could hold primitive types such as `int`, `float` etc.
- A structure could also hold pointers.

But wait a minute, we want to create functions inside structure, how about creating function pointers and assigning them manually.

So, here is the implementation code:

```c
struct Vehicle{
    void (*start)(void);
    void (*stop)(void);
};

// To prevent use of struct keyword during variable declaration.
// It simplifies: "struct Vehicle v;" to "Vehicle v;"
typedef struct Vehicle Vehicle;

// Declare functions
void start(){ printf("Starting vehicle..."); }
void stop(){ printf("Stopping vehicle..."); }

int main(){
    // Declare your vehicle
    Vehicle car;

    // Assign the functions to pointers
    car.start = start;
    car.stop = stop;

    // Execute the functions
    car.start();
    car.stop();

    return 0;
}
```

So, let's see what happens when we execute the above code.

```sh
acer@hat:~/projects/cpp$ gcc test.c && ./a.out
Starting Vehicle...
Stopping Vehicle...
acer@hat:~/projects/cpp$
```

Here is the output from my linux machine.

So, we just implemeted a basic example of Class in our C language.

Here is the final program for this step:

```c
#include <stdio.h>

struct Vehicle
{
    // A pointer to start function that takes no arguments
    void (*start)(void);
    // A pointer to stop function that takes no arguments
    void (*stop)(void);
};

typedef struct Vehicle Vehicle;

void start()
{
    printf("Starting Vehicle...\n");
}

void stop()
{
    printf("Stopping Vehicle...\n");
}

int main()
{
    Vehicle car;
    car.start = start;
    car.stop = stop;

    car.start();
    car.stop();

    return 0;
}
```

And here is the exact same implementaion using CPP

```cpp
#include <iostream>

struct Vehicle
{
public:
    void start();
    void stop();
};

void Vehicle::start()
{
    std::cout << "Starting vehicle..." << std::endl;
}

void Vehicle::stop()
{
    std::cout << "Stopping vehicle..." << std::endl;
}

int main()
{
    Vehicle *v = new Vehicle();
    v->start();
    v->stop();

    return 0;
}
```

So, let's the example a bit further. How about implementing a more complex class, how about this?

```cpp
#include <iostream>

class Vehicle
{
    std::string name;

    Vehicle(std::string carName) { name = carName; }
    void start(){ std::cout << "Starting " << name << "...\n"; }
    void stop(){ std::cout << "Stopping " << name << "...\n"; }
};

int main(int argc, char **argv)
{
    Vehicle *car = new Vehicle("Maruti");
    car->start(); // Starting Maruti...
    car->stop(); // Stopping Maruti...

    return 0;
}

```

Here is the implementation of the above code with comments.

```c
#include <stdio.h>

struct Vehicle
{
    // Store the name of the vehicle
    char *name;

    // All functions are passed reference to the current object
    // in object oriented programming.
    void (*start)(struct Vehicle *v);
    void (*stop)(struct Vehicle *v);
};

typedef struct Vehicle Vehicle;

void start(Vehicle *v)
{
    printf("Starting %s...\n", v->name);
}

void stop(Vehicle *v)
{
    printf("Stopping %s...\n", v->name);
}

int main()
{
    Vehicle car;
    car.name = "Maruti";
    car.start = start;
    car.stop = stop;

    car.start(&car);
    car.stop(&car);

    return 0;
}
```

You know, that was so simple after the first step. You can take much futher if you like. I Thanks that provides a good idea for now. If you want to expand it then feel free to contribute via sending us your content at dev.jayantmalik@gmail.com
