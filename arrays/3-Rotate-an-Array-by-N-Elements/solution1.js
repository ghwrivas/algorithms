let reverseArray = function(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

let rotateArray = function(arr, n) {
  // Let's normalize rotations
  // if n > array size or n is negative.
  n = n % arr.length;
  console.log(n)
  if (n < 0) {
    // calculate the positive rotations needed.
    n = n + arr.length;
  }

  // Let's partition the array based on rotations 'n'.
  // For example: 1, 2, 3, 4, 5 where n = 2.
  // -> 5, 4, 3, 2, 1
  // -> 4, 5, 3, 2, 1
  // -> 4, 5, 1, 2, 3
  reverseArray(arr, 0, arr.length - 1);
  reverseArray(arr, 0, n - 1);
  reverseArray(arr, n, arr.length - 1);
  return arr;
};

let a = [1, 2, 3, 4, 5];

// console.log(rotateArray(a, -1));
console.log(rotateArray(a, -3));
// console.log(rotateArray(a, 3));