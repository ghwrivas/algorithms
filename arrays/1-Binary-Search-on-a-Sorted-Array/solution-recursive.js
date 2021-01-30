let binarySearchRec = function(a, key, low, high) {

    let mid = low + Math.floor((high - low) / 2);
  
    if (low > high) {
      return -1;
    }
  
    if (a[mid] === key) {
      return mid;
    }
  
    if (a[mid] > key) {
      high = mid - 1;
    }
  
    if (a[mid] < key) {
      low = mid + 1;
    }
  
    return binarySearchRec(a, key, low, high);
  };
  
  let binarySearch = function(a, key) {
    let high = a.length - 1;
    let low = 0;
  
    return binarySearchRec(a, key, low, high );
  }
  
  
  console.log(binarySearch([1,2,4,7,8,12,15,19,24,50,69,80,100], 12))
  console.log(binarySearch([1,2,4,7,8,12,15,19,24,50,69,80,100], 44))
  console.log(binarySearch([1,2,4,7,8,12,15,19,24,50,69,80,100], 80))