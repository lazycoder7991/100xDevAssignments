/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  /*
  if(str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join(''))
  return true
  else return false
  */

  
  let arr1 = new Array(255).fill(0)
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()

  if(str1.length !== str2.length)
  return false

  for(let i=0;i<str1.length;i++){
    arr1[str1.charCodeAt(i)]++
    arr1[str2.charCodeAt(i)]--
  }
  
  return arr1.every(count => count === 0)
}



module.exports = isAnagram;
