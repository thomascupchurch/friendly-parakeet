
// define variables and connect to Ids
const resultEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');


// create master randomizer function 
const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};



// create function to generate password
function generatePassword(lower, upper, number, symbol, length) {
  // initialize a password variable
  let generatedPassword = '';

  const typesCount = lower + upper + number + symbol;

  console.log('typesCount: ', typesCount);
  // convert list of types to an array and filter out those that are not checked


  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
  (
    item => Object.values(item)[0]
  );

  console.log('typesArr: ', typesArr);

  if (typesCount === 0) {
    alert("Please choose at least one type of character.");
    return '';
  }

  if (lengthEl.value < 8) {
    alert("Please enter a number of characters from 8 through 128");
    return '';
  }

  if (lengthEl.value > 128) {
    alert("Please enter a number of characters from 8 through 128");
    return '';
  }

  for (let i =0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const functionName = Object.keys(type)[0];
      console.log('functionName: ', functionName);
      generatedPassword += randomFunction[functionName]();
    });
  }
  
  const finalPassword = (generatedPassword.slice(0, length));
  console.log(finalPassword);
  return finalPassword;


};


// generate event listener
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
