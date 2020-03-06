// Assignment Code
var generateBtn = document.querySelector("#generate");

var characternum = prompt ("How many characters long would you like your password?");

if (confirm("Lowercase")) {
  txt = " ";
} else {
  txt = " ";
}

if (confirm("Uppercase")) {
  txt = " ";
} else {
  txt = " ";
}

if (confirm("Numeric")) {
  txt = " ";
} else {
  txt = " ";
}

if (confirm("Special Characters")) {
  txt = " ";
} else {
  txt = " ";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

   
  
  var passwordText = document.querySelector("#password");

  var character = prompt("How many characters in your password?")

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
