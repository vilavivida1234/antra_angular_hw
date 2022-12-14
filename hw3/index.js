// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223

function reverseNumber(num) {
  let numArr = num.toString().split("").reverse().join("");
  return Number(numArr);
}

console.log(reverseNumber(32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run.

function checkPalindrome(str) {
  str = str.replace(" ", "");
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] != str[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
}

console.log(checkPalindrome("madam"));
console.log(checkPalindrome("nurses run"));

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d, do, dog, o, og, g

function generateCombinations(str) {
  let output = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      output.push(str.slice(i, j));
    }
  }
  return output;
}

console.log(generateCombinations("dog"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function sortLetters(str) {
  return str.split("").sort().join("");
}

console.log(sortLetters("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '

function toUpperCase(str) {
  let output = [];

  for (let word of str.split(" ")) {
    word = word[0].toUpperCase() + word.slice(1);
    output.push(word);
  }
  return output.join(" ");
}

console.log(toUpperCase("the quick brown fox"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'
function findLongestWord(str) {
  let longest = "";

  for (let word of str.split(" ")) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log(findLongestWord("Web Development Tutorial"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string.
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5

function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelsSet = new Set(vowels);
  let output = 0;
  for (let char of str) {
    if (vowelsSet.has(char)) {
      output++;
    }
  }
  return output;
}

console.log(countVowels("The quick brown fox"));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.
function checkPrime(num) {
  if (!Number.isInteger(num)) return false;

  let isPrime = true;
  if (num === 1) {
    isPrime = false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  return isPrime;
}

console.log(checkPrime(13));
console.log(checkPrime(24));

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string,
// and undefined.

function checkType(arg) {
  return typeof arg;
}

let a = () => {};
console.log(checkType(a));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function createMatrix(n) {
  let output = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    output[i] = new Array(n).fill(0);
  }
  return output;
}

console.log(createMatrix(4));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively.
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4

function findNumbers(arr) {
  arr = arr.sort((a, b) => a - b);

  return [arr[1], arr[arr.length - 2]];
}

console.log(findNumbers([1, 2, 3, 4, 5]));

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
// the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
// number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
// half the sum of all of its positive divisors (including itself).

// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
// + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
// 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
// perfect numbers 496 and 8128.

function checkPerfectNumber(num) {
  if (num === 1) return false;

  let temp = [];

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      temp.push(i);
    }
  }

  let s = temp.reduce((a, b) => a + b);

  return s === num;
}

console.log(checkPerfectNumber(6));

// 13. Write a JavaScript function to compute the factors of a positive integer.

function findFactors(num) {
  let output = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) output.push(i);
  }
  return output;
}

console.log(findFactors(20));
console.log(findFactors(8));

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output: 25, 10, 10, 1

function convertCoins(amount, coins) {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      let amountLeft = amount - coins[0];
      return [coins[0]].concat(convertCoins(amountLeft, coins));
    } else {
      coins.shift();
      return convertCoins(amount, coins);
    }
  }
}

console.log(convertCoins(46, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases. Accept b and n from the user and display the result.

function pow(b, n) {
  if (n < 0) {
    return pow(1 / b, -n);
  } else if (n === 0) {
    return 1;
  } else if (n === 1) {
    return b;
  } else if (n % 2 === 1) {
    return b * pow(b * b, Math.floor(n / 2));
  } else {
    return pow(b * b, n / 2);
  }
}
console.log(pow(2, 5));

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

function extractUniqueChars(str) {
  let set = new Set();
  let output = "";
  for (let char of str) {
    if (!set.has(char)) output += char;
    set.add(char);
  }
  return output;
}

console.log(extractUniqueChars("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

function countChars(str) {
  let map = new Map();
  for (let char of str) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }
  return map;
}

console.log(countChars("abbbcccdef"));

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
// the desired value.

function binarySearch(target, arr) {
  arr = arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  // if the target number does not exist in the array:
  return -1;
}
console.log(binarySearch(5, [1, 2, 3, 4, 5]));

// 19. Write a JavaScript function that returns array elements larger than a number.

function findLargerNumber(arr, target) {
  let output = [];
  for (let num of arr) {
    if (num > target) {
      output.push(num);
    }
  }
  return output;
}

console.log(findLargerNumber([10, 40, 5, 9], 8));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample   character   list:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function generateID(len) {
  let output = "";
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < len; i++) {
    output += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return output;
}

console.log(generateID(10));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array.
// Sample array: [1, 2, 3] and subset length is 2
// Expected output: [[2, 1], [3, 1], [3, 2]]

function subset(nums, len) {
  let output = [];

  let temp = [];
  function backTracking(startIndex) {
    if (startIndex === nums.length) {
      if (temp.length === len) output.push([...temp]);
      return;
    }

    // decision to include nums[startIndex]
    temp.push(nums[startIndex]);
    backTracking(startIndex + 1);
    temp.pop();

    // decision to not include nums[startIndex]
    backTracking(startIndex + 1);
  }
  backTracking(0);
  return output;
}

console.log(subset([1, 2, 3], 2));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string.
// Sample arguments: 'microsoft.com', 'o'
// Expected output: 3

function countChar(str, letter) {
  let map = new Map();
  for (let char of str) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }
  return map.has(letter) ? map.get(letter) : 0;
}
console.log(countChar("microsoft.com", "o"));
console.log(countChar("microsoft.com", "a"));

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments: 'abacddbec'
// Expected output: 'e'

function findFirstNonRepeated(str) {
  let freqMap = countChars(str);
  for (let char of str) {
    if (freqMap.get(char) === 1) {
      return char;
    }
  }
  return -1;
}
console.log(findFirstNonRepeated("abacddbec"));

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
// sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
// each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log(
  bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);

// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output.
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

function LongestCountryName(countries) {
  let temp = "";
  for (let country of countries) {
    if (country.length > temp.length) {
      temp = country;
    }
  }
  return temp;
}

console.log(
  LongestCountryName(["Australia", "Germany", "United States of America"])
);
// 26. Write a JavaScript function to find longest substring in a given a string without repeating
// characters.

function longestSubstring(s) {
  let start = 0;
  let maxLen = 0;
  let maxStr = "";

  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) map[s[i]]++;
    else map[s[i]] = 1;

    while (map[s[i]] > 1) {
      map[s[start]]--;
      start++;
    }

    let tempLen = i - start + 1;

    if (tempLen > maxLen) {
      maxLen = tempLen;
      maxStr = s.slice(start, i + 1);
    }
  }
  return maxStr;
}

console.log(longestSubstring("abcdefgadd"));

// 27. Write a JavaScript function that returns the longest palindrome in a given string.

// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
// symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
// given string that is also a palindrome. For example, the longest palindromic substring of
// "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
// example, in the string "abracadabra", there is no palindromic substring with length greater than
// three, but there are two palindromic substrings with length three, namely, "aca" and "ada".

// In some applications it may be necessary to return all maximal palindromic substrings (that is, all
// substrings that are themselves palindromes and cannot be extended to larger palindromic
// substrings) rather than returning only one substring or returning the maximum length of a
// palindromic substring.

function longestPalindrome(s) {
  let maxLen = -Infinity;
  let output = [];

  for (let i = 0; i < s.length; i++) {
    helper(i, i);
    helper(i, i + 1);
  }

  function helper(i, j) {
    while (s[i] === s[j] && i >= 0 && j < s.length) {
      let tempLen = j - i + 1;
      if (tempLen > maxLen) {
        maxLen = tempLen;
        output = [];
        output.push(s.slice(i, j + 1));
      } else if (tempLen == maxLen) {
        output.push(s.slice(i, j + 1));
      }
      i--;
      j++;
    }
  }

  return output;
}

console.log(longestPalindrome("abracadabra"));
console.log(longestPalindrome("abcbaecea"));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

let foo = function (x) {
  console.log(x);
};
function cb(func) {
  func("Hello World.");
}

cb(foo);

// 29. Write a JavaScript function to get the function name.

function getFunctionName(cb) {
  return cb.name;
}
console.log(getFunctionName(foo));
