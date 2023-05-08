Feature: Login Reetro.app
 As a user 
 I want to login Reetro.app
 So I can Create Board and give feedback to it

Scenario: Login Successfully
  Given I am on Reetro Login Page
  When  I am on Login page I entered valid credentials
  Then  Click on Login Button 
  Then  I select the company
  Then  I Logged in Successfully

