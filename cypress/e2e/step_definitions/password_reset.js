import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {ProductionURL} from Constants;

Given('I am on the Reetro website', () => {
  cy.visit(ProductionURL)
});

When('I click on the Forgot Password link', () => {
  cy.get('.forgot-pwd').click({force:true})
});

Then('I should be on the Forgot Password page', () => {
  cy.url().should('include' , '/forgot-password')
});

Given('I have entered my email address', () => {
  cy.get('[placeholder="Email"]').click().type("testflow832+anderson@gmail.com")
});