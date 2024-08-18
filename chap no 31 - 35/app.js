// ques no 1

// function displayDateTime() {
//     // Get the current date and time
//     const now = new Date();

//     // Format the date and time
//     const dateTimeString = now.toLocaleString();

//     // Display the date and time in the paragraph with id="dateTime"
//     document.getElementById("dateTime").textContent = dateTimeString;
// }

// // Call the function to display the date and time when the page loads
// displayDateTime();

// // Update the date and time every second
// setInterval(displayDateTime, 1000);


// ques no 2

// // Get the current date
// const now = new Date();

// // Get the month as an index (0 = January, 11 = December)
// const monthIndex = now.getMonth();

// // Array of month names
// const monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];

// // Get the current month name
// const currentMonth = monthNames[monthIndex];

// // Alert the current month
// alert("The current month is " + currentMonth);


// question no 3


// Get the current date
// const now = new Date();

// // Get the day of the week as an index (0 = Sunday, 6 = Saturday)
// const dayIndex = now.getDay();

// // Array of day names
// const dayNames = [
//     "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
// ];

// // Get the current day name (first 3 letters)
// const currentDay = dayNames[dayIndex];

// // Alert the first 3 letters of the current day
// alert("Today is " + currentDay);

// ques no 4

// Get the current date
// const now = new Date();

// // Get the day of the week as an index (0 = Sunday, 6 = Saturday)
// const dayIndex = now.getDay();

// // Check if today is Saturday (6) or Sunday (0)
// if (dayIndex === 0 || dayIndex === 6) {
//     alert("It’s Fun day");
// }


// ques no 5

// Get the current date
// const now = new Date();

// // Get the day of the month (1 - 31)
// const currentDate = now.getDate();

// // Check if the date is less than 16
// if (currentDate < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }

// ques no 6

// Create a Date object representing the current date and time
// let currentDate = new Date();

// // Get the time in milliseconds since midnight, Jan 1, 1970
// let millisecondsSinceEpoch = currentDate.getTime();

// // Convert milliseconds to minutes
// let minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / (1000 * 60));

// // Log the result to the console
// console.log("Minutes since midnight, Jan. 1, 1970: " + minutesSinceEpoch);

// ques no 7

// Create a Date object representing the current date and time
// let currentDate = new Date();

// // Get the current hour (0-23)
// let currentHour = currentDate.getHours();

// // Check if it's before or after noon
// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

// ques no 8

// Create a Date object for December 31, 2020
// let laterDate = new Date(2020, 11, 31);

// // Log the date to the console to verify
// console.log("Later date: " + laterDate);

// ques no 9

// // Define the starting date of Ramadan (June 18, 2015)
// const ramadanStart = new Date(2015, 5, 18); // Months are zero-based (5 = June)

// // Get the current date
// const currentDate = new Date();

// // Calculate the difference in milliseconds
// const differenceInMilliseconds = currentDate - ramadanStart;

// // Convert milliseconds to days
// const millisecondsPerDay = 1000 * 60 * 60 * 24;
// const daysPast = Math.floor(differenceInMilliseconds / millisecondsPerDay);

// // Alert the number of days past
// alert("Number of days since 1st Ramadan (June 18, 2015): " + daysPast);

// ques no 10

// Define the reference date (you can change this to any desired date)
// const referenceDate = new Date(); // Current date and time

// // Define the start date (January 1, 2015)
// const startDate = new Date(2015, 0, 1); // Months are zero-based (0 = January)

// // Calculate the difference in milliseconds
// const differenceInMilliseconds = referenceDate - startDate;

// // Convert milliseconds to seconds
// const millisecondsPerSecond = 1000;
// const secondsElapsed = Math.floor(differenceInMilliseconds / millisecondsPerSecond);

// // Display the result in the paragraph with id="elapsedSeconds"
// document.getElementById("elapsedSeconds").textContent = 
//     "Seconds elapsed between January 1, 2015 and the reference date: " + secondsElapsed;


// ques no 11
// Create a Date object for the current date and time
// let currentDate = new Date();

// // Extract the current hour
// let currentHour = currentDate.getHours();

// // Display the current hour in the console (optional)
// console.log("Current hour:", currentHour);

// // Reset the Date object an hour ahead
// currentDate.setHours(currentHour + 1);

// // Display the updated Date object in the paragraph with id="updatedDate"
// document.getElementById("updatedDate").textContent = 
//     "Updated date and time: " + currentDate.toString();


// ques no 12

// Create a Date object for the current date and time
// let currentDate = new Date();

// // Reset the Date object to 100 years back
// currentDate.setFullYear(currentDate.getFullYear() - 100);

// // Display the updated Date object in an alert box
// alert("Date 100 years back: " + currentDate.toDateString());


// ques no 13
// Ask the user for their age
// let age = prompt("Please enter your age:");

// // Get the current year
// let currentYear = new Date().getFullYear();

// // Calculate the birth year
// let birthYear = currentYear - age;

// // Display the birth year in the browser
// document.write("You were born in the year " + birthYear + ".");

// ques no 14
// User-provided details
// let customerName = prompt("Please enter your name:");
// let currentMonth = new Date().toLocaleString('default', { month: 'long' });
// let numberOfUnits = parseFloat(prompt("Enter the number of units consumed:"));
// let chargesPerUnit = parseFloat(prompt("Enter the charges per unit:"));

// // Calculations
// let netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
// let latePaymentSurcharge = (netAmountPayable * 0.1).toFixed(2); // 10% surcharge
// let grossAmountPayable = (parseFloat(netAmountPayable) + parseFloat(latePaymentSurcharge)).toFixed(2);

// // Display the bill details in the browser
// document.write("<b>Customer Name:</b> " + customerName + "<br>");
// document.write("<b>Current Month:</b> " + currentMonth + "<br>");
// document.write("<b>Number of Units:</b> " + numberOfUnits.toFixed(2) + "<br>");
// document.write("<b>Charges per Unit:</b> " + chargesPerUnit.toFixed(2) + "<br>");
// document.write("<b>Net Amount Payable (within Due Date):</b> " + netAmountPayable + "<br>");
// document.write("<b>Late Payment Surcharge:</b> " + latePaymentSurcharge + "<br>");
// document.write("<b>Gross Amount Payable (after Due Date):</b> " + grossAmountPayable + "<br>");
