
 // QUESTION 1
  
 function displayCurrentDateTime() {
    var now = new Date();
    var dateTimeString = now.toLocaleString();

    alert('Current Date and Time: ' + dateTimeString);
}
displayCurrentDateTime();

// Question 2 

function greetUser(firstName, lastName) {
    var fullName = firstName + ' ' + lastName;
    var greetingMessage = 'Hello, ' + fullName + '!';
    alert(greetingMessage);
}

greetUser('Azra', 'Talib');  

// QUESTION 3 

function addTwoNumbers() {
    var number1 = parseFloat(prompt('Enter the first number:'));
    var number2 = parseFloat(prompt('Enter the second number:'));
    var sum = number1 + number2;
    return sum;
}
var result = addTwoNumbers();
alert('The sum of the two numbers is: ' + result);

 // QUESTION 4 

 function calculate(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Error: Division by zero';
            }
            break;
        default:
            result = 'Error: Invalid operator';
    }
    return result;
}

var num1 = parseFloat(prompt('Enter the first number:'));
var num2 = parseFloat(prompt('Enter the second number:'));
var operator = prompt('Enter the operator (+, -, *, /):');

var result = calculate(num1, num2, operator);
alert('The result is: ' + result);

// QUESTION 5 

function square(number) {
    return number * number;
}
var result = square(5); 
console.log('The square of the number is:', result);
 
// QUESTION 6 
 
function factorial(n) {
    if (n < 0) {
        return 'Error: Factorial is not defined for negative numbers';
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
var number = parseInt(prompt('Enter a number to compute its factorial:'), 10);
var result = factorial(number);
alert('The factorial of ' + number + ' is: ' + result);


// QUESTION 7

function countNumbers(start, end) {
    if (start > end) {
        alert('Error: Start number should be less than or equal to end number.');
        return;
    }
    let countingSequence = '';
    for (let i = start; i <= end; i++) {
        countingSequence += i + ' ';
    }
    alert('Counting from ' + start + ' to ' + end + ': ' + countingSequence.trim());
}
var startNumber = parseInt(prompt('Enter the start number:'), 10);
var endNumber = parseInt(prompt('Enter the end number:'), 10);

countNumbers(startNumber, endNumber);

// QUESTION 8 

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(number) {
        return number * number;
    }
    const baseSquare = calculateSquare(base);
    const perpendicularSquare = calculateSquare(perpendicular);
    const hypotenuseSquare = baseSquare + perpendicularSquare;
    const hypotenuse = Math.sqrt(hypotenuseSquare);

    return hypotenuse;
}
var base = parseFloat(prompt('Enter the base of the right-angle triangle:'));
var perpendicular = parseFloat(prompt('Enter the perpendicular of the right-angle triangle:'));

var result = calculateHypotenuse(base, perpendicular);
alert('The hypotenuse of the right-angle triangle is: ' + result);

// QUESTION 9

//values 
function calculateRectangleArea(width, height) {
    return width * height;
}
var area1 = calculateRectangleArea(10, 5);
console.log('Area with values as arguments:', area1);

// variables
var width = 10;
var height = 5;
var area2 = calculateRectangleArea(width, height);
console.log('Area with variables as arguments:', area2);

// QUESTION 10 
 
function isPalindrome(str) {
    var cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    var reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

var inputString = prompt('Enter a string to check if it is a palindrome:');
var result = isPalindrome(inputString);

alert('The string "' + inputString + '" is ' + (result ? 'a palindrome.' : 'not a palindrome.'));

//  QUESTION 11
 
function capitalizeFirstLetter(str) {
    var words = str.split(' ');
    var capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return capitalizedWords.join(' ');
}
var inputString1 = 'the quick brown fox';
var result = capitalizeFirstLetter(inputString1);
console.log('Capitalized String:', result);


// QUESTION 12

function findLongestWord(str) {
    var words1 = str.split(' ');
    let longestWord = '';
    for (const word of words1) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
var inputString2 = 'Web Development Tutorial';
var result = findLongestWord(inputString2);

console.log('The longest word is:', result);

// QUESTION 13 

function countOccurrences(str, letter) {
    var count = 0;
    for (var char of str) {
        if (char === letter) {
            count++;
        }
    }
    return count;
}
var inputString = 'JSResourceS.com';
var letterToCount = 'o';
var result = countOccurrences(inputString, letterToCount);

console.log(`The letter '${letterToCount}' occurs ${result} times in the string.`);

// QUESTION 14 

var PI = Math.PI; 

function calcCircumference(radius) {
    var circumference = 2 * PI * radius;
    console.log('The circumference is ' + circumference);
}
function calcArea(radius) {
    var area = PI * radius * radius;
    console.log('The area is ' + area);
}
var radius = parseFloat(prompt('Enter the radius of the circle:'));

calcCircumference(radius);
calcArea(radius);
