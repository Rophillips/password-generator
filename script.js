// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var upperCase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var numberChar = "0,1,2,3,4,5,6,7,8,9";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var passwordLength;
var userInput;


  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
      // WHEN I click the button to generate a password
      // THEN I am presented with a series of prompts for password criteria
  var passwordText = document.querySelector("#password");

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  passwordText.value = password;

}

  //**********************************************function here********************************************************* 
  //write a function called generatePassword that will include a series of prompts
function generatePassword() {
    //console.log("Good to go")
  var pass_length = prompt("Please choose between 8 and 128 characters")
    // Check if the users input is between 8 and 128 charaters
  if(parseInt(pass_length) > 8 && parseInt(pass_length) < 128){
    alert("Sufficient")
    
    var possible = [];
    var lowerCase = confirm("Do you need lowercase characters?")
    var upperCase = confirm("Do you need uppercase letters?")
    var number = confirm("Do you need numbers?")
    var special = confirm("Do you need special characters?")
    console.log(lowerCase, upperCase, number, special);
    var answers = {
      lowerCase: lowerCase,
      upperCase: upperCase,
      number: number,
      special: special,
    }
    //for (var i = 0; i < passwordText.value; i++){
    //  var passwordText = password[Math.floor(Math.random())]
  //}
  //work with this to generate random password - need to return passwordText value(line 20)
    return "passwordText";


    // Go through the object keys and only show the ones that have a true value
    console.log(answers)


    // Create a password that is the same length pass pass length
    // Generate a string equal to a length
  
  }else  {
    alert("Insufficient Password")
  }

}
  



     // WHEN prompted for the length of the password
      // THEN I choose a length of at least 8 characters and no more than 128 characters
      // we have to ask the user how many characters they want in a password
      // we have to check and make sure between 8 and 128
      // otherwise we ask user to fix their input

      // WHEN prompted for character types to include in the password
      // THEN I choose lowercase, uppercase, numeric, and/or special characters
      // confirm if user wants lowercase
      // confirm if user wants uppercase
      // confirm if user wants numeric
      // confirm if user wants special characters

      // WHEN I answer each prompt
      // THEN my input should be validated and at least one character type should be selected
      // we need to show an error if the user does not pick a character to choose from

      // WHEN all prompts are answered
      // THEN a password is generated that matches the selected criteria
      // from all the characters chosen, choose one randomly and add it to our password X number of times.


      //***********************************************function ends here***************************************************
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

