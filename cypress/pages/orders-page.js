class OrdersPage {
  constructor() {}
  openOrdersDashboard() {
    cy.xpath('//*[text()="Orders"]').then((orders) => {
      expect(orders).to.be.visible;
      cy.wrap(orders).click();
    });
  }
}

export default OrdersPage;
