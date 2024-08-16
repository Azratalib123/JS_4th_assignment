
 // QUESTION 1 

var now = new Date();
alert(now);

 //QUESTION 2 

var months = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];
var now1 = new Date();
var currentMonth = months[now1.getMonth()];
alert("Current month: " + currentMonth);

 // QUESTION 3 

var today1 = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayName = days[today1.getDay()];

alert("Today is "+ dayName);

 // QUESTION 4 

var today2 = new Date();
var day = today2.getDay();

alert("It’s Fun day");

 // QUESTION 5 


var today3 = new Date();
 date = today3.getDate();
if (date < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}

 // QUESTION 6

var date = new Date();
alert("Current Date : "+ date)
var millisecondsSince1970 = date.getTime();
alert("Elapsed Miliseconds since january 1 , 1970 : " + millisecondsSince1970)
minutesSince1970 = Math.floor(millisecondsSince1970 / (1000 * 60));
alert("Elapsed minutes since january 1 , 1970 :" + minutesSince1970);

  // QUESTION 7 

var date1 = new Date();
var hour = date1.getHours();
if (hour < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}

 // QUESTION 8

var laterDate = new Date(2020, 11, 31); 
console.log("Later Date : " + laterDate);

// QUESTION 9 

var startRamadan = new Date(2015, 5, 18); 
var today = new Date();
var oneDay = 24 * 60 * 60 * 1000; 
var daysPast = Math.floor((today - startRamadan) / oneDay);

alert(`171 days have passed since 1st Ramadan: ${daysPast}`);

 // QUESTION 10 

var referenceDate = new Date('2024-08-16'); 
console.log(referenceDate);

var startOf2015 = new Date('2015-01-01T00:00:00Z');
var timeDifference = referenceDate - startOf2015;
var secondsElapsed = Math.floor(timeDifference / 1000);
console.log('Seconds had passed since beginning of 2015:', secondsElapsed);

  // QUESTION 11

var currentDate = new Date();
console.log("Current Date : " + currentDate);

var currentHours = currentDate.getHours();
currentDate.setHours(currentDate.getHours() + 1);

console.log(' 1 hourse ago , it was', currentDate);

  // QUESTION 12 

var currentDate1 = new Date();
console.log("Current date : "+ currentDate1);

currentDate1.setFullYear(currentDate1.getFullYear() - 100);
console.log('100 years back, it was ' + currentDate1.toDateString());

 // QUESTION 13

var age = parseInt(prompt('Please enter your age:'), 10);
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;

alert('Your birth year is: ' + birthYear);

 // QUESTION 14 


var customerName = prompt('Enter Customer Name:');
var currentMonth = new Date().toLocaleString('default', { month: 'long' });
var numberOfUnits = parseFloat(prompt('Enter Number of Units:'));
var chargesPerUnit = parseFloat(prompt('Enter Charges Per Unit:'));

var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
var latePaymentSurcharge = (0.05 * netAmountPayable).toFixed(2); 
var grossAmountPayable = (parseFloat(netAmountPayable) + parseFloat(latePaymentSurcharge)).toFixed(2);

const billDetails = `
K-Electric Bill:
------------------
Customer Name: ${customerName}
Current Month: ${currentMonth}
Number of Units: ${numberOfUnits.toFixed(2)}
Charges Per Unit: ${chargesPerUnit.toFixed(2)}
Net Amount Payable (within Due Date): ${netAmountPayable}
Late Payment Surcharge: ${latePaymentSurcharge}
Gross Amount Payable (after Due Date): ${grossAmountPayable}
`;

alert(billDetails);


