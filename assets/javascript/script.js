// Assignment code here 

var characterHolder = ""
var passLength = 0;
var includeLower;
var includeUpper;
var includeNumeric;
var includeSpecial;


var lowercaseFunc = function() {
  includeLower = window.confirm("Do you want to include lowercase letters in your password? Yes = OK/ NO = cancel");
  if(includeLower) {
    characterHolder += "abcdefghijklmnopqrstuvwxyz";
    console.log("Added lowercase letters to the password pool");
    return includeLower;
  }
  else {
    return;
  }
}

var uppercaseFunc = function() {
  includeUpper = window.confirm("Do you want to include uppercase letters in your password? Yes = OK/ NO = cancel");
  if(includeUpper) {
    characterHolder += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    console.log("Added uppercase letters to the password pool");
    return includeUpper;
  }
  else {
    return;
  }
}

var numericFunc = function() {
  includeNumeric = window.confirm("Do you want to include numbers in your password? Yes = OK/ NO = cancel");
  if(includeNumeric) {
    characterHolder += "1234567890"
    console.log("Added numerics to the password pool");
    return includeNumeric;
  }
  else {
    return;
  }
}

var specialCharFunc = function() {
  includeSpecial = window.confirm("Do you want to include special characters in your password? Yes = OK/ NO = cancel");
  if(includeSpecial) {
    characterHolder += "!@#$%^&*()?+";
    console.log("Added special characters to the password pool");
    return includeSpecial;
  }
  else {
    return;
  }
} 

var generatePassword = function() {
  
  characterHolder = "";

  passLength = Number(window.prompt("Choose a password length with a minimum of 8 characters and a maximum of 128 characters"));

  if (passLength >= 8 && passLength <= 128) {
    
  lowercaseFunc();
  uppercaseFunc();
  numericFunc();
  specialCharFunc();

  var passCode = ""

  while (!includeLower && !includeUpper && !includeNumeric && !includeSpecial) {
    window.alert("At least one character type has to be selected, start all over!");
    return generatePassword();
  }

  if(includeLower || includeUpper || includeNumeric || includeSpecial) {
    window.alert("Now proceeding with the generating of your randomized passcode!");

    for (let i = 0; i < passLength; i++) {
      passCode += characterHolder.charAt(Math.floor(Math.random() * characterHolder.length));
    }
  }

  return passCode;
  }
else {
  alert("invalid input! Input a number 8 characters or more with a max of 128 characters.");
  return generatePassword();
}
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

