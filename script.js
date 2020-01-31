/*Psudocode 
1. Upon click of submit button prompt user how many characters would you like your pw to be?
    if not 8-128 error 
2. Do you want uppercase letters?
3. Do you want lowercase letters? 
4. Do you want numbers?
5. Do you want special charaters? 
6. String created with all possible characters that prompt has selected 
7. Generate random values with i = number of characters selected 
8. Check that generated password contains all of the selected values 
9. if not, run again until it works. 
10. When matches all conditions display pw

*/

// Assignment Code
var generateBtn = document.querySelector("#generate");
var numChar;
var upperCase;
var lowerCase;
var numbers; 
var specialChar;
var password ="";


function promptUser() {
  password ="";
  numChar = prompt('How many characters would you like your password to be? (8-128 characters');
  while (numChar < 8 || numChar > 128){
      numChar = prompt('Character choice must be between 8 and 128 characters. Please select the number of characters you would like for your password.')
    } 
    
  upperCase = confirm('Would you like your password to include uppercase characters? (ABC)');
  lowerCase = confirm('Would you like your password to include lowercase characters? (abc)');
  numbers = confirm('Would you like your password to include numbers? (123)');
  specialChar = confirm('Would you like your password to include special characters? (!@#)');
}

var charSet = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  'abcdefghijklmnopqrstuvwxyz',
  '0123456789',
  '~!@#$%^&*()_+-=,.<>/?;:[]{}\|'
]

var charString ="";

function selectedChar() {

  if (upperCase == true){
    charString = charString+charSet[0].toString();
  }
  if (lowerCase == true) {
    charString = charString+charSet[1].toString();
  } 
  if (numbers == true) {
    charString = charString+charSet[2].toString();
  } 
  if (specialChar == true) {
    charString = charString+charSet[3].toString();
  }

  console.log( `Your variabales are ${charString}`);
};

function generatePassword() {

  var charArray = charString.split("");

  for (var i=0; i<numChar; i++){
    console.log(`${charArray}`)

    var random =Math.floor(Math.random() * charString.length);
    var randomChar = charArray[random];

    console.log(`Random ${random} Char ${i+1}: ${randomChar}`)

    password += randomChar;

    console.log(`password: ${password}`)
  }

}
// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listeners to generate button
generateBtn.addEventListener("click", promptUser);
generateBtn.addEventListener("click", selectedChar);
generateBtn.addEventListener("click", generatePassword);
generateBtn.addEventListener("click", writePassword);
