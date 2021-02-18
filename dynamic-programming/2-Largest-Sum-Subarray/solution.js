let findMaxSumSubArray = function(A) {
  let currentMax = A[0];
  let globalMax = A[0];
  let startIndex = 0;
  let endIndex = 0;
  for (let i = 0; i < A.length; i++){
    if(currentMax < 0) {
      currentMax = A[i];
      startIndex = i;
    } else {
      currentMax += A[i];
    }
    if (globalMax < currentMax) {
      globalMax = currentMax;
      endIndex = i;
    }
  }
  console.log(`startIndex: ${startIndex}, endIndex: ${endIndex}`);
  return globalMax;
};

let v = [-4, 2, 5, 1, 2, 3, -6, -5, 1];
console.log("Sum of largest subarray: " + findMaxSumSubArray(v));