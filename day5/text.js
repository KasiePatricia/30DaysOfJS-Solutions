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
  return `The maximum value is ${max} and the minimum value is ${min}. the range ${range}`;
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

let middle = Math.floor(ages.length / 2);
console.log(ages[middle]);

let valueMinAvg = 19 - 22.8;
let valueMaxAvg = 26 - 22.8;
let valueAvg = Math.abs(valueMaxAvg - valueMinAvg);
console.log(valueAvg);

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
console.log(countries.join(" ").slice(0));
