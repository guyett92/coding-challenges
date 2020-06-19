/* 
Challenge: reverseUpcaseString

Difficulty: Basic

Prompt:

- Write a function called reverseUpcaseString that accepts a single string argument, then returns the string with its characters in reverse order and converts all characters to uppercase.

Examples:

reverseUpcaseString("SEIR-Flex Rocks!"); //=> "!SKCOR XELF-RIES" 
*/

// Your solution for reverseUpcaseString here:

function reverseUpcaseString(str1) {
    let arr = [];
    for (let i = 0; i < str1.length; i++) {
        arr.unshift(str1[i])
    }
    return arr.join('').toUpperCase();
  }