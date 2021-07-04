$( window ).on( "load", function() {


// define variables and connect to Ids
const resultEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

alert("Enter the number of characters you want in the box.");

// use confirm boxes to ask what kind of characters user wants and save those choices to check boxes
function askUserInput() {

var upper = confirm("Do you want uppercase letters?");
if (upper == true) {
  alert("Your password will include uppercase letters.");
  uppercaseEl.checked = true;
} else {
  alert("Your password will not include uppercase letters.");
}


var lower = confirm("Do you want lowercase letters?");
if (lower == true) {
  alert("Your password will include lowercase letters.");
  lowercaseEl.checked = true;
} else {
  alert("Your password will not include lowercase letters.");
}


var numbers = confirm("Do you want numbers?");
if (numbers == true) {
  alert("Your password will include numbers.");
  numbersEl.checked = true;
} else {
  alert("Your password will not include numbers.");
}


var symbols = confirm("Do you want special characters?");
if (symbols == true) {
  alert("Your password will include special characters.");
  symbolsEl.checked = true;
} else {
  alert("Your password will not include special characters.");
}

if (lengthEl === null) {
  alert("Enter a number from 8 through 128 in the box");
}
}

askUserInput();



// create master randomizer function 
const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};


// functions for individual categories of characters
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=+-/><,.?';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// console.log(getRandomLower());
// console.log(getRandomUpper());
// console.log(getRandomNumber());
// console.log(getRandomSymbol());

// event listener for generation of password
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumbers = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumbers, 
    hasSymbols, 
    length
    );
});


// create function to generate password
function generatePassword(lower, upper, number, symbol, length) {
  // initialize a password variable
  let generatedPassword = '';
  // save number of chosen character styles to a variable
  const typesCount = lower + upper + number + symbol;

  console.log('typesCount: ', typesCount);
  
  // convert list of types to an array and filter out those that are not checked
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
  (
    item => Object.values(item)[0]
  );

  console.log('typesArr: ', typesArr);
  // require user to choose at least one type of character
  if (typesCount === 0) {
    alert("Please choose at least one type of character.");
    return '';
  }

  // enforce min and max by giving user prompt 
  if ((lengthEl.value < 8) || (lengthEl.value > 128)) {
    alert("Please enter a number of characters from 8 through 128");
    return '';
  }

  // for number of times equal to chosen password length, loop through function that randomly chooses from array of chosen types and saves result to generated password
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const functionName = Object.keys(type)[0];
      console.log('functionName: ', functionName);
      generatedPassword += randomFunction[functionName]();
    });
  }
  
  // save generated password to variable to be rendered on screen
  const finalPassword = (generatedPassword);
  console.log(finalPassword);
  return finalPassword;
}

});