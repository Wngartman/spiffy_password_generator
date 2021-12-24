// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var length = prompt("How many characters? (Must be between 8-128)");

  if (length == null) {
    password = " "
    return password;

  } if (length > 128 || length < 8 || length == undefined) {
    alert("Length must be greater than 8 and less than 128 Characters")
    return generatePassword();
  } else {
    alert("Perfect! " + length + " works!")

    var specifics = "";
    var lowercase = "abcdefghijklmnopqrstuvwxyz"
    var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var numeric = "01234567890"
    var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    var password = "";

    var confirmLower = confirm("Would you like to add lowercase letters to your password?")
    var confirmCapital = confirm("Would you like to add capital letters to your password?")
    var confirmNumeric = confirm("Would you like to add numbers to your password?")
    var confirmSpecial = confirm("Would you like to add special characters to your password?")

    if (confirmLower) {
      specifics = lowercase.concat(specifics);
    }
    if (confirmCapital) {
      specifics = capital.concat(specifics);
    }
    if (confirmNumeric) {
      specifics = numeric.concat(specifics);
    }
    if (confirmSpecial) {
      specifics = special.concat(specifics);
    }

    if (confirmLower == false && confirmCapital == false && confirmNumeric == false && confirmSpecial == false) {
      alert("You must choose at least one option")
      generatePassword();
    } else {
      for (let i = 0, x = specifics.length; i < length; i++) {
        password += specifics.charAt(Math.floor(Math.random() * x));;
      }

      return password
    }
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

