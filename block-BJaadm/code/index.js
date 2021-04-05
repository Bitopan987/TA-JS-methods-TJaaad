let persons = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
  { name: "John", grade: 17, sex: "M" },
  { name: "Arya", grade: 14, sex: "F" },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map((person) => {
  return person.name;
});
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((person) => {
  return person.grade;
});
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((person) => {
  return person.sex;
});
// Log the filtered named of people in peopleName that starts with 'J' or 'P'

console.log(
  peopleName.filter((word) => word.startsWith("J") || word.startsWith("P"))
);
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
console.log(
  peopleName
    .filter((word) => word.startsWith("A") || word.startsWith("C"))
    .map((l) => l.length)
);
// Log all the filtered male ('M') in persons array

persons.filter((male) => {
  if (male.sex === "M") {
    return true;
  }
});
// Log all the filtered female ('F') in persons array
console.log(persons.filter((female) => female.sex === "F"));
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
persons
  .filter((female) => female.sex === "F")
  .filter((word) => word.name.startsWith("C") || word.name.startsWith("J"));
// Log all the even numbers from peopleGrade array
console.log(peopleGrade.filter((num) => num % 2 === 0));
// Find the first name that starts with 'J' in persons array and log the object
let firstNameWithJ = persons.find((n) => n.name.startsWith("J"));
// Find the first name that starts with 'P' in persons array and log the object
let firstNameWithP = persons.find((n) => n.name.startsWith("P"));
// Find the first name that starts with 'J', grade is greater than 10 and is a female
let result = persons.find((n) => {
  return n.name.startsWith("J") && n.grade > 10 && n.sex === "F";
});
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((female) => female.sex === "F");
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((male) => male.sex === "M");
// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc, cv) => {
  return acc + cv;
}, 0);
// Find the average grade
gradeTotal / peopleGrade.length;
// Find the average grade of male
let maleGrade = persons
  .filter((person) => person.sex === "M")
  .map((m) => m.grade);
maleGrade.reduce((acc, cv) => {
  return acc + cv;
}, 0) / maleGrade.length;
// Find the average grade of female
let femaleGrade = persons
  .filter((person) => person.sex === "F")
  .map((m) => m.grade);
femaleGrade.reduce((acc, cv) => {
  return acc + cv;
}, 0) / femaleGrade.length;
// Find the highest grade
let highestGrade = [...peopleGrade].sort((a, b) => a - b).pop();
// Find the highest grade in male
let highestGradeMale = persons
  .filter((person) => person.sex === "M")
  .map((m) => m.grade);
[...highestGradeMale].sort((a, b) => a - b).pop();
// Find the highest grade in female
let highestGradeMale = persons
  .filter((person) => person.sex === "F")
  .map((m) => m.grade);
[...highestGradeMale].sort((a, b) => a - b).pop();
// Find the highest grade for people whose name starts with 'J' or 'P'
startwithJJ = persons
  .filter((word) => word.name.startsWith("J") || word.name.startsWith("P"))
  .map((m) => m.grade);
[...startwithJJ].sort((a, b) => a - b).pop();
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log([...peopleGrade].sort((a,b) => a - b))
// Sort the peopleGrade in descending order
console.log([...peopleGrade].sort((a,b) => b - a))
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log([...peopleGrade].sort((a,b) => b - a))
// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort();
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopleName].sort();