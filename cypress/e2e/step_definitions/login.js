import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {ProductionURL} from Constants;

Given('I am on the Reetro website', () => {
  cy.visit("https://www.reetro.io")

  return
});

