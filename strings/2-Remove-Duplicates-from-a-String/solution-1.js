let replaceAt = function(string, index, character) {
  return string.substr(0, index) + character + string.substr(index + character.length);
}

let removeDuplicates = function(str) {
  const set = new Set([]);
  
  let writeIndex = 0;
  let readIndex = 0;

  while (readIndex < str.length){
    if (!set.has(str[readIndex])){
      set.add(str[readIndex]);
      str = replaceAt(str, writeIndex, str[readIndex]);
      writeIndex++;
    }
    readIndex++;
  }
  
  return str.substr(0, writeIndex);
};
