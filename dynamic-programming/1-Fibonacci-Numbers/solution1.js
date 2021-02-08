let getFibonacci = function(n) {  
  if (n === 0 || n === 1) return n;
  return getFibonacci(n - 2) + getFibonacci(n - 1)
};
