class HomePage {
  constructor() {}

  launchHomePage(url) {
    cy.visit(url);
    cy.title().should('eq', 'Posters Galore Administration');
  }

  login(username, password) {
    cy.xpath("//*[@name='username']").then((uname) => {
      expect(uname).to.be.visible;
      cy.wrap(uname).clear();
      cy.wrap(uname).type(username);
    });

    cy.xpath("//*[@name='password']").then((pwd) => {
      expect(pwd).to.be.visible;
      cy.wrap(pwd).type(password);
    });

    cy.xpath("//*[@type='submit' and text()='Sign in']").then((submitbtn) => {
      expect(submitbtn).to.be.visible;
      cy.wrap(submitbtn).click();
    });
  }
}

export default HomePage;
