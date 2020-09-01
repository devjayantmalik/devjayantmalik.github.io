# Design and Analysis of Algorithms (Unit 1)

## Introduction to Algorithms

### What is Algorithm ?

_Algorithm_ is a noun, which defines, **a set of rules** to be followed to solve a provided problem.

Let's take an example of Finding largest of two numbers. The algorithm would be:

- Get Input for `num1` and store it in variable `num1`
- Get input for `num2` and store it in variable `num2`
- Convert the numbers to integers(if required)
- Check If `num1 > num2` then print `num1` is largest
- Else print `num2` is largest.

This is a simple example of the algorithm, the next step is to implement the algorithm in a programming languge. Here is how it looks in programming languages

```python
# Get input for num1 and num2
num1 = input("Enter first number: ")
num2 = input("Enter second number: ")

# Convert the numbers to integers(if required)
num1, num2 = int(num1), int(num2)

# Compare num1 and num2
if num1 > num2:
    print(f"{num1} is largest number")
else:
    print(f"{num2} is largest number")

```

```cpp
#include <iostream>

int main(int argc, char ** argv){
    // create two variables
    int num1 = 0;
    int num2 = 0;

    // Ask user for first number
    std::cout << "Enter first number: ";
    std::cin >> num1;

    // Ask user for second number
    std::cout << "Enter second number: ";
    std::cin >> num2;

    // Check for values

    if(num1 > num2){
        std::cout << num1 << " is largest " << std::endl;
    }else{
        std::cout << num2 << " is largest " << std::endl;
    }


    return 0;
}

```

So, you just saw, what an algorithm is: These are just a bunch of steps you need to follow to solve the problem.

But, the question is: **Is this algorithm best?**, or **Can this algorithm handle every case ?**

And the answer is: **No, this algorithm cannot handle every user input.** , because it is missing validation, the possible pitfalls could be:

- What if the user enters a not integer number, such as 33.3, 33.2 etc.
- What if the user enters a string instead of entering a number such as: "abc".
- What if the user enters a number beyond the range of integers(a computer can store.)
- What if the user enters a equation instead of the numbers, such as 4+2 and 3+2 respectively.

All the above problems needs to be considered for our algorithm to work as expected, let's fix our algorithm to solve a few problems. A few solutions would be as follows:

- Store the number in a double instead of integer (solved decimal point numbers and supports larger range.)
- Use of std::cin does not store invalid input in the variables. (solves equation and string problems).

So, our algorithm would be:

- Get Input for `num1` and store it in variable `num1` of type `double`.
- Get input for `num2`and store it in variable `num2` of type `double`.
- Validate the inputs
- Convert the numbers to doubles(if required)
- Check If `num1 > num2` then print `num1` is largest
- Else print `num2` is largest.

So, here is the modified code for our algorithm:

```python
from decimal import Decimal

# Get input for num1 and num2
num1 = input("Enter first number: ")
num2 = input("Enter second number: ")

# Convert the numbers to doubles(if required)
num1, num2 = Decimal(num1), Decimal(num2)

# Compare num1 and num2
if num1 > num2:
    print(f"{num1} is largest number")
else:
    print(f"{num2} is largest number")

```

```cpp
#include <iostream>

int main(int argc, char ** argv){
    // create two variables
    double num1 = 0.0;
    double num2 = 0.0;

    // Ask user for first number
    std::cout << "Enter first number: ";
    std::cin >> num1;

    // Ask user for second number
    std::cout << "Enter second number: ";
    std::cin >> num2;

    // Check for values
    if(num1 == 0 && num2 == 0){
        std::cout << "Both the numbers are zero, please provide a valid input." << std::endl;
    }

    if(num1 > num2){
        std::cout << num1 << " is largest " << std::endl;
    }else{
        std::cout << num2 << " is largest " << std::endl;
    }


    return 0;
}
```

So, we just improved our algorithm, but it can be improved further, this is the process of refactoring, which means improving your code.

Next, we will ask the question, **will this algorithm work if the user has a small amount of RAM, or processing power ?**. And the answer to this question will be given by process of analysis of algorithm, we will discuss it next!

