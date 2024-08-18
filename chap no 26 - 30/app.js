// question no 1
// document.getElementById('numberForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     let number = parseFloat(document.getElementById('numberInput').value);

//     // The given number
//     let givenNumber = 3.45214;

//     // Round off value
//     let roundOffValue = Math.round(givenNumber);

//     // Floor value
//     let floorValue = Math.floor(givenNumber);

//     // Ceil value
//     let ceilValue = Math.ceil(givenNumber);

//     // Display results
//     let resultsDiv = document.getElementById('results');
//     resultsDiv.innerHTML = `
//         <p>Number: ${givenNumber}</p>
//         <p>Round off value of the number: ${roundOffValue}</p>
//         <p>Floor value of the number: ${floorValue}</p>
//         <p>Ceil value of the number: ${ceilValue}</p>
//     `;
// });


// question no 2

// document.getElementById('numberForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     let number = parseFloat(document.getElementById('numberInput').value);

//     // The given number
//     let givenNumber = -2.673;

//     // Round off value
//     let roundOffValue = Math.round(givenNumber);

//     // Floor value
//     let floorValue = Math.floor(givenNumber);

//     // Ceil value
//     let ceilValue = Math.ceil(givenNumber);

//     // Display results
//     let resultsDiv = document.getElementById('results');
//     resultsDiv.innerHTML = `
//         <p>Number: ${givenNumber}</p>
//         <p>Round off value of the number: ${roundOffValue}</p>
//         <p>Floor value of the number: ${floorValue}</p>
//         <p>Ceil value of the number: ${ceilValue}</p>
//     `;
// });


// question no 3

// document.getElementById('numberForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     let number = parseFloat(document.getElementById('numberInput').value);

//     // Calculate the absolute value
//     let absoluteValue = Math.abs(number);

//     // Display results
//     let resultsDiv = document.getElementById('results');
//     resultsDiv.innerHTML = `
//         <p>The absolute value of ${number} is ${absoluteValue}</p>
//     `;
// });

// // question no 4
// document.getElementById('rollButton').addEventListener('click', function() {
//     // Generate a random dice value between 1 and 6
//     let diceValue = Math.floor(Math.random() * 6) + 1;

//     // Display the dice value
//     let resultsDiv = document.getElementById('results');
//     resultsDiv.innerHTML = `
//         <p>Random dice value is: ${diceValue}</p>
//     `;
// });


// question no 5
// document.getElementById('tossButton').addEventListener('click', function() {
//     // Generate a random coin value (0 or 1)
//     let coinValue = Math.random() < 0.5 ? 'Heads' : 'Tails';

//     // Display the coin value
//     let resultsDiv = document.getElementById('results');
//     resultsDiv.innerHTML = `
//         <p>Random coin value: ${coinValue}</p>
//     `;
// });


// question no 6

// document.getElementById('generateButton').addEventListener('click', function() {
//     // Generate a random number between 1 and 100
//     let randomNumber = Math.floor(Math.random() * 100) + 1;

//     // Display the random number
//     let resultsDiv = document.getElementById('results');
//     resultsDiv.innerHTML = `
//         <p>Random number between 1 and 100: ${randomNumber}</p>
//     `;
// });

// question no 7

// document.getElementById('weightForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     let weightInput = document.getElementById('weightInput').value;

//     // Parse the weight input to extract numerical value
//     let weight = parseFloat(weightInput);

//     // Display the parsed weight
//     let resultsDiv = document.getElementById('results');
//     resultsDiv.innerHTML = `
//         <p>Your weight is: ${weight} kg</p>
//     `;
// });

// question no 8
// Store a random secret number between 1 and 10
// const secretNumber = Math.floor(Math.random() * 10) + 1;

// document.getElementById('guessForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     let userGuess = parseInt(document.getElementById('guessInput').value);

//     // Check if the user guess equals the secret number
//     let resultsDiv = document.getElementById('results');
//     if (userGuess === secretNumber) {
//         resultsDiv.innerHTML = `<p>Congratulations! You guessed the secret number: ${secretNumber}</p>`;
//     } else {
//         resultsDiv.innerHTML = `<p>Sorry, that is incorrect. The secret number was: ${secretNumber}</p>`;
//     }
// });
