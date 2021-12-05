// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //when the generateBtn is clicked, execute the following to get the password:
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "{", "|", "}", "~" ];

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
      else if (password.length > 7 && passwordLength < 129) {
        return passwordLength ();
      }
      //if the input is anything else (null, or any letters instead of numbers), try again
      else {
        window.alert("This is not a valid input. Please select a number of characters between 8 and 128.");
        return passwordLength ();
      }
}

function generatePassword () {
  //present user with a series of prompts for password criteria
  //ask user how long the password should be and store this as a variable called password.length
        //ask for character types to include in the password
          //confirm lowercase
          //confirm uppercase
          //confirm numeric
          //confirm special characters
        //make sure that at least one character type was selected
      //generate a password that matches selected criteria
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
