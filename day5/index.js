import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";

console.log(countries);
// Exercise: Level 1

// 1. Declare an empty array;
const arr = [];

// 2. Declare an array with more than 5 number of elements
const moreThanFiveNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 3. Find the length of your array
console.log(moreThanFiveNum.length);

// 4. Get the first item, the middle item and the last item of the array
console.log(moreThanFiveNum[0]);
console.log(moreThanFiveNum[Math.floor(moreThanFiveNum.length / 2)]);
console.log(moreThanFiveNum[moreThanFiveNum.length - 1]);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
  "bags",
  12,
  true,
  [1, 2, 3],
  { firstName: "Kassy", lastName: "Ugwu" },
  322,
];
console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

// 10. Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// 11. Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const arrSentence = `${itCompanies
  .slice(0, -1)
  .join(", ")} and ${itCompanies.slice(-1)} are big IT companies.`;
console.log(arrSentence);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const checkCompany = function (arr, company) {
  if (arr.includes(company)) {
    return company;
  } else {
    return `${company} is not found`;
  }
};

console.log(checkCompany(itCompanies, "Facebook"));
console.log(checkCompany(itCompanies, "Range"));

// 14. Filter out companies which have more than one 'o' without the filter method
// for (let i = 0; i < itCompanies.length; i++) {
//   let pattern = /o/g;
// }

// 15. Sort the array using sort() method
console.log(itCompanies.sort());

// 16. Reverse the array using reverse() method
console.log(itCompanies.reverse()); // [ 'Oracle', 'Microsoft', 'IBM', 'Google', 'Facebook', 'Apple', 'Amazon' ]

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(3)); // [ 'Google', 'Facebook', 'Apple', 'Amazon' ]

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(0, 4)); // [ 'Oracle', 'Microsoft', 'IBM', 'Google']

// 19. Slice out the middle IT company or companies from the array
const middleIndex = Math.floor(itCompanies.length / 2);
console.log(middleIndex);
console.log(itCompanies);
itCompanies.splice(middleIndex, 1); // ask Eddy
console.log(itCompanies);

// 20. Remove the first IT company from the array
console.log(itCompanies.slice(1));

// 21. Remove the middle IT company or companies from the array
itCompanies.splice(middleIndex, 1);
console.log(itCompanies);

// 22. Remove the last IT company from the array
console.log(itCompanies.slice(0, 6));

// 23. Remove all IT companies
console.log(itCompanies.slice(0, 0));

// Exercise: Level 2
// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

//Done

// 2. First remove all the punctuations and change the string to array and count the number of words in the array

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
console.log(words.split(" ")); // ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
console.log(words.split(" ").length); // 13

// 3.In the following shopping cart add, remove, edit items

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
/* add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea' 
*/
const foodCart = function (arr, food) {
  if (!arr.includes(food)) {
    return arr.unshift(food);
  }
};
console.log(foodCart(shoppingCart, "Meat"));

const checkSugar = function (arr, food) {
  if (!arr.includes(food)) {
    return arr.push(food);
  }
};
console.log(checkSugar(shoppingCart, "Sugar"));

console.log(shoppingCart);

shoppingCart.splice(3, 1, "Green Tea");
console.log(shoppingCart);

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countryExists = function (arr, country) {
  if (arr.includes(country)) {
    return `${country.toUpperCase()}`;
  } else {
    arr.push(country);
    return arr;
  }
};

console.log(countryExists(countries, "Ethiopia"));

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const itExists = function (arr, tech) {
  if (arr.includes(tech)) {
    return `${tech} is a CSS preprocess.`;
  } else {
    arr.push(tech);
    return arr;
  }
};

console.log(itExists(webTechs, "Sass"));

// 6. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack); // ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// Exercise: Level 3

/* 1. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((a, b) => a - b);
console.log(ages);

const minmax = function (arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  let range = max - min;
  return `The maximum value is ${max} and the minimum value is ${min}. The range ${range}`;
};

console.log(minmax(ages));

const average = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return avg;
};

console.log(average(ages));

//Find the median age(one middle item or two middle items divided by two)

let middle = Math.floor(ages.length / 2);
console.log(ages[middle]);

// Compare the value of (min - average) and (max - average), use abs() method
let valueMinAvg = 19 - 22.8;
let valueMaxAvg = 26 - 22.8;
let valueAvg = Math.abs(valueMaxAvg - valueMinAvg);

// 1. Slice the first ten countries from the countries array
countries.slice(10);

// 2. Find the middle country(ies) in the countries array
let cMiddle = Math.floor(countries.length / 2);
console.log(countries[cMiddle]);

// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
