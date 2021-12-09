// Assignment Code
var generateBtn = document.querySelector("#generate");


//arrays
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "{", "|", "}", "~" ];
var characterChoice = [];

//variables 
var lowercaseConfirm = Boolean;
var uppercaseConfirm = Boolean;
var specialCharacterConfirm = Boolean;
var numberConfirm = Boolean;

function passwordLength () {
  //ask user how long the password should be (either this or the next one should be a while loop)
  password.length = window.prompt("How many characters should your password contain?");
    //translate results of password.length from string to numerical
    password.length = parseInt(password.length);
      //if the length is less than 8, try again
      if (password.length < 8) {
        window.alert("Password must contain more than 8 characters.");
        return passwordLength ();
      }
      //if the length is greater than 128, try again
      else if (password.length > 128) {
        window.alert("Password may contain no more than 128 characters.");
        return passwordLength ();
      }
      //if the password is between 8 and 128 characters, proceed
      else if (password.length > 7 && password.length < 129) {
      }
      //if the input is anything else (null, or any letters instead of numbers), try again
      else {
        window.alert("This is not a valid input. Please select a number of characters between 8 and 128.");
        return passwordLength ();
      }
};

function resetCharacterChoiceArray () {
  characterChoice = [];
};

function characterTypeConfirm () {
  //ask for character types to include in the password
    //confirm lowercase
    var lowercaseConfirm = window.confirm("Click OK to confirm using lowercase letters in your password.");
    console.log(lowercaseConfirm);
    //confirm uppercase
    var uppercaseConfirm = window.confirm("Click OK to confirm using uppercase letters in your password.");
    console.log(uppercaseConfirm);
    //confirm numeric
    var numberConfirm = window.confirm("Click OK to confirm using special characters in your password.");
    console.log(numberConfirm);
    //confirm special characters
    var specialCharacterConfirm = window.confirm("Click OK to confirm using numbers in your password.");
    console.log(specialCharacterConfirm);
    //make sure that at least one character type was selected
    if (lowercaseConfirm === false && uppercaseConfirm === false && specialCharacterConfirm === false && numberConfirm === false) {
      window.alert("Your password must contain at least one of the character types. Please try again.")
      return characterTypeConfirm ();
    };

    //if lowercase characters were selected, add them to the array
    if (lowercaseConfirm === true) {
    characterChoice = characterChoice.concat(lowercase);
    console.log("lowercase letters added to possible password characters")
    }
    //if uppercase characters were selected, add them to the array
    if (uppercaseConfirm === true) {
      characterChoice = characterChoice.concat(uppercase);
      console.log("uppercase letters added to possible password characters")
    }
    //if numbers were selected, add them to the array
    if (numberConfirm === true) {
      characterChoice = characterChoice.concat(number);
      console.log("numbers added to possible password characters")
    }
    //if special characters were selected, add them to the array
    if (specialCharacterConfirm === true) {
      characterChoice = characterChoice.concat(specialCharacter);
      console.log("special characters added to possible password characters")
    }
  };


function generatePassword () {
  //present user with a series of prompts for password criteria
  //ask user how long the password should be and store this as a variable called password.length
  passwordLength ();
  console.log("Password length: " + password.length);

  //ask for character types to include in the password
  //conatenate arrays as needed to make an array that matches specs
  characterTypeConfirm ();
  console.log("characterChoice array:" + characterChoice);

  //generate a password that matches selected criteria
  generatedPassword = "";
  for (var i = 0; i < password.length; i++) {
    generatedPassword = generatedPassword + characterChoice[Math.floor(Math.random()*characterChoice.length)];
    console.log("generatedPassword is " + generatedPassword);
  };
  
  resetCharacterChoiceArray ();
  console.log("characterChoice array:" + characterChoice);

  return generatedPassword;
};



// Write password to the #password input
function writePassword() {
  //when the generateBtn is clicked, execute the following to get the password:
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);