### Performance Analysis (Time and space complexity)

There are saveral things, we need to analyze about an algorithm. But the most common are:

| Analysis Type  | Description                                                                                   |
| -------------- | --------------------------------------------------------------------------------------------- |
| Time Analysis  | Provides answers to: **How much execution time does CPU take to execute our algorithm?**      |
| Space Analysis | Provides answers to: **How much RAM or any other storage was used to execute our algorithm?** |

We will discuss each of these in detail. Let's get started:

**Time Analysis** is done to check the execution time of our algorithm. It provides us sufficient information, to mark a specific algorithm as: `Fast`, `Slow`, or `Medium`, whereas

**Space Analysis** is done to check the storage used by our algorithm, It provides us sufficient information, to mark a specific algorithm as: `Space Hungry` or `Space Efficient`

And together, _Time Analysis_ and _Space Analysis_ helps us mark a algorithm as: _Efficient_, _In-Efficient_

Let's take a simple example to understand it. The example would be using some search algorithms:

Let's say we are given a array of numbers: `[1, 2, 3, 4, 5, 6, 7, 8, 9]` and we asked to find position of the number 5, (assumming positions starts at 0.) And the length of the array is also provided.

The first step would be to note the information provided to us, so we have:

- Array Length: 9
- Item to find: 5
- Array Order: Sorted
- Array Elements: [1, 2, 3, 4, 5, 6, 7, 8, 9]
- Array Index of Element 1: 0
- Array Index of Element 2: 1
- Array Index of Element 9: 8

There could be various ways to solve the problem:

The first way would be something as follows:

- Check the element at index: length / 2 (Provides the middle element of array)
- Check if the item is less than middle element
- If the element is in the middle, then we will only check left side of array
- Else if the element is greater than the middle element then we will check right side of array
- Else if the element is equal to the middle element then the index of the array will be: length / 2

And another approach would be something as follows:

- Start from the first index and check if element at the current index is equal to target element
- If you do not find target element at any index, then the element is not present in the array
- Else, you will find element at some index.

Now, let's take the above ideas and try to implement them in our code, to test them if they works.

```py
# Define the array and provided data
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
length = len(nums)
target = 5

# Find the middle of the array
middle = int(length / 2)

# Check if the target is less than the middle element
if target < nums[middle]:
    # Check on the left side of the list
    for index in range(0, middle):
        if target == nums[index]:
            print(f"Element found at: {index}")
            break
            exit(0)
    print("Element not found in the list")


# Check if the target is greater than the middle element
elif target > nums[middle]:
    # Check on the right side of the list
    for index in range(middle, length):
        if target == nums[index]:
            print(f"Element found at: {index}")
            break
            exit(0)
    print("Element not found in the list")

# Check if the element is equal to the middle element
elif target == nums[middle]:
    print(f"Element is present at: {middle}")

# This means element is not in the list
else:
    print("Element is not in the list")

```

And Infact you will find that the code works!. But, can we say that it is a good solution, Before answering that question, let's try to analyze our code, the few things that are noticed immediately are:

- Duplicate for loop at two conditions
- Algorithm has exit() statement which do not allow us to extend this program.

Let's try an some patches to fix this problem.

We know that we are doing something again and again, so we will require some kind of loop, So, we need to extract the inner loop out.

If I analyze the problem, then the loops needs a start and ending point, So, our first step would be to extract the start and end point out of conditions,

Here is how it will look in the code:

```py

start_point = 0
end_point = length

for index in range(start_point, end_point):
    # Do something with if and else
```

Okay, I think this will transform our algorithm to something else, but let's try to modify our existing algorithm. Because we want a best way to solve this problem.

```txt
// Our Data
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
length = len(nums)
target = 5

// Initially set the index to 0 and end of array
start_index = 0
end_index = length

// Loop as follows
for index in range(start_index, end_index)
    - Check the element at index: end_index / 2 (Provides the middle element of array)
    - If the element is less than middle, then we will only check left side of array
    - Else if the element is greater than the middle element then we will check right side of array
    - Else if the element is equal to the middle element then the index of the array will be: length / 2
    - Else the element is not in the list

```

