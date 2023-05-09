import { Given,Then,When} from "@badeball/cypress-cucumber-preprocessor";
import { ProductionURL} from "../../../Constants";
import { email_field,Password_field, Login_Button,ToastMsg } from "../../../Elements";
const emails =[
    ['124t734', 'test1234'],
    ['test123', 'test1234'],
    ['test22gmail.com', 'test1234'],    
    ['.focus().blur()', 'test1234'],   
    ['test123,{shift},gmail', 'test1234'],
    ['test12gmail.com', 'test1234'],
    ['test12@gmail', 'test1234'],
]; 
Given('I am on Reetro Login Page and enter invalid credentials', ()=>{

    emails.forEach((value) => {
        cy.visit(ProductionURL)
        cy.get('[placeholder="Email"]').type(value[0])
        cy.get('[placeholder="Password"]').type(value[1])
        cy.get('.login-signup-button').click()
        cy.get('.toast-message.warning').should('contain.text', 'Please enter a valid email').and('be.visible');

        if (value[0] === 'Please enter a valid email') { 

            cy.get(ToastMsg).should('contain.text', 'Please enter a valid email').and('be.visible');
  
                 } else if (value[0] === 'Email is required') {
  
            cy.get(ToastMsg).should('contain.text', 'Please enter a valid email').and('be.visible');
  
           }
        
    })
})

Then('Checked the error message appears',()=>{
    cy.get('.toast-message.warning').should('contain.text', 'Please enter a valid email').and('be.visible');
    
})


Given('I am on Reetro Login Page and check the password validation',()=>{

    cy.visit(ProductionURL)
    cy.get(email_field).type('test@gmail.com')
    cy.get(Password_field).type('test12')
    cy.get(Login_Button).click()
    
   
})
Then('Display an error message',()=>{

    cy.get(ToastMsg).should('contain.text', 'Due to 7 unsuccessful login attempts, your account has been temporarily locked. Please reset your password and try to login with the new password.').and('be.visible');
})
 