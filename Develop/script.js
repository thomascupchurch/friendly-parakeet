// Assignment code here
var characterArray = [];

// lowercase
var wantsLowercase = document.querySelector("div input[name='lowercase']");

var addLowercase = characterArray.push(["a", "b", "c", "d", "e"]);

wantsLowercase.onchange = addLowercase;


// uppercase
var wantsUppercase = document.querySelector("div input[name='uppercase']");

var addUppercase = characterArray.push(["A", "B", "C", "D", "E"]);

wantsUppercase.onchange = addUppercase;


var wantsNumbers = document.querySelector("div input[name='numbers']");


// numbers
var wantsNumbers = document.querySelector("div input[name='numbers']");

var addNumbers = characterArray.push(["1", "2", "3", "4","5", "6", "7", "8", "9", "0"]);

wantsNumbers.onchange = addNumbers;




console.log(characterArray);

//create generatePassword function
function generatePassword() {
  
var randomKey = (Math.random() * 9999);
console.log(randomKey);

// prompt user to answer if they want lowercase, uppercase, numbers, special characters
  
// access charsets (or arrays?) based on user's responses  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