So, we refactored our algorithm now, let's try to implement this code, and see what happens.

```py
# Define the array and provided data
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
length = len(nums)
target = 5

# Record the start and end of array
start_index = 0
end_index = length

# Repeat the steps from start to end
for index in range(start_index, end_index):
    # Find the middle of the array
    middle = int(length / 2)

    # Check if the target is less than the middle element
    if target < nums[middle]:
        # Check on the left side of the list
        # We will figure it out


    # Check if the target is greater than the middle element
    elif target > nums[middle]:
        # Check on the right side of the list
        # We will figure it out


    # Check if the element is equal to the middle element
    elif target == nums[middle]:
        print(f"Element is present at: {middle}")

    # This means element is not in the list
    else:
        print("Element is not in the list")

```

So, now we are closer to a better solution, we just need to figure out, How we are going to check element on the right or left side,

A few seconds earlier, we extracted the loop out and noticed that the loop depended on the start and end index. Now, The thought that comes in my mind is:

- What if i change the start and end index whenever i want to search on left or right?

And I want to try it out. Let's do it and see what happens.

I will remove some code, in order to make it easy to understand, and to provide you with some idea.

```py
# ...

# Record the start and end of array
start_index = 0
end_index = length

# Repeat the steps from start to end
for index in range(start_index, end_index):
    # Find the middle of the array
    middle = int(end_index / 2)

    # Check if the target is less than the middle element
    if target < nums[middle]:
        # Check on the left side of the list
        # Set the start index to the start of the array (already set) and
        # end index to the middle of the array
        end_index = middle


    # Check if the target is greater than the middle element
    elif target > nums[middle]:
        # Check on the right side of the list
        # Set the start_index to middle and
        # end index to the length of the array(Which is already set.)
        start_index = middle


    # ...
```

So, Now we got the idea, and here is the complete code.

```py
# Define the array and provided data
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
length = len(nums)
target = 5

# Record the start and end of array
start_index = 0
end_index = length

# Repeat the steps from start to end
for index in range(start_index, end_index):
    # Find the middle of the array
    middle = int(end_index / 2)

    # Check if the target is less than the middle element
    if target < nums[middle]:
        # Check on the left side of the list
        # Set the start index to the start of the array (already set) and
        # end index to the middle of the array
        end_index = middle


    # Check if the target is greater than the middle element
    elif target > nums[middle]:
        # Check on the right side of the list
        # Set the start_index to middle and
        # end index to the length of the array(Which is already set.)
        start_index = middle

    # Check if the element is equal to the middle element
    elif target == nums[middle]:
        print(f"Element is present at: {middle}")
        break

    # This means element is not in the list
    else:
        print("Element is not in the list")
        break

```

Now, after this work, let's test our program.

The program works as expected, but there is one problem, The output is as follows:

```sh
Element is present at: 4
Element is present at: 4
Element is present at: 4
Element is present at: 4
Element is present at: 4
Element is present at: 4
Element is present at: 4
Element is present at: 4
Element is present at: 4
```

The result is printed multiple times, this is because we are not ending the loop, once the element is found. It is pretty easy to fix. Just placing a break statement will solve the issue for us.

Let's do it.

```py

# ...

# Check if the element is equal to the middle element
elif target == nums[middle]:
    print(f"Element is present at: {middle}")
    break

# This means element is not in the list
else:
    print("Element is not in the list")
    break

```

I will provide you complete file in a moment, but first place the break keyword and test it out.

And the program works great. Now, here is the complete python file

