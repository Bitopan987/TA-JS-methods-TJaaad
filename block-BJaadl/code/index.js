let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
// function findLongestWord(arr) {
//   let longest = " ";
//   arr.map(function (str) {
//     if (str.length > longest.length) {
//       longest = str;
//     }
//   });
//   return longest;
// }

// let result = findLongestWord(words);

function findLongestWord(array) {
  return [...array].sort((a, b) => a.length - b.length).pop();
}
findLongestWord(words);
// - Convert the above array "words" into an array of length of word instead of word.
words.map((word) => word.length);
// - Create a new array that only contains word with atleast one vowel.
let checkVowel = words.filter((word) => {
  if (
    word.toLowerCase().includes("a") ||
    word.toLowerCase().includes("e") ||
    word.toLowerCase().includes("i") ||
    word.toLowerCase().includes("o") ||
    word.toLowerCase().includes("u")
  ) {
    return true;
  } else {
    return false;
  }
});
// - Find the index of the word "rhythm"
// words.indexOf("rhythm");
words.findIndex((w) => w === "rhythm");
// - Create a new array that contians words not starting with vowel.
let startWith = words.filter((word) => {
  if (
    word.toLowerCase().startsWith("a") ||
    word.toLowerCase().startsWith("e") ||
    word.toLowerCase().startsWith("i") ||
    word.toLowerCase().startsWith("o") ||
    word.toLowerCase().startsWith("u")
  ) {
    return false;
  } else {
    return true;
  }
});

let checkNotVowel = words.filter((word) => !checkVowel(word[0]));
// - Create a new array that contianse words not ending with vowel
let endWith = words.filter((word) => {
  if (
    word.toLowerCase().endsWith("a") ||
    word.toLowerCase().endsWith("e") ||
    word.toLowerCase().endsWith("i") ||
    word.toLowerCase().endsWith("o") ||
    word.toLowerCase().endsWith("u")
  ) {
    return false;
  } else {
    return true;
  }
});

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(arr) {
  return arr.reduce((accum, num) => {
    return accum + num;
  }, 0);
}
let sumOfArray = sumArray(numbers);
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
result = numbers.filter((number) => number % 3 === 0);
// - Create a new array that contains only even numbers
let evenNum = numbers.filter((number) => number % 2 === 0);
// - Create  a new array that contains only odd numbers.
let oddNum = numbers.filter((number) => number % 2 !== 0);
// - Create a new array that should have true for even number and false for odd numbers.
let isEvenorOdd = numbers.map((number) => {
  return number % 2 === 0 ? true : false;
});
// - Sort the above number in assending order.
[...numbers].sort((a, b) => a - b);
// - Does sort mutate the original array?
// yes it does.
// - Find the sum of the numbers in the array.
numbers.reduce((accum, cv) => {
  return accum + cv;
}, 0);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(arr) {
  let sum = arr.reduce((accum, cv) => {
    return accum + cv;
  });
  return sum / arr.length;
}
let avgeNum = averageNumbers(numbers);

let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageNumbers(arr) {
  let sum = arr.reduce((accum, cv) => {
    return accum + cv.length;
  }, 0);
  return sum / arr.length;
}
let avgeString = averageNumbers(strings);
