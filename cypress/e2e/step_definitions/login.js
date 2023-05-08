import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ProductionURL } from "../../../Constants";

Given('I am on Reetro Login Page', () => {
  cy.visit(ProductionURL)

});

When('I am on Login page I entered valid credentials', ()=>{
   cy.get('[placeholder="Email"]').click().type('mahrukh.loxvo13+jack@gmail.com') 
   cy.get('[placeholder="Password"]').click().type('test1234')
})

Then('Click on Login Button', ()=>{

    cy.get('.login-signup-button').click()
})

Then('I select the company', ()=>{

    cy.get(':nth-child(3) > .team-box-button').click()
})

Then('I Logged in Successfully',()=>{

    //cy.url().should('include' , '/app')
})