import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('I am on Reetro Login Page', () => {
  cy.visit("https://www.reetro.app/")

});

When('I am on Login page I entered valid credentials', ()=>{
   cy.get('[placeholder="Email"]').click().type('mahrukh.loxvo13+jack@gmail.com') 
   cy.get('[placeholder="Password"]').click().type('test1234')
})

And('Click on Login Button', ()=>{

    cy.get('.login-signup-button').click()
})
