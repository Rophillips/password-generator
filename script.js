// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", "*", "+", ",", "-", "/", ":", ";", "<=>?@[\]^_`{|}~"];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  //series of prompts for password criteria
  var passwordText = document.querySelector("#password");

  //password is either displayed in an alert or written to the page

  passwordText.value = password;

}

//write a function called generatePassword that will include a series of prompts
function generatePassword() {
  //console.log("Good to go")
  var pass_length = parseInt(prompt("Please choose between 8 and 128 characters"));
  // fixed to make sure user input generates correct length
  if (pass_length >= 8 && pass_length <= 128) {
    alert("Sufficient")
  } else {
    alert("Insufficient Password")
    generatePassword()

  }
  var lowerCase = confirm("Do you need lowercase characters?")
  var upperCase = confirm("Do you need uppercase letters?")
  var number = confirm("Do you need numbers?")
  var special = confirm("Do you need special characters?")
  var randomPassword = ""
  var outputPassword = ""
  var randomIndex = 0
  var possibles = []

  console.log(lowerCase, upperCase, number, special);
  let answers = [lowerCase, upperCase, number, special]
  let trues = answers.filter(answer => answer == true)
  //fixed if statements to run random characters
  if (trues.length == 0) {
    alert("No valid options selected")
    generatePassword()
  }

  if (lowerCase) {
    console.log("yes for lower case")
    possibles.push(lowerCaseChar);
  } else {
    console.log("no for lower case");
  }

  if (upperCase) {
    console.log("yes for upper case")
    possibles.push(upperCaseChar);
  } else {
    console.log("no for upper case");
    
  }

  if (number) {
    console.log("yes for number")
    possibles.push(numberChar);
  } else {
    console.log("no number");
    
  }

  if (special) {
    console.log("yes for special")
    possibles.push(specialChar);
  } else {
    console.log("no special");
    
  }

  possibles.flat()
    
  for (var i = 0; i < pass_length; i++) {
    // Add a random accepted character to the random password
    let random_arr = possibles[Math.floor(Math.random() * possibles.length)]
    let random_char = random_arr[Math.floor(Math.random() * random_arr.length)]
    outputPassword += random_char
  }



  return document.getElementById("password").value = outputPassword;
}

function newFunction() {
  console.log(answers);
}



// event listener to generate button
generateBtn.addEventListener("click", writePassword);

