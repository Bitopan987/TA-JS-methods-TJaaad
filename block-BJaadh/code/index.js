// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));
// - Add two new words in the strings array "called" and "sentance"
strings.push("called", "sentance");
console.log(strings);
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "));
// - Remove the first word in the array (strings)
strings.shift();
console.log(strings);
// - Find all the words that contain 'is' use string method 'includes'
let result = strings.filter((item) => {
  return item.includes("is");
});
console.log(result);
// - Find all the words that contain 'is' use string method 'indexOf'
result = strings.filter((item) => {
  return item.indexOf("is") !== -1;
});
console.log(result);
// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every((num) => {
  console.log(num % 3 === 0);
});
// -  Sort Array from smallest to largest
let sorted = [...numbers].sort((a, b) => {
  return a - b;
});
console.log(sorted);
// function compare(a, b) {
//   return a - b;
// }
// numbers.sort(compare);
// console.log(numbers);
// - Remove the last word in strings
strings.pop();
console.log(strings);
// - Find largest number in numbers
console.log(sorted[sorted.length - 1]);
// - Find longest string in strings
// let finalResult = function longestNum(arr) {
//   let longest = " ";
//   arr.map((str) => {
//     if (str.length > longest.length) {
//       longest = str;
//     }
//     return longest;
//   });
// };
// longestNum(strings);
// console.log(finalResult);
// - Find all the even numbers
let evenNum = numbers.filter((num) => {
  return num % 2 === 0;
});
console.log(evenNum);
// - Find all the odd numbers
let oddNum = numbers.filter((num) => {
  return num % 2 !== 0;
});
console.log(oddNum);
// - Place a new word at the start of the array use (unshift)
strings.unshift("What");
console.log(strings);
// - Make a subset of numbers array [18,9,7,11]

// - Make a subset of strings array ['a','collection']

// - Replace 12 & 18 with 1221 and 1881
let final1 = numbers.replace(12, 1221);
let final2 = numbers.replace(18, 1881);
console.log(final1, final2);
// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" },
];
// - Find all customers whose firstname starts with 'J'

// - Create new array with only first name

// - Create new array with all the full names (ex: "Joe Blogs")

// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.
