Feature: Login with Invalid Credentials


Scenario: User not logged in with invalid credentials
  Given I am on Reetro Login Page and enter invalid credentials
  Then Checked the error message appears

Scenario:   Check the password Validation
   Given I am on Reetro Login Page and check the password validation
   Then  Display an error message

Scenario: Check Login button is clickable 
   Given Login Button is clickable
         