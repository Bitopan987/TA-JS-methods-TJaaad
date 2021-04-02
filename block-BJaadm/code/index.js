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
  return person.sex;
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

let nameStartsWith = persons.filter((word) => {
  return word.name.startsWith("J") || word.name.startsWith("P");
});
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
nameStartsWith.map((w) => {
  return w.name.length;
});
// Log all the filtered male ('M') in persons array

persons.filter((male) => {
  if (male.sex === "M") {
    return true;
  }
});
// Log all the filtered female ('F') in persons array
persons.filter((female) => {
  if (female.sex === "F") {
    return true;
  }
});
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let nameStartsWithC = isFemale.filter((word) => {
  return word.name.startsWith("C") || word.name.startsWith("J");
});
// Log all the even numbers from peopleGrade array
let evenGrade = peopleGrade.filter((num) => {
  return num % 2 === 0;
});
// Find the first name that starts with 'J' in persons array and log the object
let firstNameWithJ = nameStartsWith.find((n) => {
  return n.name.startsWith("J");
});
// Find the first name that starts with 'P' in persons array and log the object
let firstNameWithP = nameStartsWith.find((n) => {
  return n.name.startsWith("P");
});
// Find the first name that starts with 'J', grade is greater than 10 and is a female
firstNameWithJ = nameStartsWith.find((n) => {
  return n.name.startsWith("J") && n.grade > 10 && n.sex === "F";
});
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((female) => {
  if (female.sex === "F") {
    return true;
  }
});
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((male) => {
  if (male.sex === "M") {
    return true;
  }
});
// Find the sum of all grades and store in gradeTotal

// Find the average grade

// Find the average grade of male

// Find the average grade of female

// Find the highest grade

// Find the highest grade in male

// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

// Sort the peopleGrade in descending order

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

// Sort the array peopelName in ascending `ABCD..Za....z`

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
