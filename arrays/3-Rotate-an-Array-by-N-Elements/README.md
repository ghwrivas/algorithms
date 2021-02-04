# Rotate an Array by N Elements
Given an array of integers, rotate the array by 'N' elements.

# Solution 1
 - Runtime complexity: The runtime complexity of this solution is linear, O(n).

 - Memory complexity: The memory complexity of this solution is constant, O(1).

Here is how the solution works:

- Normalize the rotations so they do not exceed the length of the array.
- Convert negative rotations to positive rotations.
- Reverse the elements of the original array.
- Reverse the elements from 0 −> N−1.
- Reverse the elements from N -> length − 1.

# Solution 2 
 - Runtime complexity: The runtime complexity of this solution is linear, O(n).

- Memory complexity: The runtime complexity of this solution is linear, O(n).

Here is how the solution works:

- Store the last N elements into a temporary array.
- Shift the original array towards the right by L−N places. Here, L is the length of the ​array.
- Copy the temporary array at the beginning of the original array.