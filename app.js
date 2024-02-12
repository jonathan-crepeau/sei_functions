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


// 