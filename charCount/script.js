/*

Challenge: charCount

Difficulty: Basic

Prompt:

- Write a function named charCount that accepts a single string argument and returns an object that represents the count of each character in the string.

- The returned object should have keys that represent the character with its value set to the how many times the character appears in the string argument.

- Upper and lower case characters should be counted separately.

- Space characters should be counted too.

Examples:

charCount('hello') //=> { h: 1, e: 1, l: 2, o: 1 }
charCount('Today is fantastic!') //=> { T: 1, o: 1, d: 1, a: 3, y: 1, ' ': 2, i: 2, s: 2, f: 1, n: 1, t: 2, c: 1, '!': 1 }

*/

// Your solution for charCount here:

function charCount(str1) {
    let countObj = {};
    for (let i = 0; i < str1.length; i++) {
      if(countObj) {
        if (countObj.hasOwnProperty(str1[i])) {
          countObj[str1[i]] += 1;
        } else {
          countObj[str1[i]] = 1;
        }
      } else {
        countObj[str1[i]] = 1;
      }
    }
    return countObj;
  }