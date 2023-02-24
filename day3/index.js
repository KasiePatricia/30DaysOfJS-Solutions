// Day 3: Exercises

// Exercises: Level 1
// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Kasie";
let lastName = "Ugwu";
let county = "Canada";
let city = "London";
let age = 30;
let isMarried = true;
let year = 2023;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof county);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2. Check if type of '10' is equal to 10
console.log('10' === 10);

// 3. Check if parseInt('9.8') is equal to 10
console.log(9.8 == 10);

/* 4. Boolean value is either true or false.

 i. Write three JavaScript statement which provide truthy value.
 ii. Write three JavaScript statement which provide falsy value.
*/
/*Answer
    Truthy values
        All numbers(positive and negative) are truthy except zero
        All strings are truthy except an empty string ('')
        The boolean true
    Falsy values
        0
        null
        undefined
        NaN
*/

/* 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

    4 > 3
    4 >= 3
    4 < 3
    4 <= 3
    4 == 4
    4 === 4
    4 != 4
    4 !== 4
    4 != '4'
    4 == '4'
    4 === '4'
    Find the length of python and jargon and make a falsy comparison statement.
*/
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 !== '4');
console.log(4 === '4');
console.log('python'.length != 'jargon'.length);

/* 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

    4 > 3 && 10 < 12
    4 > 3 && 10 > 12
    4 > 3 || 10 < 12
    4 > 3 || 10 > 12
    !(4 > 3)
    !(4 < 3)
    !(false)
    !(4 > 3 && 10 < 12)
    !(4 > 3 && 10 > 12)
    !(4 === '4')
    There is no 'on' in both dragon and python
*/
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

/* 7. Use the Date object to do the following activities

    What is the year today?
    What is the month today as a number?
    What is the date today?
    What is the day today as a number?
    What is the hours now?
    What is the minutes now?
    Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/
let now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());


// Exercises: Level 2

/* 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 100
*/
let base = parseFloat(prompt("Enter the base of the triangle: ")); 
let height = parseFloat(prompt("Enter the height of the triangle: ")); 
let area = 0.5 * base * height;
console.log("The area of the triangle is " + area);


/* 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
*/
let a = parseFloat(prompt("Enter side a of the triangle: ")); 
let b = parseFloat(prompt("Enter side b of the triangle: ")); 
let c = parseFloat(prompt("Enter side c of the triangle: ")); 

let perimeter = a + b + c;
console.log("The perimeter of the triangle is " + perimeter);

/* 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
*/
let length = parseFloat(prompt("Enter the base of the rectangle: ")); 
let width = parseFloat(prompt("Enter the height of the rectangle: ")); 
let areaRec = length * width;
let perimeterRec = 2 * (lenght + width);
console.log("The area of the rectangle is " + areaRec);
console.log("The perimeter of the rectangle is " + perimeterRec);


// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = parseFloat(prompt("Enter the radius of the circle: ")); 
let areaCircle = 3.14 * radius * radius;
let circumference = 2 * 3.14 * radius;
console.log("The area of the circle is " + areaCircle);
console.log("The circumference of the circle is " + circumference);

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2

/* 
    y = mx + c
    slope = 2
    for x-intercept: y = 0, 
        0 = 2x - 2
        2 = 2x
        x = 1
        (1, 0)
    for y-intercept: x = 0,
        y = 0 - 2
        y = -2
        (0, -2)
*/

// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// 7. Compare the slope of above two questions.

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

/* 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
*/

let userHours = parseInt(prompt("Enter your hours: ")); 
let ratePerHour = parseInt(prompt("Enter your rate per hour: "));

let weeklyEarning = userHours * ratePerHour;
console.log(weeklyEarning);

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.

let lenghtOfName = "Kasie";
lenghtOfName > 7 ? console.log("My name is long"): console.log("My name is short")

/* 11. Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetaye
*/

let firstName2 = 'Kasie';
let lastName2 = 'Ugwu';
firstName2 > lastName2 ? console.log(`My first name, ${firstName2} is longer than my family name ${lastName2}, Yetaye`): console.log(`My first name, ${firstName2} is longer than my family name, ${lastName2}`)


/* 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
I am 225 years older than you.
*/

let myAge = 30;
let yourAge = 25;
let ageDifference = myAge - yourAge;
myAge > yourAge ? console.log(`I am ${ageDifference} years older than you.`): console.log(`I am ${ageDifference}  years older than you.`)


/* 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
*/

let birthyear = parseInt(prompt("Enter your year of birth: "));
// let birthyear = 2009
let currentYear = new Date().getFullYear();
let currentAge = currentYear - birthyear;
console.log(currentAge);

currentAge >= 18 ? console.log(`You are ${currentAge}. You are old enough to drive.`) : console.log(`You are ${currentAge}. You will be allowed to drive after ${18 - currentAge} year(s).`); 

/* 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

Enter number of years you live: 100
You lived 3153600000 seconds.
*/

let numberYear = parseInt(prompt("Enter number of years you live: "));
// let numberYear = 30;
let numberSecond = new Date().getTime() * numberYear;
console.log(`You lived ${numberSecond} seconds.`)

/* 15. Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/
console.log(now)
let newYear = now.getFullYear();
let newMonth = now.getMonth() + 1;
let newDay = now.getDay();
let newHour = now.getHours();
let newMinute = now.getMinutes();

console.log(`${newYear}-${newMonth}-${newDay} ${newHour}:${newMinute}`);
console.log(`${newDay}-${newMonth}-${newYear} ${newHour}:${newMinute}`);
console.log(`${newDay}/${newMonth}/${newYear} ${newHour}:${newMinute}`);


// Exercises: Level 3
/*
    Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
    YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/
const toCheckTwoDigits = (num) => {

    if(num.toString().length === 2){
        console.log(num)
        return num;
    }else {
        console.log(`0${num}`)
        return `0${num}`;
    }
    
}

console.log(toCheckTwoDigits(newDay)) 
console.log(`${newYear}-${toCheckTwoDigits(newMonth)}-${toCheckTwoDigits(newDay)} ${toCheckTwoDigits(newHour)}:${toCheckTwoDigits(newMinute)}`);
