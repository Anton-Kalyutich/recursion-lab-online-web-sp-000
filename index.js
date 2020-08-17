function printString(string) {
  console.log(string[0]);
  
  if (string.length > 1) {
     let substring = string.substring(1, string.length);
     printString(substring);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string.length > 1) {
    string = reverseString(string.slice(1)) + string.charAt(0);
  } else {
    return string;
  }
  return string;
}

function isPalindrome (string) {
  
}

function addUpTo(array, index) {
  let sum = 0;
  if (array.length > 1) {
    let sum = array[0] + addUpTo(array.slice(1, index + 1));
  } else {
    return array[0] || 0;
  }
  return sum;
}

function includesNumber() {
  
}