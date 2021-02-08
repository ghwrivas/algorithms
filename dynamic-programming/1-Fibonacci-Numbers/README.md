# Fibonacci Numbers
Find the nth Fibonacci number in the Fibonacci sequence.
The Fibonacci numbers form a sequence, known as the Fibonacci sequence where each number is the sum of two preceding ones, starting from 0 and 1.

The Fibonacci numbers are defined as:

- f(0) = 0
- f(1) = 1
- f(n) = f(n-1) + f(n-2), for n >= 2

By using the defintion above, the first 10 Fibonacci numbers are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

Write a code to find the n^th Fibonacci number in the Fibonacci sequence.

# Solution 1: Recursive
 - Runtime complexity: The runtime complexity of this solution is exponential, O(2^n).

 - Memory complexity: The memory complexity of this solution is linear, O(n).
   
   The memory complexity of this recursive solution is O(n) as each recursive call consumes memory on the stack.

# Solution 2: iterativo 
 - Runtime complexity: The runtime complexity of this solution is linear, O(n).

 - Memory complexity: The runtime complexity of this solution is constant, O(1).
