let isPalindrome = function (input, i, j) {
  while (j > i) {
    if (input[i] != input[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

let findAllPalindromeSubstrings = function (input) {
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (isPalindrome(input, i, j)) {
        console.log(input.substring(i, j + 1));
        count++;
      }
    }
  }
  return count;
};

let palindrome = "aabbbaa";

let palindrome_count = findAllPalindromeSubstrings(palindrome);
console.log("Total palindrom substrings: ", palindrome_count);
