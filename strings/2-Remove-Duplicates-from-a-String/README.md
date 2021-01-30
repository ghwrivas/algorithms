# Remove Duplicates from a String
Remove duplicate characters from a string which is passed by reference.

# Solution 1
 - Runtime complexity: The runtime complexity of this solution is linear,.

 - Memory complexity: The memory complexity of this solution is linear, O(n).

In this solution, we’ll keep two pointers or indices one for the current reading position and one for the current writing position. Whenever we encounter the first occurrence of a character, we add it to the HashSet. Any character already existing in the HashSet is skipped on any subsequent occurrence.

# Solution 2
 - Runtime complexity: The runtime complexity of this solution is quadratic, O(n^​2).

 - Memory complexity: The memory complexity of this solution is constant, O(1).

This algorithm does not require any extra memory. It maintains two pointers indices: one for the read position and one for the write position. For every character in the input string that is present in the sub-string [0, write_pos], we skip it; otherwise, we write the character at read_pos to write_pos.