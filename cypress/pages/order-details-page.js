import { getRandomIndex } from '../utilities/helper';

class OrderDetailsPage {
  constructor() {}

  openOrderSummary() {
    cy.xpath("//*[contains(@class,'RaDatagrid-root')]").then((table) => {
      expect(table).to.be.visible;
      cy.wrap(table).within(() => {
        cy.xpath('//tr').should('not.have.length', 0);
        cy.xpath('//tr').then((orders) => {
          expect(orders).not.to.have.length(0);
          const randomOrder = getRandomIndex(0, orders.length);
          cy.wrap(orders[randomOrder]).click();
        });
      });
    });
  }

  validateOrderSummary() {
    cy.title().should('equal', 'Posters Galore Administration');
    cy.xpath("//*[text()='Reference']").should('be.visible');
    cy.xpath("//table[contains(@class,'MuiTable-root')]").should('be.visible');
  }
}

export default OrderDetailsPage;
