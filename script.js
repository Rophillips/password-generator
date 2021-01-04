// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z");
var upperCase = ("A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z");
var numberChar = ("0,1,2,3,4,5,6,7,8,9");
var specialChar = ("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");


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
