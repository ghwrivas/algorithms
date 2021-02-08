let getFibonacci = function(n) {  
  if (n === 0 || n === 1) return n;

  let f1 = 0;
  let f2 = 1; 
  let res = 0;

  let i = 2;
  while(i <= n) {
    res = f2 + f1;
    f1 = f2;
    f2 = res;
    i++;
  }
  return res;
};