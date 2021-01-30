let strRev = function(str, start, end) {
  if (!str || str.length < 2){
    return;
  }
  while (start < end ) {
    let temp = str[start];

    str = str.substr(0, start) + str[end] + str.substr(start + str[end].length);
    str = str.substr(0, end) + temp + str.substr(end + temp.length);

    start++;
    end--;
  }

  return str;
}

let reverseWords = function (sentence) {
  // sentence here is an array of characters
  sentence = strRev(sentence, 0, sentence.length - 1);

  let start = 0;
  let end = 0;

  while(true) {

    // find the  start index of a word while skipping spaces.
    while(sentence[start] === ' ') {
      start++;
    }
    
    if (start >= sentence.length) {
      break;
    }

    end = start + 1;

    // find the end index of the word.
    while(end < sentence.length && sentence[end] !== ' '){
      end++;
    }

    sentence = strRev(sentence, start, end - 1);
    start = end;
  }

  return sentence;
};

console.log(reverseWords('Williams Rivas'));