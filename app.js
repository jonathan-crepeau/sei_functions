// console.log('Fear is the mind killer.');

// ANCHOR Function Exercises

// SECTION Exercise #1: Write a function that uses a for loop to log a count from 25 to 11, then call that function.

// const countFunction = () => {
//   for (let i = 25; i > 10; i--) {
//     console.log(i);
//   }
// }

// countFunction();


// SECTION Rewrite the above function so that the for loop in the funtion starts counting down from the number provided as an argument when the function is called:

// const countingFunction = (userNum) => {
//   if (typeof userNum == 'number') {
//     for (let i = userNum; i > 10; i--) {
//       console.log(i);
//     }
//   } else {
//     console.log('not a number');
//   }
// }
// countingFunction(70);


// SECTION Exercise #3: Write a function, 'printSum', that will log the result of 10+10:

// const printSum = () => {
//   console.log(10+10);
// }
// printSum();


// SECTION Exercise #4: Write a function, 'printTriange', that will print five lines of pound signs:

// NOTE - Remember that with a for loop, any variable declared within the loop's block resets with every iteration. That's why I had to create the pound variable within the function block so it remembers the alterations (adding a # sign per iteration) I'm making to it.

// const printTriangle = () => {
//   let pound = '#';
//   for (let i = 0; i < 6; i++) {
//     console.log(pound);
//     pound = pound + '#';
//   }
// }
// printTriangle();


// SECTION Exercise #5: Write a function, 'printParameter', that takes a parameter, 'input'. The function shoud simply log the input parameter.

// const printParameter = (input) => {
//   console.log(input);
// }
// printParameter('Luna');
// printParameter('Jonathan');


// SECTION Exercise #6 Write a function, 'minusOne', that takes a parameter 'num'. Assuming the argument is a number, print the argument minus one:

// const minusOne = (num) => {
//   if (typeof num != 'number') {
//     console.log('Must enter a number as an argument.');
//   } else {
//     console.log(num - 1);
//   }
// }
// minusOne(10);
// minusOne('luna');


// SECTION Exercise #7 Write a function, 'getLastElement', that takes the parameter 'arr'. Invoke the function with a filled array as the argument, the function should print the last element within the array.

// const getLastElement = (arr) => {
//   console.log(arr[arr.length - 1]);
// }
// getLastElement(['Luna', 'Jonathan', 'Jeremy']);
// getLastElement(['Ryan', 'Michele', 'Bruce']);
// getLastElement(['Aang', 'Katara', 'Sokka', 'Toph']);


// SECTION Exercise #8: Write a function, 'makeSentence', that takes three parameters and interpolates them into a sentence:

// const makeSentence = (word1, word2, word3) => {
//   console.log(word1 + ' ' + word2 + ' ' + word3 + '.');
// }
// makeSentence('Jonathan', 'is', 'tall');


// SECTION Exercise #9: Write a function, 'divideThreeNums', that takes three parameters and prints the third parameter divided by the resut of the second parameter divided by the first:

// 3 / (2/1) 

// const divideThreeNums = (num1, num2, num3) => {
//   console.log(num3/(num2/num1));
// }
// divideThreeNums(8, 4, 2);
// divideThreeNums(20, 4, 2);


// SECTION Exercise #10: A function is only DEFINED if it has a return value. Rewrite the multiply function from an above example to return the value of the two parameters multiplied: 

// const multiply = (num1, num2) => {
//   return num1 * num2;
// }
// let answer = multiply(6, 10);
// console.log(answer);

// NOTE Since the multiply function above returns a value, we can use the return of multiply as an argument:

// console.log(multiply(multiply(2, 3), multiply(3, 4)));


// SECTION Exercise #11: Write a function, 'calculateArea', that takes two parameters, 'width' and 'length', and multiplies them. This wil give us the area of a rectangle:

// const calculateArea = (width, length) => {
//   return width * length;
// }
// console.log(calculateArea(10, 30));
// console.log(calculateArea(3, 11));


// SECTION Exercise #12: Write a function that takes three numbers as parameters and totals them together, then converts the numbers into a string and returns the string ('123'):

// const numToString = (num1, num2, num3) => {
//   let sum = num1 + num2 + num3;
//   return sum.toString();
// }
// console.log(typeof numToString(2, 3, 5));
// console.log(numToString(2, 3, 5));
// console.log(numToString(7, 3, 12));


// SECTION Exercise #13: Write a function that takes two strings as parameteres and returns 'true' (boolean) if the two strings are identical, and false if not:

// const identicalStringCheck = (string1, string2) => {
//   if (string1 === string2) return true;
//   return false;
// }
// console.log(identicalStringCheck('luna', 'luna'));
// console.log(identicalStringCheck('luna', 'Luna'));
// console.log(identicalStringCheck('luna', 'Jonathan'));

// NOTE If you supply MORE arguments than there are parameters, the function will use the first 2 arguments provided and ignore the rest:
// console.log(identicalStringCheck('luna', 'luna', 'Jonathan', 'Jeremy'));

// NOTE If you supply fewer areguments than there are parameters, the function will default to false for the conditional statement (using the strict equality operator) not being met:
// console.log(identicalStringCheck('luna'));


// SECTION Write a function to determine if a word is a palindrome:

// const checkIfPalindrome = (input) => {
//   if (input === input.split('').reverse().join('')) return true;
//   return false;
// }

// console.log(checkIfPalindrome('jeremy'));
// console.log(checkIfPalindrome('luna'));
// console.log(checkIfPalindrome('racecar'));
// console.log(checkIfPalindrome('Racecar'));


// SECTION Exercise #14: Write a function that takes two strings as a parameter

// const sentence = "The cat jumped over the moon."
// const regex = /[A-Z]/g;
// console.log(sentence.match());

// const regex = /[A-Z]/g;

// const useMatchMethod = (string, pattern) => {
//   const reversedString = string.split('').reverse().join('');
//   if (reversedString.match(pattern)) return true;
//   return false;
// }
// console.log(useMatchMethod('Jonathan', regex));
// console.log(useMatchMethod('jonathan', regex));

// console.log(useMatchMethod('Wilmington', 'ton'));
// console.log(useMatchMethod('Wilmington', 'not'));