const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const LoginPage = require('../pages/loginPage');

Given('I am on the login page', () => {
  LoginPage.visit();
  cy.get('input[name="email"]').should('be.visible'); // Provera da li je input polje za email vidljivo
});

When('I login with valid credentials', () => {
  LoginPage.fillEmail('bucanjovan28@gmail.com')
           .fillPassword('Fakultet123!$')
           .submit();
});

Then('I should see the dashboard', () => {
  cy.get('#createButton').should('be.visible');
});
