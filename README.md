# password-generator

The purpose of this assignment was to create a secure random password generator. This secure password generator functions by prompting the user for the following criteria:

Desired password length between a minimum of 8 characters and maximum of 128.
Will the new password contain lowercase letters?
Will the new password contain uppercase letters?
Will the new password contain numbers?
Will the new password contain special characters (!@#$%^&*)?
Once the program has verified that the password length meets the minimum and maximum requirements, it then determines which criteria the user has selected and generates a secure password string based on the user's input. The new password is then displayed in the text area.

Once the user has generated a new password, there is a secondary function that allows the user to copy the newly generated password to their clipboard, in order to copy and paste it into another application, such as a text editor or web browser

Acceptance Criteria

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

![image](https://user-images.githubusercontent.com/74886597/104625097-59e69700-5662-11eb-91fd-c9bd7e8506ca.png)
