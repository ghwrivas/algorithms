# Find the Smallest Common Number
Given three integer arrays sorted in ascending order, return the smallest number that is common in all three arrays. Return -1 if the smallest common number is not found.

# Solution
 - Runtime complexity: The runtime complexity of this solution is linear, O(n).

 - Memory complexity: The memory complexity of this solution is constant, O(1).

# Here is how the solution works:
We will use three iterators simultaneously to traverse each of the arrays. We can start by traversing the arrays starting from the 0th index, which will have the smallest value of each array.

If the values at the array indices pointed to by the three iterators are equal, that’s the solution since that will be the smallest value (as arrays are sorted in ascending order) present in all of the arrays. Then, we’ll return the value.

Otherwise, we’ll see which iterator amongst the three points to the smallest value and will increment that iterator so that it will point to the next index.

If any of the three iterators reaches the end of the array while we haven’t found the common number, we’ll return -1.
