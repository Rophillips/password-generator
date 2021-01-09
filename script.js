    // Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberChar = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","#","$","%","&","'","(","*","+",",","-","/",":",";","<=>?@[\]^_`{|}~"];



      // Write password to the #password input
function writePassword() {
  var password = generatePassword();
     
      //series of prompts for password criteria
  var passwordText = document.querySelector("#password");

      //password is either displayed in an alert or written to the page
  
      passwordText.value = password;
  
  
 
      //write a function called generatePassword that will include a series of prompts
function generatePassword() {
      //console.log("Good to go")
  var pass_length = prompt("Please choose between 8 and 128 characters")
      // Check the user input
  if(parseInt(pass_length) > 8 && parseInt(pass_length) < 128){
    alert("Sufficient")
  

  }else{
    alert("Insufficient Password")

  }

    var lowerCase = confirm("Do you need lowercase characters?")
    var upperCase = confirm("Do you need uppercase letters?")
    var number = confirm("Do you need numbers?")
    var special = confirm("Do you need special characters?")
    var randomPassword = ""
    var randomIndex = 0
    

    console.log(lowerCase, upperCase, number, special);
   if(lowerCase){
    console.log("yes for lower case")
    randomIndex = Math.floor(Math.random() * lowerCaseChar.length);
    randomPassword = lowerCaseChar[randomIndex];
    randomPassword = lowerCaseChar.concat(upperCaseChar, numberChar, specialChar);
   }
   else if(upperCase){
    console.log("yes for upper case")
    randomIndex = Math.floor(Math.random() * upperCaseChar.length);
    randomPassword = upperCaseChar[randomIndex];
    randomPassword = lowerCaseChar.concat(upperCaseChar, numberChar, specialChar);
   }
  
   else if(numberChar){
    console.log("yes for number")
    randomIndex = Math.floor(Math.random() * numberChar.length);
    randomPassword = numberChar[randomIndex];
    randomPassword = lowerCaseChar.concat(upperCaseChar, numberChar, specialChar);
  }
   else if(specialChar){
    console.log("yes for special")
    randomIndex = Math.floor(Math.random() * specialChar.length);
    randomPassword = specialChar[randomIndex];
    randomPassword = lowerCaseChar.concat(upperCaseChar, numberChar, specialChar);
   }
      //could not figure out for loop
   for (var i = 0; i < randomIndex.length; i++){
    randomPassword + pass_length(Math.floor(Math.random()));
   }
      //could not figure out concatenate to generate password
  
      //work with this to generate random password - need to return passwordText value(line 20)
      //if (lowerCaseChar && upperCaseChar && numberChar && specialChar){
    return document.getElementById("password").value = randomPassword;

  

  function newFunction() {
    console.log(answers);
  }
}
}



      // event listener to generate button
generateBtn.addEventListener("click", writePassword);

