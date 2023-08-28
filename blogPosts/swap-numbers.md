---
title: 'Swap two numbers with programming'
date: '2023-02-04'
---

![Hero Image](https://images2.imgbox.com/ca/1f/2DDVEGOY_o.jpg)

There are many ways to Swap two numbers in programming. Here I am showing how to swap two numbers optimized and a simple way and also explaining how it works.

**Swap to number using a temporary variable (not optimized. It takes extra space)**:

**For example**:
A = 5, B = 4. To swap them, we can have a temp variable (helper variable) temp = 0. Then we assign temp = A, so temp = 5, and now we can change the value of A as we already stored it in the temporary variable, so now A = B, so A = 4, and now we can assign temporary value to B so B = temp and the temp is 5 so now the value of B=5. We successfully swapped two numbers. (Order doesn't matter, we can also do that using B first)

```python:
A = 5 
B = 4 
# temporary Value
temp = 0 
#Assigning temp = A,so temp = 5 
temp = A 
# As we already stored value of A in temp,
# now we can assign other value to it
# A = B, A = 4
A = B
# now just assign the value of A stored in temp to B
B = temp 
# result A = 4 and B = 5
```

**Sum method simple swapping method**:

In this method, we need to get those two numbers' sum and assign them to one variable (A = A+B). For the second variable(B), subtract the first variable (A = A+B) with second variable, so now B = A (A+B) - B. Now same with the first variable now, A = A (A+B) - B. And This way, we swapped two numbers.

**For Example**:

**A = 5, B = 4, A= A + B = 9** (Sum of two numbers assigned to **A = 9), B= A - B = (A+B) - B = 9 - 4 = 5 (now B = 5)**, **A = A - B = (A+B) - B = 9 - 5 = 4 (as we changed the B= 5, now A =4)** Result: **A = 4, B = 5**

```python:
A = 5 
B = 4 
#A = A + B = 9 
A = A + B
#B = A - B = (A + B) - B = 9 - 4 = 5
B = A - B 
# value of b changed so B is 5 now.
#A = A -B = (A + B) - B = 9 - 5 = 4 
A = A - B
# result: A = 4, B = 5
```

**Bit manipulation swapping method with XOR operator**:

Please refer XOR table if you are not aware of how it works. XOR is only 1 for different values and 0 for the same ones. XOR can be written as "^"

```table:
| X | Y | XOR (x ^ y) |
|---|---|-------------|
| 0 | 0 | 0           |
| 0 | 1 | 1           |
| 1 | 0 | 1           |
| 1 | 1 | 0           |

```

For this method, we need to assign XOR of two values to one variable, so x = x ^ y then, now y = x ^ y and then again x = x ^ y, and this way, x, and y are swapped.

**Explanation: (the following is just an explanation, not a code)**:

![Explanation: (https://devexplanation.hashnode.dev/swap-two-numbers-with-programming)](https://images2.imgbox.com/02/9f/YIy0fP41_o.jpg)

(Note: In step 2, x ^ y is not going to change because we already assigned the x value and then changed the value of y, so x = x ^ y does not affect that)

**Another explanation with Example:**

Code:
![Explanation: (https://devexplanation.hashnode.dev/swap-two-numbers-with-programming)](https://images2.imgbox.com/7c/f5/wAWqcosj_o.jpg)

```python:
x = 5 
y = 4 
# assigning x = x ^ y   
x = x ^ y 
# Step 1: 
# assigning y= (x ^ y) ^ y
# associative law y = x ^ (y ^ y) 
# we got y = x   
y = x ^ y
# ---------------
# Step 2: (from step 1: x = (x ^ y) and y = x)  
# x = (x ^ y) ^ y
# (here x ^ y is not going to change bcs it's coming from value of x) 
# now x = (x ^ y) ^ x 
# associative law x = y ^ (x ^ x) 
# we got x = y ^ 0 
# x = y 
x = x ^ y     
# result: x = 4, y =5

```

Thank you for reading this blog. I hope you guys love this blog, and these things could be asked in the interview, like swapping two numbers without temporary variables, so you can use the last two methods for that.
