// Assignment code here 

// Declaring and assigning characters confirmed to be added to a string, the number of requested characters, and declaring character criteria.
var characterHolder = "";
var passLength = 0;
var includeLower;
var includeUpper;
var includeNumeric;
var includeSpecial;

// function to determine inclusion of lowercase characters in generated password
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

// function to determine inclusion of upperrcase characters in generated password
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

// function to determine inclusion of numeric characters in generated password
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

// function to determine inclusion of special characters in generated password
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

// Where generated password process begins
var generatePassword = function() {
  
  characterHolder = "";

  passLength = Number(window.prompt("Choose a password length with a minimum of 8 characters and a maximum of 128 characters"));

  // Determines if input is valid and can continue with password formulation. 
  if (passLength >= 8 && passLength <= 128) {
    
  lowercaseFunc();
  uppercaseFunc();
  numericFunc();
  specialCharFunc();

  // Password the user will see 
  var passCode = ""

  // Loop is activated if user decides not to choose yes or truthy answer for all character confirms.
  while (!includeLower && !includeUpper && !includeNumeric && !includeSpecial) {
    window.alert("At least one character type has to be selected, start all over!");
    return generatePassword();
  }

  // Condition is satisfied if the user provided at least one choice during character confirms. 
  if(includeLower || includeUpper || includeNumeric || includeSpecial) {
    window.alert("Now proceeding with the generating of your randomized passcode!");

    for (let i = 0; i < passLength; i++) {
      passCode += characterHolder.charAt(Math.floor(Math.random() * characterHolder.length));
    }
  }

  return passCode;
  }
// Input determined invalid, user starts over and has to choose valid input.
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

// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);

