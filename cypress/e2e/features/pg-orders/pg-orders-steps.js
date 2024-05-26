import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Given(`user opens Posters Galore application by sending {string}`, (url) => {
  cy.visit(url);
});

When(
  `user enters {string} and {string} as user credentials and click login button`,
  (username, password) => {}
);
When('user clicks on Orders on left pane', () => {});
And(
  'opens any order randomly from the list of orders on Orders dashboard page',
  () => {}
);
Then('user should land on to order details page', () => {});