```py
# Define the array and provided data
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
length = len(nums)
target = 5

# Record the start and end of array
start_index = 0
end_index = length

# Repeat the steps from start to end
for index in range(start_index, end_index):
    # Find the middle of the array
    middle = int(end_index / 2)

    # Check if the target is less than the middle element
    if target < nums[middle]:
        # Check on the left side of the list
        # Set the start index to the start of the array (already set) and
        # end index to the middle of the array
        end_index = middle


    # Check if the target is greater than the middle element
    elif target > nums[middle]:
        # Check on the right side of the list
        # Set the start_index to middle and
        # end index to the length of the array(Which is already set.)
        start_index = middle


    # Check if the element is equal to the middle element
    elif target == nums[middle]:
        print(f"Element is present at: {middle}")
        break

    # This means element is not in the list
    else:
        print("Element is not in the list")
        break

```

And let's make a last modification to our code, here is the code we will be modifying:

```py
# Define the array and provided data
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
length = len(nums)
target = 5

# Record the start and end of array
start_index = 0
end_index = length
```

The problem I see in the code is length variable, It can be removed, because it is used only once. So, here is the refactored code:

```py
# Define the array and provided data
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
target = 5

# Record the start and end of array
start_index = 0
end_index = len(nums)
```

Now, before marking our algorithm as _working_ let's test it on other values, And you will find that our algorithm is not displaying the _Element not found in list_ message, else everything is working.

Let's see, what is the problem with our code, the problem is!

To find the problem in our code, we can use print statements

Here is our code with bunch of print statements to help us debug

```py
# Define the array and provided data
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
target = 100

# Record the start and end of array
start_index = 0
end_index = len(nums)

# Repeat the steps from start to end
for index in range(start_index, end_index):
    # Find the middle of the array
    middle = int(end_index / 2)

    # Check if the target is less than the middle element
    if target < nums[middle]:
        print('inside left')
        end_index = middle


    # Check if the target is greater than the middle element
    elif target > nums[middle]:
        print('inside right')
        start_index = middle


    # Check if the element is equal to the middle element
    elif target == nums[middle]:
        print('inside found')
        print(f"Element is present at: {middle}")
        break

    # This means element is not in the list
    else:
        print('inside not found')
        print("Element is not in the list")
        break


```

The result tells us clearly, what exactly is the problem with our code, the problem is we are hitting _inside right_ block each time, and it is also right.

So, the solution would be remove the last else block and everything will work as expected.

Here is the final code with removed commments

```py
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
target = 100

start_index = 0
end_index = len(nums)

for index in range(start_index, end_index):
    middle = int(end_index / 2)
    if target < nums[middle]:
        end_index = middle
    elif target > nums[middle]:
        start_index = middle
    elif target == nums[middle]:
        print(f"Element is present at: {middle}")
        break
    print("Element is not in the list")
    break

```

So, we just saw, how we can design an algorithm from scratch. I think this process provided you some idea, of algorithm analysis and design. We will work the same way in the future.

But for now, let's figure out _Space and time_ complexity, for our final algorithm we just designed.

A quick refresh is:

> **Time Analysis** is done to check the execution time of our algorithm. It provides us sufficient information, to mark a specific algorithm as: `Fast`, `Slow`, or `Medium`, whereas

> **Space Analysis** is done to check the storage used by our algorithm, It provides us sufficient information, to mark a specific algorithm as: `Space Hungry` or `Space Efficient`

So, from the above point of _Time analysis_, I want you to tell me few things:

- What if i have a number of operations my program performs, and I ask you to tell me: _Is my program slow or fast?_, Can you tell me something about it?

If your answer is yes, because it makes sense to say that **more operations will take more time to process**, and hence programs will be slow in case of more operations And you can also say that: **few operations will make the program fast**.

And that is exactly, what we will be doing in this case, and that leads us to next topic of best, worst and average cases. We wil see you in next module, where we will actually provide you a way to determine space and time complexity in simple ways, without much of mathematical analysis.

### Best, average and Worst case

### Asymptotic Notation (Big OH, Omega and Theta)

### Elementary data structures (Stack, Queue, Tree, Graph)

### Sets and Disjoint set Union

## Divide and Conquer

### General Method

### Binary Search

### Merge Sort

### Quick Sort

### Others sorting algorithms with divide and conquer strategy

### Strassen's Matrix Multiplication Algorithms

### Analysis of Strassen's Matrix Multiplication problems
