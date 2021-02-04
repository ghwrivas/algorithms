# Find all Palindrome Substrings
Given a string, find all substrings that are palindromes.

# Solution 1
 - Runtime complexity: The runtime complexity of this solution is polynomial O(n^3)

 - Memory complexity: The memory complexity of this solution is constant, O(1).

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backwards as it reads forwards.

# Solution 2
 - Runtime complexity: The runtime complexity of this solution is polinomial, O(n^​2).

 - Memory complexity: The memory complexity of this solution is constant, O(1).

We can reduce the runtime complexity of this algorithm to O(n^2) from O(n^3)  by using the following approach.

For each letter in the input string, start expanding to the left and right while checking for even and odd length palindromes. Move to the next letter if we know a palindrome doesn’t exist.

We expand one character to the left and right and compare them. If both of them are equal, we print out the palindrome substring.