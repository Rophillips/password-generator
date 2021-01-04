// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var upperCase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var numberChar = "0,1,2,3,4,5,6,7,8,9";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var passwordLength;

/*
Array = []
Object = {}
Method = ()
*/
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
  console.log("Good to go")
  let pass_length = prompt("How long do you need the password?")
  // Check if the users input is between 8 and 128 charaters
  if(parseInt(pass_length) > 8 && parseInt(pass_length) < 128){
    alert("THIS IS A GOOD PASSWORD")
    let possible = [];
    let special = confirm("Do you need special characters?")
    let capital = confirm("Do you need uppercase letters?")
    let numbers = confirm("Do you need numbers in this password?")
    let lower = confirm("Do you need Lowercase charaters?")
    console.log(special,capital,numbers,lower)
    let answers = {
      special: special,
      capital: capital, 
      numbers: numbers,
      lower: lower
    }
    // Go through the pbject keys and only show the ones that have a true value
    console.log(answers)


    // Create a password that is the same langth pass pass length
    // Generate a string equal to a langth
  }else{
    alert("You broke the rules")
  }
} 
      // WHEN prompted for password criteria
      // THEN I select which criteria to include in the password

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
