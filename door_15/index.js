/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palidrome, return true. If it isn't, return false. 
*/

const str = "noon";

function reverseString(str) {
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  return (reverseString(str) === str ? true : false);
}


// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));

const originalWord = document.createElement("p");
originalWord.textContent = `Original string: ${str}`;
document.body.appendChild(originalWord);

const reversedWord = document.createElement("p");
reversedWord.textContent = `Reversed string: ${reverseString(str)}`;
document.body.appendChild(reversedWord);

const isPalindromeWord = document.createElement("p");
isPalindromeWord.textContent = `Is palindrome: ${isPalindrome(str)}`;
document.body.appendChild(isPalindromeWord);