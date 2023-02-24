// Exercises

// Exercises: Level 1

/* 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.
*/ 
// let userAge = parseInt(prompt("Enter your age:"));
let userAge =17
if(userAge >= 18){
    console.log("You are old enough to drive")
} else {
    console.log(`You are left with ${18 - userAge} year(s) to drive.`)
}

/* 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me.
*/
// let myAge = parseInt(prompt("Enter your age:"));
// let yourAge = parseInt(prompt("Enter your age:"));
myAge = 35
yourAge= 35

if(myAge > yourAge){
    console.log(`I'm ${myAge - yourAge} year(s) older than you`)
} else if (myAge < yourAge) {
    console.log(`Your are ${yourAge - myAge} year(s) older than me`)
} else {
    console.log("We are age mates");
}

/* 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3
*/

//using if else
    let a = 4
    let b = 3
    if(a > b){
        console.log(`${a} is greater than ${b}`);
    }else {
        console.log(`${a}  is less than ${b}`)
    }
//using ternary operator
    a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a}  is less than ${b}`);

/* 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.
*/

let num = 5;
if(num % 2 === 0){
    console.log(`${num} is an even number`)
} else {
    console.log(`${num} is an odd number`)
}

// Exercises: Level 2
/* 1. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
let score = 42;
if(score >= 80){
    console.log("A")
} else if(score >= 70) {
    console.log("B")
} else if(score >= 60) {
    console.log("C")
} else if(score >= 50) {
    console.log("D")
}else{
    console.log("F")
}

/* 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/
let season;
let month = "October";
switch (month.toLowerCase()) {
    case 'september':
    case 'october':
    case 'november':
        season = "The season is Autumn.";
        break;
    case 'december':
    case 'january':
    case 'february':
        season = "The season is Winter.";
        break;
    case 'march':
    case 'april':
    case 'may':
        season = "The season is Spring.";
        break;
    case 'june':
    case 'july':
    case 'august':
        season = "The season is Summer.";
        break;
    default:
        season = "Invalid season";
        break;
}
console.log(season)

/* 3. Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
*/
let day = "monday";
let week;
let day2 = day.charAt(0).toUpperCase() + day.slice(1);
switch (day.toLowerCase()) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        week = `${day2} is a working day.`;
        break;
    case 'saturday':
    case 'sunday':
        week = `${day2} is a weekend`;
    default:
        week = 'Invalid day';
        break;
}
console.log(week);

// Exercises: Level 3

/* 1. Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
*/

monthYear = 'february';
let dayYear;

monthYear2 = monthYear.charAt(0).toUpperCase() + monthYear.slice(1);

switch (monthYear.toLowerCase()) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        dayYear = `${monthYear2} has 31 days.`;
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        dayYear = `${monthYear2} has 30 days.`;
        break;
    case 'february':
        dayYear = `${monthYear2} has 28 days.`;
        break;
    default:
        dayYear = 'Invalid day'
        break;
}

console.log(dayYear);


// 2. Write a program which tells the number of days in a month, now consider leap year.

monthYear = 'february';
theYear = 2016;
dayYear;

switch (monthYear.toLowerCase()) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        dayYear = `${monthYear2} has 31 days.`;
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        dayYear = `${monthYear2} has 30 days.`;
        break;
    case 'february':
        if ((theYear % 4 == 0 && !(theYear % 100 == 0)) || theYear % 400 == 0) {
            dayYear = `${monthYear2} has 29 days.`;
          } else {
            dayYear = `${monthYear2} has 28 days.`;
          }
        break;
    default:
        dayYear = 'Invalid day'
        break;
}

console.log(dayYear);
