import {
  Given,
  When,
  And,
  Then,
  Before,
} from 'cypress-cucumber-preprocessor/steps';

import HomePage from '../../../pages/home-page';
import OrdersPage from '../../../pages/orders-page';
import OrderDetailsPage from '../../../pages/order-details-page';

let homePage;
let ordersPage;
let orderDetailsPage;

Before(() => {
  homePage = new HomePage();
  ordersPage = new OrdersPage();
  orderDetailsPage = new OrderDetailsPage();
});

Given(`user opens Posters Galore application by sending {string}`, (url) => {
  homePage.launchHomePage(url);
});

When(
  `user enters {string} and {string} as user credentials and click Sign In button`,
  (username, password) => {
    homePage.login(username, password);
  }
);
When('user clicks on Orders on left pane', () => {
  ordersPage.openOrdersDashboard();
});
And(
  'opens any order randomly from the list of orders on Orders dashboard page',
  () => {
    orderDetailsPage.openOrderSummary();
  }
);
Then('user should land on to order details page', () => {
  orderDetailsPage.validateOrderSummary();
});
