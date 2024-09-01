/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  return str.toLowerCase().replace(/[^a-z]/gi,'') === str.toLowerCase().replace(/[^a-z]/gi,'').split('').reverse().join('')

  /*
  if(str === "")
  return true

  str = str.toLowerCase().replace(/[^a-z]/gi, '') // /g->more than once, /i -> case insensitive
  let i, j = str.length-1

  for(i=0; i<j; i++,j--){
    if(str[i] !== str[j])
    return false
  }
  
  return true;
  */
}

module.exports = isPalindrome;
