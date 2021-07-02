// var password = "";


// var desiredLength = document.getElementById("number");
// // Assignment code here
// var characterArray = [];

// // lowercase
// var wantsLowercase = document.querySelector("div input[name='lowercase']");

// var addLowercase = characterArray.push(["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);

// wantsLowercase.onchange = addLowercase;


// // uppercase
// var wantsUppercase = document.querySelector("div input[name='uppercase']");

// var addUppercase = characterArray.push(["A", "B", "C", "D", "E"]);

// wantsUppercase.onchange = addUppercase;


// var wantsNumbers = document.querySelector("div input[name='numbers']");


// // numbers
// var wantsNumbers = document.querySelector("div input[name='numbers']");

// var addNumbers = characterArray.push(["1", "2", "3", "4","5", "6", "7", "8", "9", "0"]);

// wantsNumbers.onchange = addNumbers;

// // symbols


// console.log(characterArray);

// //create generatePassword function
// function generatePassword() {
  
// var randomKey = (Math.random() * 9999);
// console.log(randomKey);

// for (var i=0; i<desiredLength.length(); i++) {
//   return Math.floor((Math.random() * characterArray.length()));

// }


// // prompt user to answer if they want lowercase, uppercase, numbers, special characters
  
// // access charsets (or arrays?) based on user's responses  
// }

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



// new code



// Generator functions
// var charCode = 
//   {
//     "31": "",      "32": " ",     "33": "!",     "34": "\"",    "35": "#",    
//     "36": "$",     "37": "%",     "38": "&",     "39": "'",     "40": "(",    
//     "41": ")",     "42": "*",     "43": "+",     "44": ",",     "45": "-",    
//     "46": ".",     "47": "/",     "48": "0",     "49": "1",     "50": "2",    
//     "51": "3",     "52": "4",     "53": "5",     "54": "6",     "55": "7",    
//     "56": "8",     "57": "9",     "58": ":",     "59": ";",     "60": "<",    
//     "61": "=",     "62": ">",     "63": "?",     "64": "@",     "65": "A",    
//     "66": "B",     "67": "C",     "68": "D",     "69": "E",     "70": "F",    
//     "71": "G",     "72": "H",     "73": "I",     "74": "J",     "75": "K",    
//     "76": "L",     "77": "M",     "78": "N",     "79": "O",     "80": "P",    
//     "81": "Q",     "82": "R",     "83": "S",     "84": "T",     "85": "U",    
//     "86": "V",     "87": "W",     "88": "X",     "89": "Y",     "90": "Z",    
//     "91": "[",     "92": "\\",    "93": "]",     "94": "^",     "95": "_",    
//     "96": "`",     "97": "a",     "98": "b",     "99": "c",     "100": "d",    
//     "101": "e",    "102": "f",    "103": "g",    "104": "h",    "105": "i",    
//     "106": "j",    "107": "k",    "108": "l",    "109": "m",    "110": "n",    
//     "111": "o",    "112": "p",    "113": "q",    "114": "r",    "115": "s",    
//     "116": "t",    "117": "u",    "118": "v",    "119": "w",    "120": "x",    
//     "121": "y",    "122": "z",    "123": "{",    "124": "|",    "125": "}",    
//     "126": "~",    "127": ""
//     }

const resultEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};



// generate password function
function generatePassword(lower, upper, number, symbol, length) {
  // 1. initialize a password variable
  let generatedPassword = '';

  const typesCount = lower + upper + number + symbol;

  console.log('typesCount: ', typesCount);

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
  (
    item => Object.values(item)[0]
  );

  console.log('typesArr: ', typesArr);

  if (typesCount === 0) {
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

// copy password to clipboard


clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.innerText;

  if(!password) {
    return;
  }

  textarea.value = password;
  dosument.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert("Password copied to clipboard");
});

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
