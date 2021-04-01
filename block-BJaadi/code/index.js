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
// strings.splice(0, 0, "called", "sentance" )
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "));
// - Remove the first word in the array (strings)
strings.shift();
console.log(strings);
//   - Find all the words that contain 'is' use string method 'includes'
let result = strings.filter((item) => item.includes("is"));

console.log(result);
// let result = strings.filter((item) => {
//   return item.includes("is");
// });
// console.log(result);
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
let largestNum = numbers.sort((a, b) => a - b).pop();
console.log(largestNum);
// console.log(sorted[sorted.length - 1]);
// - Find longest string in strings
let largestString = strings.sort((a, b) => a.length - b.length).pop();
console.log(largestString);

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
strings.unshift("New Word");
console.log(strings);
// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3, 7));
// - Make a subset of strings array ['a','collection']
console.log(strings.slice(3, 5));
// - Replace 12 & 18 with 1221 and 1881
final = numbers.map((num) => {
  if (num === 12) {
    return 1221;
  } else if (num === 18) {
    return 1881;
  } else {
    return num;
  }
});
console.log(final);
// - Replace words in strings array with the length of the word
let outcome = strings.map((str) => str.length);
console.log(outcome);
// - Find the sum of the length of words using above question
result = outcome.reduce((acum, cv) => {
  acum = acum + cv;
  return acum;
}, 0);
console.log(result);
// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jpd", lastname: "White" },
];
// - Find all customers whose firstname starts with 'J'
result = customers.filter((item) => item.firstname.startsWith("J"));

console.log(result);
// - Create new array with only first name
firstName = customers.map((item) => item.firstname);

console.log(firstName);
// - Create new array with all the full names (ex: "Joe Blogs")
customerFullName = customers.map(
  (item) => `${item.firstname} ${item.lastname}`
);

console.log(customerFullName);
// - Sort the array created above alphabetically
console.log([...customerFullName].sort());
// - Create a new array that contains only user who has at least one vowel in the firstname.
result = customers.filter((customer) => {
  if (
    customer.firstname.toLowerCase().includes("a") ||
    customer.firstname.toLowerCase().includes("e") ||
    customer.firstname.toLowerCase().includes("i") ||
    customer.firstname.toLowerCase().includes("o") ||
    customer.firstname.toLowerCase().includes("u")
  ) {
    return true;
  } else {
    return false;
  }
});
console.log(result);
