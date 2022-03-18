// Assignment code here
var randomPassword = "";
// var containsLowercase = false;
// var containsCapital = false;
// var containsNumeric = false;
// var containsSpecialChar = false;

// possible characters
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    var passwordLength = setPasswordLength();
  console.log(passwordLength);

  // all available characters for password
  var availableCharacters = setAvailableCharacters();
  
}

function setPasswordLength() {
  // prompt and set user password length
  var passwordLength = prompt("How many characters will your password have. Must be more than 8 and less than 128.");

  // check if password length is valid length and is numeric
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    alert("Invalid entry. Please enter a number between 8 and 128.");
    var passwordLength = prompt("How many characters will your password have. Must be more than 8 and less than 128.");
  }
  return passwordLength;
}

function setAvailableCharacters() {
  var availableCharacters = [];
// check if any character types are in the password
  while (availableCharacters.length === 0) {
    // append lowercase if user requests them
    if (confirm("Will your password contain lowercase letters?")){
      availableCharacters.push(lowerCaseLetters);
    }

    // append capitals if user requests them
    if (confirm("Will your password contain capital letters?")){
      availableCharacters.push(capitalLetters);
    }

    // append numbers if user requests them
    if (confirm("Will your password contain numbers?")){
      availableCharacters.push(numbers);
    }

    // append special characters if user requests them
    if (confirm("Will your password contain special characters?")){
      availableCharacters.push(specialChars);
    }
  }
  return availableCharacters;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
